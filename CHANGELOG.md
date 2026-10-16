# Changelog

## 0.1.1

- Add the Pro pair (Pro and Pro Light), the flat mono look PI WEB used to ship as its built-in appearance, with its fonts, radii and surfaces unchanged.
- PI WEB releases that ship Material as their built-in appearance hide this pack's Material entries and move a saved Material choice to the built-in one, so Material is listed once. Older PI WEB releases ignore the new `replacedBy` field and keep using the pack's Material themes.

## 0.1.0

- First release. The theme pack moves out of PI WEB's bundled plugins into this package, which PI WEB 2.202609.0 or later loads through the plugin contract; the plugin id stays `themes`.
- Pairs that follow the system light/dark setting: PI WEB, Clay and the new Material pair (M3-flavoured, with its own Roboto-style faces and 4/8/12/16/20 radius ladder). Single themes: PI WEB Classic, Night, Paper, High Contrast.
- Every theme maps onto the semantic surface ladder (canvas, panel, card, raised, pressed), so message cards, dialogs and popovers step visibly instead of sharing one surface.
- Every theme names the label colour on its accent fill (`--pi-on-accent`) at 4.9:1 or better; PI WEB Dark's primary buttons measured 3.74:1 when the label borrowed the background colour.
- Every theme pins the shape it was designed with (its font stacks and radius scale), so it keeps its look on PI WEB's flat mono default.
- Published to npm: install with `pi install npm:@gang-of-beads/pi-web-themes`.
