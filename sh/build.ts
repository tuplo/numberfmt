import { $ } from "@tuplo/shell";

async function main() {
	await $`rm -rf dist`;
	await $`tsc --build tsconfig.build.json`;

	const flags = ["--bundle", "--platform=node", "--minify"];

	await $`esbuild src/cjs/index.cjs --outfile=dist/index.cjs ${flags}`;
	await $`esbuild src/index.ts --format=esm --outfile=dist/index.mjs ${flags}`;

	await $`rm dist/index.js`;
	await $`rm -rf dist/formats dist/helpers dist/options`;
	await $`cp src/numberfmt.d.ts dist/`;
}

main();
