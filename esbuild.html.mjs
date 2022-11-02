import {
  copyFile,
  writeFile,
  readFile
} from 'fs/promises';
import * as cheerio from 'cheerio';
import beautify from 'js-beautify';
const loadHtml = (cheerio.load || cheerio.default?.load);
export default ({
  inject = false,
  templateFile
}) => ({
  name: 'html',
  setup: async (build) => {
    const options = build.initialOptions;
    build.onStart(() => {
      if (!build.initialOptions.metafile) {
        throw new Error('metafile is not enabled');
      }
      if (!build.initialOptions.outdir) {
        throw new Error('outdir must be set');
      }
    });
    build.onEnd(async (result) => {
      await copyFile(templateFile, 'build/index.html');
      const templateFileData = await readFile('build/index.html');
      const $ = loadHtml(templateFileData);
      const metafile = result.metafile;
      const outdir = build.initialOptions.outdir;
      const entryPoints = Object.entries(metafile?.outputs || {}).filter(([, value]) => {
        if (!value.entryPoint) {
          return false;
        }
        return value.entryPoint;
      }).map((outputData) => {
        return {
          path: outputData[0],
          ...outputData[1]
        };
      }).filter((outputData) => {
        if (outputData.entryPoint === 'src/index.tsx') {
          return outputData;
        }
      });
      entryPoints.forEach((entryPoint) => {
        const replacedEntryPoint = entryPoint.path.replace(build.initialOptions.outdir.replace('./', ''), '.');
        $('body').append(`<script src="${replacedEntryPoint}" type="module" />`);

        if (entryPoint.cssBundle) {
          const replacedCssBundle = entryPoint.cssBundle.replace(build.initialOptions.outdir.replace('./', ''), '.');
          $('head').append(`<link href="${replacedCssBundle}" type="text/css" rel="stylesheet" />`);
        }
      });
      // console.log(metafile.outputs);
      await writeFile('build/index.html', beautify.html($.html().replace(/\n\s*$/gm, '')), 'utf8');
    });
  }
});
