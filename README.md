# Base UI Drawer: a drag that starts on an SVG swipes instead of scrolling

Reproduction for `@base-ui/react` 1.8.0.

Open on [StackBlitz](https://stackblitz.com/github/piotrkulpinski/base-ui-drawer-svg-scroll), or locally with `npm install && npm run dev`.

1. Use a touch device, or Chrome DevTools device mode with touch emulation.
2. Open the drawer and scroll its content to the bottom.
3. Drag down starting on a row of text: the content scrolls up (expected).
4. Drag down starting on the blue SVG, or on the red icon: the drawer follows the finger and closes, and the content does not scroll.

`findScrollableTouchTarget` in `utils/scrollable.ts` starts its walk only when the touch target is an `HTMLElement`. An `SVGElement` target yields no scroll container, so `DrawerViewport` treats the gesture as a swipe.
