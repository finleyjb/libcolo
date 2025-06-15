<script lang="ts">
  import '@picocss/pico';
  let { children } = $props();

  const SUBHEADERS = [
    'Humans don’t belong in cages, neither do animals',
    'Love pigs, hate the police',
    'Eat the rich, not the animals'
  ];

  const subheaderIndex = Math.floor(Math.random() * SUBHEADERS.length);
  const subheader = SUBHEADERS[subheaderIndex];
</script>

<hgroup>
  <h1>Colorado Liberation Collective</h1>
  <p>{subheader}</p>
</hgroup>

{@render children()}

<footer>
  <p><a href="https://www.instagram.com/colorado.liberation.collective/">Instagram</a></p>
</footer>
