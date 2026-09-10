---
"@gang-of-beads/pi-web-themes": patch
---

Pin the soft shape against the core's new pro default.

The core's own look is now the flat mono TUI shape - monospace face, square
radii, no elevation - and themes that ship only colours would render their
soft palette on that skeleton. Every pack theme now pins the shape it was
designed with: the sans stacks and the original 4/6/8/12/16 radius scale,
through the core contract's new shape/typography token stops.
