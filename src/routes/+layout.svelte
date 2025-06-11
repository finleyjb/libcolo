<script lang="ts">
	import '@picocss/pico';
	let { children } = $props();
</script>

<nav>
	<ul>
		<li><strong>Colorado Liberation Collective</strong></li>
	</ul>
</nav>

{@render children()}

<footer>
	<p><a href="https://www.instagram.com/colorado.liberation.collective/">Instagram</a></p>
</footer>
