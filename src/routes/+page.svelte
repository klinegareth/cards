<script lang="ts">
	import ProfileEditor from '$lib/components/ProfileEditor.svelte';
	import ProfilePreview from '$lib/components/ProfilePreview.svelte';
	import type EditorState from './$types/Profile';

	let editorState: EditorState;
	$: editorState = {
		photos: [''],
		questions: [''],
		answers: [''],
		colors: ['#ffffff', '#ffffff'],
		signature: '',
		createdOn: ''
	};
</script>

<main>
	<div class="profile-preview">
		<ProfilePreview {editorState} />
	</div>
	<div class="profile-editor">
		<ProfileEditor bind:editorState />
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		block-size: 100dvh;
		background-color: #dddddd;
	}
	.profile-preview {
		justify-content: flex-start;
		display: flex;
		max-block-size: 100%;
		block-size: 100%;
		flex-direction: column;
		border-right: dashed 2px grey;
	}
	.profile-editor {
		display: flex;
		flex-direction: column;
	}

	@media screen and (max-width: 1200px) {
		main {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			justify-content: start;
		}
		.profile-preview {
			display: flex;
			flex-direction: column;
			block-size: 50dvh;
			min-block-size: 50dvh;
			border-bottom: dashed 2px grey;
		}
		.profile-editor {
			display: flex;
			min-inline-size: 100%;
			inline-size: 100%;
		}
	}
</style>
