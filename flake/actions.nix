{inputs, ...}: {
  imports = [inputs.actions-nix.flakeModules.default];

  flake.actions-nix = {
    pre-commit.enable = true;
    defaults = {
      jobs = {
        runs-on = "ubuntu-latest";
        timeout-minutes = 30;
      };
    };

    workflows = let
      on = {
        push = {
          branches = ["master" "dev-qezta"];
          paths-ignore = [
            "**/*.md"
            ".github/**"
          ];
        };
        pull_request = {
          branches = ["master" "dev-qezta"];
        };
        workflow_dispatch = {};
      };
      common-actions = [
        {
          name = "Checkout repo";
          uses = "actions/checkout@main";
          "with" = {
            fetch-depth = 1;
          };
        }
      ];
    in {
      ".github/workflows/flake-check.yml" = {
        inherit on;
        jobs.checking-flake = {
          steps =
            common-actions
            ++ [
              inputs.actions-nix.lib.steps.DeterminateSystemsNixInstallerAction
              {
                name = "Run nix flake check";
                run = "nix flake check --impure --all-systems --no-build";
              }
            ];
        };
      };
      ".github/workflows/gen-sitemap.yml" = {
        inherit on;
        jobs.checking-flake = {
          steps =
            common-actions
            ++ [
              {
                name = "Set Base URL based on branch";
                id = "set_base_url";
                run = ''
                  if [[ "''${{ github.ref_name }}" == "master" ]]; then
                    echo "BASE_URL=https://www.divit.qezta.com/" >> $GITHUB_ENV
                  elif [[ "''${{ github.ref_name }}" == "dev-qezta" ]]; then
                    echo "BASE_URL=https://www.qezta.com/" >> $GITHUB_ENV
                  else
                    echo "Unknown branch: ''${{ github.ref_name }}"
                    exit 1
                  fi
                '';
              }
              {
                name = "Generate the sitemap";
                uses = "cicirello/generate-sitemap@v1";
                "with" = {
                  base-url-path = "\${{ env.BASE_URL }}";
                  sitemap-path = "static/sitemap.xml";
                };
              }
              {
                name = "Commit and push sitemap";
                run = ''
                  if [[ `git status --porcelain static/sitemap.xml` ]]; then
                    git config --global user.name 'github-actions'
                    git config --global user.email '41898282+github-actions[bot]@users.noreply.github.com'
                    git add static/sitemap.xml
                    git commit -m "Automated sitemap update for ''${{ github.ref_name }}" static/sitemap.xml
                    git push
                  else
                    echo "No changes to sitemap.xml"
                  fi '';
              }
            ];
        };
      };
    };
  };
}