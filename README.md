# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

[![Netlify Status](https://api.netlify.com/api/v1/badges/1a846d6d-e72e-4a48-a85a-8c117b92c947/deploy-status)](https://app.netlify.com/projects/libcolo/deploys)

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
