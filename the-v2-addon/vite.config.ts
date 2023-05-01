import { defineConfig } from 'vite'
import { glimmerTemplateTag } from 'rollup-plugin-glimmer-template-tag';
import babel from 'vite-plugin-babel';
import { emberVirtualModules } from './ember';

import packageManifest from '../package.json';

export default defineConfig(async ({ command, mode }) => {
  console.debug(
    `Environment; \n` +
      `\t` + `command: ${command}\n` +
      `\t` + `mode: ${mode}\n`
  );

  if (command === 'serve') {
    return {
      root: 'tests',
      clearScreen: false,
      plugins: [
        babel(),
        glimmerTemplateTag(),
        emberVirtualModules(),
      ],
      resolve: {
        extensions: ['.js', '.ts', '.gjs', '.gts', '.json'],
        alias: {
          [packageManifest.name]: '.',
        }
      }
    };
  }

  if (command === 'build') {

  }

  throw `Unsupported Command: ${command}`;
});
