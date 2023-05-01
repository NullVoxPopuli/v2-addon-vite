import Ember from 'ember';

globalThis.requirejs = {};
globalThis.require = () => {};
globalThis.has = () => {};
globalThis.require.has = globalThis.has;
Ember.__loader.require = globalThis.require;
Ember.__loader.has = globalThis.has;


// import { registerHelper, registerAsyncHelper, registerWaiter, unregisterWaiter, unregisterHelper } from 'ember-testing/lib/helpers/test/helpers';

// Ember.Test ||= { registerHelper, registerAsyncHelper, registerWaiter, unregisterHelper, unregisterWaiter}
