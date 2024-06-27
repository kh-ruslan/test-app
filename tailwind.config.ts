import type { Config } from 'tailwindcss';
import shibaHubUiPreset from '@shibaone/shibhubui/tailwind.preset.js';

const config: Config = {
  presets: [shibaHubUiPreset],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@shibaone/shibhubui/dist/shibhubui.js',
  ],
};
export default config;
