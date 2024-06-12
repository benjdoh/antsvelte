import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss';
import { presetAnt } from './src/lib/index.js';

export default defineConfig({
	presets: [presetAnt()],
	transformers: [transformerDirectives(), transformerVariantGroup()]
});
