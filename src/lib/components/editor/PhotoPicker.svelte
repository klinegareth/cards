<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { config } from '@fortawesome/fontawesome-svg-core';
	import { faImage } from '@fortawesome/free-solid-svg-icons';
	config.autoAddCss = false;
	let input: HTMLInputElement;
	export let image: string | ArrayBuffer | null;
	let imageElement: HTMLImageElement;
	let showImage = false;
	const handleClick = () => {
		input.click();
	};
	const onChange = () => {
		if (input.files) {
			const file = input.files[0];
			showImage = true;

			const reader = new FileReader();
			reader.addEventListener('load', function () {
				imageElement.setAttribute('src', reader.result ? reader.result.toString() : '');
				image = reader.result;
			});
			reader.readAsDataURL(file);

			return;
		}
		showImage = false;
	};
</script>

<h1>add an image</h1>
<div class="container">
	<button
		on:click={handleClick}
		class="file-upload-button"
		style="outline: {showImage ? 'none' : '2px solid lightgrey'}"
	>
		<input
			type="file"
			style="display: none;"
			accept="image/*"
			name="image"
			required
			bind:this={input}
			on:input={onChange}
		/>
		{#if showImage}
			<img src="" alt="Preview" bind:this={imageElement} class="image-preview" />
		{:else}
			<FontAwesomeIcon icon={faImage} style="inline-size: 8em; color: grey; overflow: visible" />
			<span>click to add image</span>
		{/if}
	</button>
</div>

<style lang="scss">
	.container {
		display: flex;
		block-size: 100%;
		align-items: center;
		flex-direction: column;
	}
	.file-upload-button {
		border-radius: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		inline-size: 65%;
		aspect-ratio: 1;
		margin: auto;
		padding: 0;
		background: #eeeeee;
		border: none;
		cursor: pointer;
		outline: 2px solid lightgrey;
		box-shadow: 0px 0px 36px grey;
		transition: 0.2s box-shadow, 0.1s transform;
		color: grey;
		font-size: 1em;
	}

	span {
		padding-top: 1em;
	}

	.file-upload-button:hover {
		box-shadow: 0px 0px 24px grey;
		transform: scale(0.99);
	}

	img {
		border-radius: 1em;
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
	}
</style>
