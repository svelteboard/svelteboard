# Svelte compiler Worker

This Worker restores the compiler shim used by the legacy production REPL at
`https://svelte-compiler.dashing.workers.dev/`.

The legacy REPL Worker dynamically imports this URL and expects that import to
set `globalThis.svelte`. Keep the compiler pinned to `5.0.0-next.80`, because
the production REPL also resolves Svelte runtime internals from that prerelease.

Deploy from this directory:

```sh
npx wrangler deploy --config wrangler.jsonc
```
