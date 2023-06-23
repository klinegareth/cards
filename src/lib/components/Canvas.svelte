<script lang="ts">
	import { createCanvas, loadImage } from 'canvas';
	import { onMount } from 'svelte';
	let canvas: HTMLCanvasElement;
	onMount(() => {
		let ctx = canvas?.getContext('2d');

		ctx.fillStyle = 'red';
		ctx.font = '30px Impact';
		ctx.fillText('wahoo', 50, 100);
	});
</script>

<canvas bind:this={canvas} />
