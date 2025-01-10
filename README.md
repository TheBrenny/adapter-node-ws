# adapter-node-ws

[Adapter](https://svelte.dev/docs/kit/adapters) for SvelteKit apps that generates a standalone Node server, and exposes it as `globalThis.HTTP_SERVER`

## Docs

[Docs](https://svelte.dev/docs/kit/adapter-node)

`vite.config.js`:
```js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import {WebSocketDevPlugin } from `adapter-node-ws`; // add this line

export default defineConfig({
	plugins: [sveltekit(), WebSocketDevPlugin] // add the plugin
});
```

Anywhere in your server-side code `globalThis.HTTP_SERVER` will be the raw HTTP server provided by the built-in polka server.
