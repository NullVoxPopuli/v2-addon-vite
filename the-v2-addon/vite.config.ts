import { defineConfig } from 'vite'

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
      plugins: [],
      resolve: {
        extensions: ['.js', '.ts', '.gjs', '.gts', '.json']
      }
    };
  }

  if (command === 'build') {

  }

  throw `Unsupported Command: ${command}`;
});
