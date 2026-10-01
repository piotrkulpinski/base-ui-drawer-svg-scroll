import { Drawer } from "@base-ui/react/drawer"

const ROWS = Array.from({ length: 20 }, (_, index) => index + 1)

export function App() {
  return (
    <main className="page">
      <p>
        Open the drawer on a touch device (or Chrome DevTools device mode), scroll the content to
        the bottom, then drag <strong>down</strong> starting on the blue SVG.
      </p>

      <Drawer.Root swipeDirection="down">
        <Drawer.Trigger className="button">Open drawer</Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Backdrop className="backdrop" />
          <Drawer.Viewport className="viewport">
            <Drawer.Popup className="popup">
              <div className="grabber" />
              <Drawer.Content className="content">
                <Drawer.Title>Scrollable content</Drawer.Title>

                {ROWS.map(row => (
                  <p key={row}>Row {row}: dragging down on this text scrolls the content up.</p>
                ))}

                <p>Dragging down on the SVG below swipes the drawer instead of scrolling:</p>

                <svg className="chart" viewBox="0 0 300 150" aria-label="Chart">
                  <rect width="300" height="150" fill="#3b82f6" />
                  <path d="M0 120 L60 80 L120 100 L180 40 L240 60 L300 20" stroke="white" strokeWidth="4" fill="none" />
                </svg>

                <button type="button" className="button">
                  <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden>
                    <circle cx="12" cy="12" r="10" fill="#ef4444" />
                  </svg>
                  Same for an icon
                </button>
              </Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </main>
  )
}
