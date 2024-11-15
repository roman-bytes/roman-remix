import { hydrateRoot } from "react-dom/client";
import { startTransition, StrictMode } from 'react';
import { RemixBrowser } from "@remix-run/react";

async function prepareApp() {
    if (process.env.NODE_ENV === 'development') {
        const { worker } = await import('./mocks/browser')
        return worker.start({ quiet: true });
    }
    return Promise.resolve();
}

// Increase the listener limit
if (typeof window !== 'undefined') {
  window.process?.setMaxListeners(20);
}

hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );