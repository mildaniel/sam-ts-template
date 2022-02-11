let skipBundleNodeModules = {
  name: 'make-all-packages-external',
  setup(build) {
    let filter = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/ // Must not start with "/" or "./" or "../"
    build.onResolve({ filter }, args => ({ path: args.path, external: true }))
  },
}

require('esbuild').build({
  entryPoints: ['app.ts'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'es2020',
  outdir: 'out',
  plugins: [skipBundleNodeModules],
}).catch(() => process.exit(1))
