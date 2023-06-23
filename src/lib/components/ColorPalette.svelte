<script lang="ts">
	export let color = '#ffffff';
	const colors = [
		{ hex: '#ffffff', name: 'white' },
		{ hex: '#000000', name: 'black' },
		{ hex: '#e57474', name: 'red' },
		{ hex: '#8ccf7e', name: 'green' },
		{ hex: '#e5c76b', name: 'yellow' },
		{ hex: '#67b0e8', name: 'blue' },
		{ hex: '#c47fd5', name: 'magenta' },
		{ hex: '#6cbfbf', name: 'cyan' }
	];
	export let dimensions = { col: 2, row: 4 };
</script>

<div
	class="container"
	style="grid-template: repeat({dimensions.row}, 1fr) / repeat({dimensions.col}, 1fr);"
>
	{#each colors as colorOption}
		<button class="color-chip-button" on:click={() => (color = colorOption.hex)}>
			<svg
				class="color-chip"
				viewBox="0 0 12 12"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs xmlns="http://www.w3.org/2000/svg">
					<filter id="dropshadow" height="130%">
						<feGaussianBlur in="SourceAlpha" stdDeviation="3" />
						<feOffset dx="2" dy="2" result="offsetblur" />
						<feMerge>
							<feMergeNode />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>
				<circle
					cx="6"
					cy="6"
					r="5"
					style="fill: {colorOption.hex}; stroke: {colorOption.hex == color
						? 'crimson'
						: colorOption.hex !== '#ffffff' && colorOption.hex !== color
						? 'grey'
						: 'grey'}; stroke-width: 0.5"
				/>
			</svg>
			<span class="sr-only">Click to select the color {colorOption.name}</span>
		</button>
	{/each}
</div>

<style>
	.container {
		display: grid;
		position: relative;
		block-size: 100%;
		inline-size: 100%;
	}
	.color-chip {
		cursor: pointer;
	}
	.color-chip:hover {
		filter: url(#dropshadow);
	}

	.color-chip-button {
		display: flex;
		background: none;
		border: none;
	}
	.sr-only {
		inline-size: 1px;
		block-size: 1px;
		position: absolute;
		overflow: hidden;
	}
</style>
