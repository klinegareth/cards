<script lang="ts">
	export let createdOn: string | Date;
	export let createdBy: string;
	export let signature: string;
</script>

<div class="container">
	<p class="text">
		This deck was made with {'<'}3 by <span>{createdBy ? createdBy : '[your name here!]'}</span>
	</p>
	<p class="created-on">{createdOn}</p>
	<img src={signature} alt="Signature preview" />
</div>

<style>
	.container {
		display: flex;
		justify-content: space-evenly;
		align-items: stretch;
		flex-direction: column;
		inline-size: 80%;
	}
	span {
		color: rgba(255, 240, 235);
		text-shadow: 0px 0px 8px lavender;
	}
	.created-on {
		text-align: center;
		text-shadow: 0px 0px 8px lavender;
		font-size: 1.2em;
		background: rgba(0, 0, 0, 0.2);
		padding: 0.5em;
		border-radius: 0.5em;
	}
	.text {
		margin: 0;
		border-radius: 0.5em;
		background: rgba(0, 0, 0, 0.2);
		padding: 10%;
		font-size: 1.5em;
	}

	img {
		border-radius: 0.5em;
		object-fit: contain;
		inline-size: 100%;
		border: 1px solid rgba(0, 0, 0, 0.3);
		background-color: white;
	}
</style>
