<script lang="ts">
	import { cn } from '$lib/utils/index.js';
	import type { Loading, Shape, Size, Type } from './index.js';
	import { shapes, types, sizes } from './index.js';
	import { nanoid } from 'nanoid';

	type Props = {
		type?: Type;
		shape?: Shape;
		size?: Size;
		disabled?: boolean;
		loading?: Loading;
		danger?: boolean;
		children?: any;
		class?: any;
	};

	let {
		type = 'default',
		shape = 'default',
		size = 'default',
		disabled = false,
		loading = false,
		danger = false,
		children,
		class: klass,
		...restProps
	}: Props = $props();

	let wave_ids: string[] = $state([]);
	const can_wave = ['primary', 'default', 'dashed'].includes(type);
</script>

<svelte:element
	this={type === 'link' ? 'a' : 'button'}
	role={type === 'link' ? 'link' : 'button'}
	class={cn(
		'transition duration-200 text-base relative select-none flex items-center',
		types[type],
		shapes[shape],
		sizes[size],
		danger ? '' : '',
		loading ? '' : '',
		disabled ? '' : '',
		klass
	)}
	{...restProps}
	onclick={() => {
		wave_ids = [...wave_ids, nanoid()];

		setTimeout(() => {
			wave_ids = wave_ids.slice(1);
		}, 750);
	}}
>
	{#if !loading || !disabled}
		{#if can_wave}
			{#each wave_ids as id (id)}
				<div
					class={cn('wave', shapes[shape], sizes[size], danger ? 'text-danger' : 'text-primary')}
				></div>
			{/each}
		{/if}
	{/if}

	{@render children()}
</svelte:element>

<style>
	.wave {
		animation: wave 600ms;
		--at-apply: absolute top-0 left-0 w-full h-full pointer-events-none;
	}

	@keyframes wave {
		0% {
			opacity: 0;
			box-shadow: 0 0 0 0px currentColor;
		}
		30% {
			opacity: 0.25;
		}
		100% {
			opacity: 0;
			box-shadow: 0 0 0 7px currentColor;
		}
	}
</style>
