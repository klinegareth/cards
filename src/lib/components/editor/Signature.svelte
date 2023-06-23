<script lang="ts">
	import SignaturePad from 'signature_pad';
	import ColorPalette from '../ColorPalette.svelte';
	import { onMount } from 'svelte';
	let canvas: HTMLCanvasElement;
	export let signature: string;
	export let name: string;
	export let color = '#ffffff';
	let penColor = '#000000';
	onMount(() => {
		const signaturePad = new SignaturePad(canvas, { maxWidth: 1, penColor: penColor });
		function resizeCanvas() {
			const ratio = Math.max(window.devicePixelRatio || 1, 1);
			canvas.width = canvas.offsetWidth * ratio;
			canvas.height = canvas.offsetHeight * ratio;
			canvas.getContext('2d').scale(ratio, ratio);
			signaturePad.clear(); // otherwise isEmpty() might return incorrect value
			signature = signaturePad.toDataURL();
		}
		const updatePenColor = setInterval(() => {
			signaturePad.penColor = penColor;
		}, 200);
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		signaturePad.addEventListener('endStroke', () => {
			signature = signaturePad.toDataURL();
		});
	});
</script>

<h1>name & sign</h1>
<div class="container">
	<input type="text" placeholder="your name here!" bind:value={name} />

	<div class="signature-area">
		<div class="pen-color-picker">
			<ColorPalette bind:color={penColor} />
		</div>
		<canvas bind:this={canvas} />
	</div>
	<div class="card-bg-color-picker">
		<ColorPalette bind:color dimensions={{ col: 8, row: 1 }} />
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		block-size: 80%;
		align-items: stretch;
		justify-content: space-evenly;
		block-size: 100%;
		inline-size: 80%;
		align-self: center;
	}
	.signature-area {
		display: flex;
		outline: 2px solid lightgrey;
		border-radius: 8px;
		background: #eeeeee;
		padding: 1rem 1rem;
		align-items: center;
        max-block-size: 100%;
	}

	.pen-color-picker {
		margin-left: -1em;
		display: flex;
		text-align: center;
		min-inline-size: 20%;
		inline-size: 20%;
		max-inline-size: 20%;
		block-size: 100%;
		max-block-size: 100%;
	}

	canvas {
		inline-size: 100%;
		max-block-size: 100%;
		block-size: 100%;
		background: white;
		border: 2px solid lightgrey;
		border-radius: 8px;
	}

	.card-bg-color-picker {
		display: flex;
		flex-direction: column;
		background: #eeeeee;
		outline: 2px solid lightgrey;
		border-radius: 0.5em;
		padding: 0.5em 0em;
	}
	input {
		font-size: 1em;
		padding: 0.5em;
		border: solid 2px lightgrey;
		border-radius: 0.5em;
		background: #eeeeee;
	}
</style>
