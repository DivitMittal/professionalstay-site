{
  inputs,
  lib,
  ...
}: {
  imports = [inputs.devshell.flakeModule];

  perSystem = {pkgs, ...}: {
    devshells.default = {
      packages = lib.attrsets.attrValues {
        inherit
          (pkgs)
          vscode-langservers-extracted
          emmet-language-server
          typescript-language-server
          ;
        inherit (pkgs.nodePackages) prettier;
      };
    };
  };
}
