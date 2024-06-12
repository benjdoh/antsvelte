export { default as Button } from './button.svelte';

export type Type = 'primary' | 'dashed' | 'link' | 'text' | 'default';
export type Shape = 'round' | 'circle' | 'default';
export type Size = 'default' | 'small' | 'large';
export type Loading = boolean | { delay: number };

export const types: Record<Type, string> = {
	primary: 'bg-primary text-bg-container hover:bg-primary-hover active:bg-primary-active',
	dashed:
		'border border-dashed border-border hover:border-primary hover:text-primary active:text-primary-active active:border-primary-active',
	link: 'text-primary hover:text-primary-hover active:text-primary-active cursor-pointer',
	text: 'hover:bg-fill-secondary active:bg-fill',
	default: 'bg-bg-container border border-border hover:border-primary hover:text-primary'
};

export const shapes: Record<Shape, string> = {
	round: '',
	circle: '',
	default: ''
};

export const sizes: Record<Size, string> = {
	default: 'px-base h-8 rounded-sm',
	small: '',
	large: ''
};
