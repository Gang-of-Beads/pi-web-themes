---
"@gang-of-beads/pi-web-themes": patch
---

Every theme names the label colour on its own accent fill (`--pi-on-accent`).
The app was using each theme's background colour for that label, and a
background is chosen to sit behind content rather than to carry one: PI WEB
Dark measured 3.74:1 on its own primary buttons, below the AA floor for the
12px 600-weight label they carry. Each theme now ships a foreground at 4.9:1 or
better, and the contrast test fails a theme that omits it.
