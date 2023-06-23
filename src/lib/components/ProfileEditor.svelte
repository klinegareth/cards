<script lang="ts">
	import PhotoPicker from './editor/PhotoPicker.svelte';
	import Signature from './editor/Signature.svelte';
	import type EditorState from './$types/Profile';
	import Questions from './editor/Questions.svelte';
	export let editorState: EditorState;
	let signature = '';
	let photos = ['', ''];
	let answers = [''];
	let selectedQuestions = ['', '', ''];
	let createdBy = '';
	let colors = ['#ffffff', '#ffffff'];
	$: editorState = {
		photos: photos,
		questions: selectedQuestions,
		answers: answers,
		colors: colors,
		signature: signature,
		createdOn: new Date(Date.now()).toLocaleDateString('en-US', {
			dateStyle: 'long'
		}),
		createdBy: createdBy
	};
</script>

<form class="profile-editor">
	<div
		class="editor-section section-1"
		style="border-bottom: 2px dashed grey; border-right: 2px dashed grey"
	>
		<Questions bind:selectedQuestions bind:answers bind:color={colors[0]} />
	</div>
	<div class="editor-section section-2" style="border-bottom: 2px dashed grey">
		<PhotoPicker bind:image={photos[0]} />
	</div>
	<div class="editor-section section-3" style="border-right: 2px dashed grey">
		<PhotoPicker bind:image={photos[1]} />
	</div>
	<div class="editor-section section-4">
		<Signature bind:name={createdBy} bind:signature bind:color={colors[1]} />
	</div>
</form>

<style lang="scss">
	:global(h1) {
		color: grey;
	}
	.profile-editor {
		display: grid;
		grid-template: 1fr 1fr / 1fr 1fr;
		block-size: 100%;
		font-family: sans-serif;
	}

	.editor-section {
		text-align: center;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	@media screen and (max-width: 1200px) {
		.profile-editor {
			inline-size: 100%;
			display: flex;
			flex-direction: column;
		}
		.editor-section {
			flex: 1 1 25dvh;
			block-size: 100%;
			overflow: visible;
		}
	}
</style>
