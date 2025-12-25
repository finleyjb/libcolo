<script lang="ts">
  import '@picocss/pico';
  import GoogleFont from '@svelte-web-fonts/google';
  import type { GoogleFontDefinition, GoogleFontVariant } from '@svelte-web-fonts/google';

  let { children } = $props();

  const SUBHEADERS = [
    'Humans don’t belong in cages, neither do animals',
    'Love pigs, hate the police',
    'Eat the rich, not the animals',
  ];

  const subheaderIndex = Math.floor(Math.random() * SUBHEADERS.length);
  const subheader = SUBHEADERS[subheaderIndex];

  const fonts: GoogleFontDefinition[] = [
    {
      family: 'Outfit',
      variants: ['700'],
    },
    {
      family: 'Public Sans',
      variants: ['400'],
    },
  ];
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <GoogleFont {fonts} display="swap" />
</svelte:head>

<hgroup>
  <h1>Colorado Liberation Collective</h1>
  <p>{subheader}</p>
</hgroup>

{@render children()}

<footer>
  <p><a href="https://www.instagram.com/colorado.liberation.collective/">Instagram</a></p>
</footer>

<style>
  [data-theme='light'],
  :root:not([data-theme='dark']),
  :host(:not([data-theme='dark'])) {
    --pico-background-color: #faf7f2;
    --pico-primary: #d4a017;
    --pico-primary-underline: #d4a017;
    --pico-font-family-sans-serif: 'Public Sans';
    --pico-font-family: var(--pico-font-family-sans-serif);
    --pico-font-size: 18px;
  }

  h1 {
    --pico-color: #5d2e5f;
    --pico-font-family-sans-serif: 'Outfit';
    --pico-font-family: var(--pico-font-family-sans-serif);
    --pico-font-size: 48px;
    --pico-font-weight: 700;
  }

  p {
    --pico-font-family-sans-serif: 'Public Sans';
    --pico-font-family: var(--pico-font-family-sans-serif);
    --pico-color: #2b2b2b;
    --pico-font-weight: 400;
  }
</style>
