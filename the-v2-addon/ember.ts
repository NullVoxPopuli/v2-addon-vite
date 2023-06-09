import { type Plugin, type PluginOption } from 'vite';

import { join, dirname } from 'node:path';
import { createRequire } from 'node:module';
import * as url from 'node:url';
// import { testReporter } from './middleware/test-reporter.mjs';
// import { selfHtml } from './middleware/self-html.mjs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const require = createRequire(import.meta.url);

const emberSource = dirname(dirname(require.resolve('ember-source')));

const nm = (modulePath: string) => join(__dirname, 'node_modules', modulePath);
const ember = (modulePath: string) => join(emberSource, 'dist', 'packages', modulePath);
const eDep = (modulePath: string) => join(emberSource, 'dist', 'dependencies', modulePath);

interface Options {
  /**
    * Enable typescript checking
  * defaults to true.
    */
  ts?: boolean;
}

const qunitCss = nm('qunit/qunit/qunit.css');

export function emberVirtualModules(options: Options = {}): Plugin {
  return {
    name: 'ember-addon-test-support',
    // configureServer(server) {
    //   server.middlewares.use(bodyParser.json());
    //   server.middlewares.use(testReporter);
    //   server.middlewares.use(selfHtml);
    // },
    config: () => ({
      optimizeDeps: {
        include: [
          emberSource,
          // path.join(__dirname, '**/*'),
          // process.cwd(),
        ]
      },
      // years of node trauma incorrectness to unwind...
      define: {
        'process.env': {},
        'os.tmpdir': '() => {}',
      },
      resolve: {
        /**
          * NOTE: all of these things need to be converted to v2 addons.
          */
        alias: {
          // TODO: v2ify
          '@embroider/util': nm('@embroider/util/addon'),
          // Glimmer
          // dev-stub:
          '@glimmer/env': join(__dirname, 'glimmer-env.js'),
          // '@glimmer/tracking/primitives/cache': ember('@glimmer/tracking/primitives/cache.js'),
          '@glimmer/tracking': ember('@glimmer/tracking'),

          '@glimmer/destroyable': eDep('@glimmer/destroyable.js'),
          '@glimmer/encoder': eDep('@glimmer/encoder.js'),
          '@glimmer/global-context': eDep('@glimmer/global-context.js'),
          '@glimmer/low-level': eDep('@glimmer/low-level.js'),
          '@glimmer/manager': eDep('@glimmer/manager.js'),
          '@glimmer/node': eDep('@glimmer/node.js'),
          '@glimmer/opcode-compiler': eDep('@glimmer/opcode-compiler.js'),
          '@glimmer/owner': eDep('@glimmer/owner.js'),
          '@glimmer/program': eDep('@glimmer/program.js'),
          '@glimmer/reference': eDep('@glimmer/reference.js'),
          '@glimmer/runtime': eDep('@glimmer/runtime.js'),
          '@glimmer/util': eDep('@glimmer/util.js'),
          '@glimmer/validator': eDep('@glimmer/validator.js'),
          '@glimmer/vm': eDep('@glimmer/vm.js'),
          '@glimmer/wire-format': eDep('@glimmer/wire-format.js'),

          // Ember
          'dag-map': nm('dag-map'),
          '@ember/-internals': ember('@ember/-internals'),
          '@ember/application': ember('@ember/application'),
          '@ember/array': ember('@ember/array'),
          '@ember/canary-features': ember('@ember/canary-features'),
          '@ember/component': ember('@ember/component'),
          '@ember/controller': ember('@ember/controller'),
          '@ember/debug': ember('@ember/debug'),
          '@ember/destroyable': ember('@ember/destroyable'),
          // '@ember/engine/-private/container-proxy-mixin': ember('@ember/engine/-private/container-proxy-mixin'),
          // '@ember/engine/-private/registry-proxy-mixin': ember('@ember/engine/-private/registry-proxy-mixin'),
          '@ember/engine': ember('@ember/engine'),
          '@ember/enumerable': ember('@ember/enumerable'),
          '@ember/error': ember('@ember/error'),
          '@ember/helper': ember('@ember/helper'),
          '@ember/instrumentation': ember('@ember/instrumentation'),
          '@ember/modifier': ember('@ember/modifier'),
          '@ember/object': ember('@ember/object'),
          '@ember/owner': ember('@ember/owner'),
          '@ember/polyfills': ember('@ember/polyfills'),
          '@ember/routing': ember('@ember/routing'),
          '@ember/runloop': ember('@ember/runloop'),
          '@ember/service': ember('@ember/service'),
          '@ember/string': ember('@ember/string'),
          '@ember/template': ember('@ember/template'),
          '@ember/template-factory': ember('@ember/template-factory'),
          '@ember/template-compilation': ember('@ember/template-compilation'),
          '@ember/renderer': ember('@ember/renderer'),
          '@ember/test': ember('@ember/test'),
          '@ember/utils': ember('@ember/utils'),
          '@ember/version': ember('@ember/version'),
          'ember/version': ember('ember/version.js'),
          'ember': ember('ember/index.js'),
          'ember-testing': ember('ember-testing'),

          // 3rd Parties
          'backburner': eDep('backburner.js'),
          'route-recognizer': eDep('route-recognizer.js'),
          'router_js': eDep('router_js.js'),
          'rsvp': eDep('rsvp.js'),
          '@simple-dom/document': eDep('@simple-dom/document'),

          'qunit/styles.css': nm('qunit/qunit/qunit.css'),
          'qunit': nm('qunit/qunit/qunit.js'),
          'qunit-dom': nm('qunit-dom/dist/addon-test-support'),
        }
      },
    }),
  }
}
