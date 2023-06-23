<script lang="ts">
	import HiddenCards from './HiddenCards.svelte';
	import type EditorState from './$types/Profile';
	import FileSaver from 'file-saver';
	import * as htmltoimage from 'html-to-image';
	import Cards from './Cards.svelte';
	import CardArray from './CardArray.svelte';
	export let editorState: EditorState;

	let cardArray = false;

	const toggleCardArray = () => {
		cardArray = cardArray ? false : true;
	};

	import { fade, scale } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCamera } from '@fortawesome/free-solid-svg-icons';

	let cardSnapshot: HTMLElement;
	const takeSnapshot = () => {
		try {
			htmltoimage.toBlob(cardSnapshot).then((blob) => {
				if (window.saveAs) {
					window.saveAs(blob, 'cards.png');
				} else {
					FileSaver.saveAs(blob, 'cards.png');
				}
			});
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="container" bind:this={cardSnapshot}>
	{#if cardArray}
		<div
			class="card-array"
			in:fade={{ duration: 100 }}
			out:fade={{ duration: 100 }}
			on:click={toggleCardArray}
			on:keydown={toggleCardArray}
		>
			<CardArray {editorState} />
		</div>
	{:else}
		<div
			class="cards"
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
			on:click={toggleCardArray}
			on:keydown={toggleCardArray}
		>
			<Cards {editorState} />
		</div>
	{/if}
</div>
<div class="footer">
	<div class="instructions">
		<p>Click cards to toggle views. Press the screenshot button to save your deck!</p>
	</div>
	<button title="take a snapshot" class="snapshot-button" on:click={takeSnapshot}>
		<FontAwesomeIcon icon={faCamera} style="inline-size: 60%;" />
	</button>
</div>

<style>
	.container {
		display: grid;
		block-size: 100%;
		overflow: hidden;
	}
	.cards {
		overflow: hidden;
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.card-array {
		overflow: hidden;
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.snapshot-button {
		cursor: pointer;
		background: #eeeeee;
		color: grey;
		border-radius: 0.5em;
		border: none;
		align-self: center;
		inline-size: 10%;
		aspect-ratio: 1;
		z-index: 5;
	}

	.footer {
		padding: 1em;
		display: flex;
		justify-content: center;
		align-items: stretch;
		gap: 5%;
	}

	.instructions {
		font-family: sans-serif;
		display: flex;
		align-items: center;
		color: white;
		padding: 0em 0.5em;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 0.5em;
	}

	@media screen and (max-width: 1200px) {
	}
</style>
