<script lang="ts">
	import PhotoPreview from '$lib/components/preview/PhotoPreview.svelte';
	import QuestionsPreview from '$lib/components/preview/QuestionsPreview.svelte';
	import SignaturePreview from '$lib/components/preview/SignaturePreview.svelte';
	import type EditorState from './$types/Profile';
	import { isDark } from '$lib/utils/colors';
	export let editorState: EditorState;
	$: ({ questions, photos, answers, colors, signature, createdOn, createdBy } = editorState);
</script>

<div class="deck">
	<div class="card card-1">
		<PhotoPreview image={photos[0]} />
	</div>

	<div class="card card-2" style="background-color: {colors[0]}">
		<QuestionsPreview {questions} {answers} />
	</div>
	<div class="card card-3" style="background-color: {'#FFFFFF'}">
		<PhotoPreview image={photos[1]} />
	</div>

	<div class="card card-4" style="background-color: {colors[1]}">
		<SignaturePreview {signature} {createdOn} {createdBy} />
	</div>
</div>

<style lang="scss">
	.deck {
		display: flex;
		justify-content: center;
		align-items: center;
		inline-size: 100%;
		block-size: 100%;
		position: relative;
		isolation: isolate;
	}
	.card {
		background-color: white;
		color: white;
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 12px;
		user-select: none;
		box-shadow: -24px 24px 18px rgba(0, 0, 0, 0.15);
		inline-size: 28%;
		aspect-ratio: 2.5/3.5;
		overflow: hidden;
		transform-origin: center;
		transition: transform 1s cubic-bezier(0.2, 0.89, 0, 1),
			inline-size 1s cubic-bezier(0.2, 0.89, 0, 1);
	}
	$y-offset: 60%;

	$card-1-x: 40%;
	$card-1-x-hover: $card-1-x + 60%;
	$card-1-x-focus: $card-1-x-hover + 10%;
	$card-1-y: $y-offset + -53%;
	$card-1-y-hover: $card-1-y + 5%;
	$card-1-y-focus: $card-1-y-hover;
	$card-1-rotation: 6deg;
	$card-1-rotation-hover: $card-1-rotation + 4deg;
	$card-1-rotation-focus: $card-1-rotation-hover + 2deg;

	$card-2-x: 15%;
	$card-2-x-hover: $card-2-x + 20%;
	$card-2-x-focus: $card-2-x-hover;
	$card-2-y: $y-offset + -56%;
	$card-2-y-hover: $card-2-y;
	$card-2-y-focus: $card-2-y-hover - 10%;
	$card-2-rotation: 2deg;
	$card-2-rotation-hover: $card-2-rotation + 2deg;
	$card-2-rotation-focus: $card-2-rotation-hover + 2deg;

	$card-3-x: -10%;
	$card-3-x-hover: $card-3-x - 20%;
	$card-3-x-focus: $card-3-x-hover;
	$card-3-y: $y-offset + -56%;
	$card-3-y-hover: $card-3-y;
	$card-3-y-focus: $card-3-y-hover - 10%;
	$card-3-rotation: -2deg;
	$card-3-rotation-hover: $card-3-rotation - 2deg;
	$card-3-rotation-focus: $card-3-rotation-hover - 2deg;

	$card-4-x: -35%;
	$card-4-x-hover: $card-4-x - 60%;
	$card-4-x-focus: $card-4-x-hover - 10%;
	$card-4-y: $y-offset + -55%;
	$card-4-y-hover: $card-4-y + 5%;
	$card-4-y-focus: $card-4-y-hover;
	$card-4-rotation: -6deg;
	$card-4-rotation-hover: $card-4-rotation - 4deg;
	$card-4-rotation-focus: $card-4-rotation-hover - 2deg;

	.card-1:is(:hover, :focus) {
		transform: translate($card-1-x-focus, $card-1-y-focus) rotate($card-1-rotation-focus) !important;
	}

	.card-2:is(:hover, :focus) {
		transform: translate($card-2-x-focus, $card-2-y-focus) rotate($card-2-rotation-focus) !important;
	}
	.card-3:is(:hover, :focus) {
		transform: translate($card-3-x-focus, $card-3-y-focus) rotate($card-3-rotation-focus) !important;
	}

	.card-4:is(:hover, :focus) {
		transform: translate($card-4-x-focus, $card-4-y-focus) rotate($card-4-rotation-focus) !important;
	}
	.card-1 {
		transform: translate($card-1-x-hover, $card-1-y-hover) rotate($card-1-rotation-hover);
		z-index: 3;
	}
	.card-2 {
		transform: translate($card-2-x-hover, $card-2-y-hover) rotate($card-2-rotation-hover);
		z-index: 2;
	}

	.card-3 {
		transform: translate($card-3-x-hover, $card-3-y-hover) rotate($card-3-rotation-hover);
		z-index: 1;
	}

	.card-4 {
		transform: translate($card-4-x-hover, $card-4-y-hover) rotate($card-4-rotation-hover);
		z-index: 0;
	}
</style>
