import "./amd-hax";
import "./unit/example-test";
// import "./rendering/example-test";

import * as QUnit from "qunit";
import { setApplication } from '@ember/test-helpers';
import { setup } from "qunit-dom";
import { start } from 'ember-qunit';
// import Resolver from 'ember-resolver';
import Resolver from 'ember-resolver/addon/resolvers/classic/index.js';
import Application from '@ember/application';

class App extends Application {
  modulePrefix = 'addon-tests';
  autoboot = false;
  podModulePrefix = 'addon-tests/pods';
  Resolver = Resolver;
}

setApplication(App.create({}));

setup(QUnit.assert);

start();
