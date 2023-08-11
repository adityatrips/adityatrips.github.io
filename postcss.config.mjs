import { defineConfig } from "astro/config";

export default defineConfig = {
	plugins: [
		require("postcss-preset-env")({
			stage: 0,
		}),
	],
	site: "https://adityatrips.github.io",
	base: "/astro-blog",
};
