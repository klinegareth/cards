<script lang="ts">
	export let image: string;
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { config } from '@fortawesome/fontawesome-svg-core';
	import { faImage } from '@fortawesome/free-solid-svg-icons';
	config.autoAddCss = false;
	console.log(image);
</script>

{#if image}
	<img src={image} alt="Preview" style="inline-size: 100%; block-size: 100%; object-fit: cover;" />
{:else}
	<div style="display: flex; flex-direction: column; justify-content: center; block-size: 100%;">
		<FontAwesomeIcon icon={faImage} style="margin: auto; inline-size: 50%; color: grey" />
	</div>
{/if}
