<script lang="ts">
	import { cn } from '$lib/utils/index.js';
	import type { TextType } from './index.js';
	import { TextTypesThis, TextTypes } from './index.js';

	type Props = {
		type?: TextType;
		children?: any;
		class?: any;
	};

	let { type = 'default', children, ...restProps }: Props = $props();
</script>

{#if TextTypesThis[type]}
	<span {...restProps}>
		<svelte:element this={TextTypesThis[type]} class={cn('text-base', TextTypes[type])}>
			{@render children()}
		</svelte:element>
	</span>
{:else}
	<span {...restProps}>
		{@render children()}
	</span>
{/if}
