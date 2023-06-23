<script lang="ts">
	import Select from 'svelte-select';
	import ColorPalette from '../ColorPalette.svelte';
	let questions = [
		'What makes a good life?',
		'What’s the best thing about you?',
		'What’s the last adventure you went on?',
		'What is something you will NEVER do again?',
		'What are you most likely very wrong about?',
		'What do you spend the most time thinking about?',
		'What do you wish your brain was better at doing?',
		'In your group of friends, what role do you play?'
	];
	let floatingConfig = {
		strategy: 'fixed'
	};
	export let selectedQuestions = [questions[0], questions[1], questions[2]];
	export let answers = ['', '', ''];
	export let color = '#ffffff';
</script>

<h1>questions & answers</h1>
<div class="container">
	<div class="questions">
		{#each selectedQuestions as selectedQuestion, index}
			<div class="question-answer-pair">
				<div class="select">
					<Select
						bind:justValue={selectedQuestion}
						--border-radius="0.5em"
						--border="2px solid lightgrey"
						--border-focused="2px solid lightgrey"
						--border-hover="2px solid lightgrey"
						--input-color="grey"
						--item-color="grey"
						--chevron-color="grey"
						--clear-icon-color="grey"
						inputStyles="border-radius: 8px"
						on:change={() => {
							answers[index] = '';
						}}
						showChevron
						items={questions}
						{floatingConfig}
					/>
				</div>
				<input autocomplete="off" maxlength="52" bind:value={answers[index]} />
			</div>
		{/each}
	</div>
	<div class="background-color-menu">
		<ColorPalette bind:color dimensions={{ col: 8, row: 1 }} />
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		block-size: 100%;
		gap: 5%;
		padding: 5%;
	}
	.questions {
		display: flex;
		text-align: start;
		inline-size: 80%;
		flex-direction: column;
		block-size: 100%;
		justify-content: space-between;
	}
	.question-answer-pair {
		gap: 5%;
		display: flex;
		align-items: stretch;
		flex-direction: column;
		font-family: sans-serif;
	}
	input {
		font-size: 1em;
		padding: 0.5em;
		border: solid 2px lightgrey;
		border-radius: 0.5em;
		background: #eeeeee;
	}

	.background-color-menu {
		display: flex;
		flex-direction: column;
		background: #eeeeee;
		outline: 2px solid lightgrey;
		border-radius: 0.5em;
		inline-size: 80%;
		max-inline-size: 80%;
		padding: 0.5em 0em;
	}
	.select {
		cursor: pointer;
	}
</style>
