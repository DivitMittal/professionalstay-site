{common-on, ...}: {
  flake.actions-nix.workflows.".github/workflows/gen-sitemap.yml" = {
    on = common-on;
    jobs.checking-flake = {
      steps = [
        {
          name = "Checkout repo";
          uses = "actions/checkout@main";
          "with" = {
            fetch-depth = 1;
          };
        }
        {
          name = "Set Base URL based on branch";
          id = "set_base_url";
          run = ''echo "BASE_URL=https://www.professionalstay.in/" >> $GITHUB_ENV'';
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
}
