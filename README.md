# pi-web-themes

A theme pack for [PI WEB](https://github.com/Gang-of-Beads/pi-web). It adds more looks to **Settings → Appearance**, each built from PI WEB's theme tokens through the plugin contract:

| Pair (follows the system light/dark setting) | Light | Dark |
|---|---|---|
| PI WEB | PI WEB Light | PI WEB Dark |
| Clay | Clay Paper | Clay |
| Material | Material Light | Material Dark |

Single themes: PI WEB Classic, Night, Paper, High Contrast.

Every theme sets the same tokens as PI WEB's own themes, so text, borders, status colours and the label colour on accent fills keep their contrast. `contrast.test.ts` checks it.

## Install

```sh
pi install npm:@gang-of-beads/pi-web-themes
```

To follow `main` instead of releases, install `git:github.com/Gang-of-Beads/pi-web-themes`. It needs PI WEB 2.202609.0 or later; earlier releases bundle their own copy of this plugin.

Then reload the PI WEB page and pick a theme in **Settings → Appearance**. The plugin is browser-only: no session daemon restart is needed. To turn it off, use **Settings → PI WEB plugins** (plugin id `themes`).

For local development, link the folder into PI WEB's local plugin directory instead:

```bash
ln -s "$PWD" ~/.pi-web/plugins/themes
```

## Develop

```bash
npm install
npm run check
```

`npm run check` type-checks, runs the theme shape and contrast tests, and bundles `pi-web-plugin.ts` (with Lit inlined) into `pi-web-plugin.js`, which the package ships. The bundle is committed so that a git install works without a build step, and the check fails when it is out of date.

## Releasing

Update `version` in `package.json` and `package-lock.json`, give `CHANGELOG.md` a section for it, commit, and push a matching `v<version>` tag. The release workflow checks the package, publishes it to npm, and creates the GitHub Release from that CHANGELOG section.

## License

MIT.
