<script lang="ts">
	import { onMount, type Snippet, type SvelteComponent } from 'svelte';
	import { codeToHtml } from 'shiki';
	import { Text } from '$lib/index.js';

	type Props = {
		name: string;
		description: string;
		code?: string;
		demo?: Snippet;
	};

	let { name, description, code, demo }: Props = $props();
	let example = $state('');
	let showExample = $state(false);

	onMount(async () => {
		if (!code) return;

		example = await codeToHtml(code, {
			lang: 'svelte',
			themes: {
				dark: 'github-dark',
				light: 'github-light'
			}
		});
	});
</script>

<div class="border border-border p-sm">
	<div>
		{#if demo}
			{@render demo()}
		{/if}
	</div>

	<div>
		<span class="text-base font-medium">
			{name}
		</span>
	</div>

	<div>
		{#if !showExample}
			{@html example}
		{/if}
	</div>
</div>
