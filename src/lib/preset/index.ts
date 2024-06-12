import { definePreset } from 'unocss';

export const presetAnt = definePreset(() => {
	return {
		name: 'preset-antsvelte',
		theme: {
			colors: {
				primary: {
					DEFAULT: 'var(--ant-color-primary)',
					hover: 'var(--ant-color-primary-hover)',
					active: 'var(--ant-color-primary-active)',
					bg: {
						DEFAULT: 'var(--ant-color-primary-bg)',
						hover: 'var(--ant-color-primary-bg-hover)'
					},
					border: {
						DEFAULT: 'var(--ant-color-primary-border)',
						hover: 'var(--ant-color-primary-border-hover)'
					},
					text: {
						DEFAULT: 'var(--ant-color-primary-text)',
						hover: 'var(--ant-color-primary-text-hover)',
						active: 'var(--ant-color-primary-text-active)'
					}
				},
				success: {
					DEFAULT: 'var(--ant-color-success)',
					bg: {
						DEFAULT: 'var(--ant-color-success-bg)',
						hover: 'var(--ant-color-success-bg-hover)'
					},

					border: {
						DEFAULT: 'var(--ant-color-success-border)',
						hover: 'var(--ant-color-success-border-hover)'
					},

					hover: 'var(--ant-color-success-hover)',
					active: 'var(--ant-color-success-active)',
					text: {
						DEFAULT: 'var(--ant-color-success-text)',
						hover: 'var(--ant-color-success-text-hover)',
						active: 'var(--ant-color-success-text-active)'
					}
				},
				warning: {
					DEFAULT: 'var(--ant-color-warning)',
					bg: {
						DEFAULT: 'var(--ant-color-warning-bg)',
						hover: 'var(--ant-color-warning-bg-hover)'
					},
					border: {
						DEFAULT: 'var(--ant-color-warning-border)',
						hover: 'var(--ant-color-warning-border-hover)'
					},
					hover: 'var(--ant-color-warning-hover)',
					active: 'var(--ant-color-warning-active)',
					text: {
						DEFAULT: 'var(--ant-color-warning-text)',
						hover: 'var(--ant-color-warning-text-hover)',
						active: 'var(--ant-color-warning-text-active)'
					}
				},
				error: {
					DEFAULT: 'var(--ant-color-error)',
					bg: {
						DEFAULT: 'var(--ant-color-error-bg)',
						hover: 'var(--ant-color-error-bg-hover)'
					},
					border: {
						DEFAULT: 'var(--ant-color-error-border)',
						hover: 'var(--ant-color-error-border-hover)'
					},
					hover: 'var(--ant-color-error-hover)',
					active: 'var(--ant-color-error-active)',
					text: {
						DEFAULT: 'var(--ant-color-error-text)',
						hover: 'var(--ant-color-error-text-hover)',
						active: 'var(--ant-color-error-text-active)'
					}
				},
				info: {
					DEFAULT: 'var(--ant-color-info)',
					bg: {
						DEFAULT: 'var(--ant-color-info-bg)',
						hover: 'var(--ant-color-info-bg-hover)'
					},
					border: {
						DEFAULT: 'var(--ant-color-info-border)',
						hover: 'var(--ant-color-info-border-hover)'
					},
					hover: 'var(--ant-color-info-hover)',
					active: 'var(--ant-color-info-active)',
					text: {
						DEFAULT: 'var(--ant-color-info-text)',
						hover: 'var(--ant-color-info-text-hover)',
						active: 'var(--ant-color-info-text-active)'
					}
				},
				link: {
					hover: 'var(--ant-color-link-hover)',
					active: 'var(--ant-color-link-active)'
				},
				text: {
					DEFAULT: 'var(--ant-color-text)',
					secondary: 'var(--ant-color-text-secondary)',
					tertiary: 'var(--ant-color-text-tertiary)',
					quaternary: 'var(--ant-color-text-quaternary)'
				},
				bg: {
					container: 'var(--ant-color-bg-container)',
					elevated: 'var(--ant-color-bg-elevated)',
					layout: 'var(--ant-color-bg-layout)',
					spotlight: 'var(--ant-color-bg-spotlight)',
					mask: 'var(--ant-color-bg-mask)'
				},
				border: {
					DEFAULT: 'var(--ant-color-border)',
					secondary: 'var(--ant-color-border-secondary)'
				},
				fill: {
					DEFAULT: 'var(--ant-color-fill)',
					secondary: 'var(--ant-color-fill-secondary)',
					tertiary: 'var(--ant-color-fill-tertiary)',
					quanternary: 'var(--ant-color-fill-quanternary)'
				}
			},
			fontFamily: {
				sans: 'var(--ant-font-family)',
				code: 'var(--ant-font-family-code)'
			},
			fontSize: {
				base: 'var(--ant-font-size)',
				sm: 'var(--ant-font-size-sm)',
				lg: 'var(--ant-font-size-lg)',
				xl: 'var(--ant-font-size-xl)',
				'heading-1': 'var(--ant-font-size-heading-1)',
				'heading-2': 'var(--ant-font-size-heading-2)',
				'heading-3': 'var(--ant-font-size-heading-3)',
				'heading-4': 'var(--ant-font-size-heading-4)',
				'heading-5': 'var(--ant-font-size-heading-5)'
			},
			lineHeight: {
				base: 'var(--ant-line-height)',
				sm: 'var(--ant-line-height-sm)',
				lg: 'var(--ant-line-height-lg)',
				'heading-1': 'var(--ant-line-height-heading-1)',
				'heading-2': 'var(--ant-line-height-heading-2)',
				'heading-3': 'var(--ant-line-height-heading-3)',
				'heading-4': 'var(--ant-line-height-heading-4)',
				'heading-5': 'var(--ant-line-height-heading-5)'
			},
			spacing: {
				xxs: 'var(--ant-padding-xxs)',
				xs: 'var(--ant-padding-xs)',
				sm: 'var(--ant-padding-sm)',
				base: 'var(--ant-padding)',
				md: 'var(--ant-padding-md)',
				lg: 'var(--ant-padding-lg)',
				xl: 'var(--ant-padding-xl)',
				xxl: 'var(--ant-margin-xxl)'
			},
			margin: {
				xxs: 'var(--ant-margin-xxs)',
				xs: 'var(--ant-margin-xs)',
				sm: 'var(--ant-margin-sm)',
				base: 'var(--ant-margin)',
				md: 'var(--ant-margin-md)',
				lg: 'var(--ant-margin-lg)',
				xl: 'var(--ant-margin-xl)',
				xxl: 'var(--ant-margin-xxl)'
			},
			padding: {
				xxs: 'var(--ant-padding-xxs)',
				xs: 'var(--ant-padding-xs)',
				sm: 'var(--ant-padding-sm)',
				base: 'var(--ant-padding)',
				md: 'var(--ant-padding-md)',
				lg: 'var(--ant-padding-lg)',
				xl: 'var(--ant-padding-xl)'
			},
			borderRadius: {
				xs: 'var(--ant-border-radius-xs)',
				sm: 'var(--ant-border-radius-sm)',
				base: 'var(--ant-border-radius)',
				lg: 'var(--ant-border-radius-lg)'
			},
			boxShadow: {
				DEFAULT: 'var(--ant-box-shadow)',
				secondary: 'var(--ant-box-shadow-secondary)'
			}
		}
	};
});
