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

On the machine that runs PI WEB, open **Settings → Pi packages** and install:

```
git:github.com/Gang-of-Beads/pi-web-themes
```

or from a shell:

```bash
pi install git:github.com/Gang-of-Beads/pi-web-themes
```

Then reload the PI WEB page and pick a theme in **Settings → Appearance**. The plugin is browser-only: no session daemon restart is needed. To turn it off, use **Settings → PI WEB plugins** (plugin id `themes`).

For local development, link the folder into PI WEB's local plugin directory instead:

```bash
ln -s "$PWD" ~/.pi-web/plugins/themes
```

## Develop

```bash
npm install
npm run build   # bundles pi-web-plugin.ts into pi-web-plugin.js, which the package ships
npm test        # theme shape and contrast checks
```

The built `pi-web-plugin.js` is committed, so a git install works without a build step. Rebuild and commit it with every change to `pi-web-plugin.ts`.

## License

MIT.
