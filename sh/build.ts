import 'zx/globals';

async function main() {
	await $`rm -rf dist`;
	await $`tsc --build tsconfig.build.json`;

	const modes = ['cjs', 'esm'];
	for await (const mode of modes) {
		const flags = [
			'src/index.ts',
			'--bundle',
			`--format=${mode}`,
			'--minify',
			`--outfile=dist/index.${mode}.js`,
		];
		await $`esbuild ${flags}`;
	}

	await $`rm dist/index.js`;
	await $`rm -rf dist/formats dist/helpers dist/options`;
	await $`cp src/numberfmt.d.ts dist/`;
}

main();
