<script lang="ts">
	export let questions: Array<string>;
	export let answers: Array<string>;
</script>

<div class="container">
	{#each questions as question, i}
		{#if question != null}
			<div class="question-answer">
				<p class="question">Q: {question}</p>
				<p class="answer">a: {answers[i]}</p>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.container {
		border-radius: 0.5em;
		inline-size: 90%;
		max-inline-size: 100%;
		align-items: center;
		block-size: 90%;
		justify-self: center;
		justify-content: space-evenly;
		display: flex;
		flex-direction: column;
	}
	.question-answer {
		word-wrap: break-word;
		white-space: wrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: flex;
		flex-direction: column;
		border-radius: 0.5em;
		inline-size: 80%;
		max-inline-size: 80%;
		max-block-size: 25%;
		padding: 0.5em;
		overflow: hiden;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.question {
		font-size: clamp(0.5em, 80%, 80%);
		margin: 0;
		color: #eeeeee;
	}
	.answer {
		margin: 0;
		margin-top: 5%;
		font-size: clamp(0.5em, 100%, 100%);
	}
</style>
