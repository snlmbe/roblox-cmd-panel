const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/main.user.js'],
    bundle: true,
    outfile: 'dist/main.user.js',
    format: 'iife',
    target: ['chrome58'],
    loader: { '.css': 'text' },
}).catch(() => process.exit(1));
