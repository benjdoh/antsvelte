export { default as Text } from './text.svelte';
export { default as Title } from './title.svelte';

export type TextType =
	| 'default'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'disabled'
	| 'mark'
	| 'code'
	| 'keyboard'
	| 'underline'
	| 'delete'
	| 'strong'
	| 'italic'
	| 'link';

export const TextTypesThis: Record<TextType, string> = {
	default: '',
	secondary: '',
	success: '',
	warning: '',
	danger: '',
	disabled: '',
	mark: 'mark',
	code: 'code',
	keyboard: 'kbd',
	underline: 'u',
	delete: 'del',
	strong: 'strong',
	italic: 'i',
	link: 'a'
};

export const TextTypes: Record<TextType, string> = {
	default: 'text-text',
	secondary: 'text-text-description',
	success: 'text-success',
	warning: 'text-warning',
	danger: 'text-danger',
	disabled: 'text-text-disabled',
	mark: 'bg-[#ffe58f]',
	code: 'mx-1 px-1.2 text-sm font-code bg-neutral-100/10 border border-neutral-100/20 rounded-md',
	keyboard: '',
	underline: '',
	delete: '',
	strong: '',
	italic: '',
	link: ''
};
