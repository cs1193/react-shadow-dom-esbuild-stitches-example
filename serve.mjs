
import glob from 'glob';
import { build } from 'esbuild';
import chokidar from 'chokidar';
import liveServer from 'live-server';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

import html from './esbuild.html.mjs';

async function processCss(css) {
  const result = await postcss([autoprefixer]).process(
    css,
    {
      from: undefined
    }
  );

  return result.css;
}

(async () => {
  const allSrcFiles = glob.sync('./src/**/*+(.ts|tsx)');
  const entryPoints = [...allSrcFiles];

  const builder = await build({
    entryPoints,
    entryNames: '[name]-[hash]',
    outdir: './build',
    outbase: './src',
    format: 'esm',
    metafile: true,
    bundle: true,
    splitting: true,
    minify: true,
    incremental: true,
    plugins: [
      html({
        inject: true,
        templateFile: 'public/index.html'
      })
    ]
  });

  chokidar.watch(['src/**/*.{ts,tsx}'], {
    interval: 0
  })
    .on('all', () => {
      builder.rebuild();
    });

  liveServer.start({
    open: true,
    port: 8888,
    root: 'build'
  })
})();
