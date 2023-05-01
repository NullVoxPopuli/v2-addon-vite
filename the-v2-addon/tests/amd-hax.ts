import Ember from 'ember';

globalThis.requirejs = {};
globalThis.require = () => {};
globalThis.has = () => {};
globalThis.require.has = globalThis.has;
Ember.__loader.require = globalThis.require;
Ember.__loader.has = globalThis.has;


