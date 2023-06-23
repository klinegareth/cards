<script lang="ts">
	import type EditorState from './$types/Profile';
	import PhotoPreview from '$lib/components/preview/PhotoPreview.svelte';
	import QuestionsPreview from '$lib/components/preview/QuestionsPreview.svelte';
	import SignaturePreview from '$lib/components/preview/SignaturePreview.svelte';

	export let editorState: EditorState;
	$: ({ questions, photos, answers, colors, signature, createdOn, createdBy } = editorState);
</script>

<div class="card-array">
	<div class="static-card static-card-1">
		<PhotoPreview image={photos[0]} />
	</div>

	<div class="static-card static-card-2" style="background-color: {colors[0]}">
		<QuestionsPreview {questions} {answers} />
	</div>
	<div class="static-card static-card-3" style="background-color: {'#FFFFFF'}">
		<PhotoPreview image={photos[1]} />
	</div>

	<div class="static-card static-card-4" style="background-color: {colors[1]}">
		<SignaturePreview {signature} {createdOn} {createdBy} />
	</div>
</div>

<style lang="scss">
	.card-array {
		position: relative;
		block-size: 100%;
		inline-size: 100%;
		overflow: hidden;
		display: grid;
		grid-template: repeat(2, 1fr) / repeat(2, 1fr);
		gap: 5%;
	}

	.static-card {
		background-color: white;
		color: white;
		border-radius: 0.8em;
		aspect-ratio: 2.5/3.5;
		inline-size: 70%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		box-shadow: -24px 24px 18px rgba(0, 0, 0, 0.15);
	}

	.static-card-1 {
		justify-self: end;
		align-self: end;
	}
	.static-card-2 {
		justify-self: start;
		align-self: end;
	}
	.static-card-3 {
		justify-self: end;
		align-self: start;
	}
	.static-card-4 {
		justify-self: start;
		align-self: start;
	}
</style>
