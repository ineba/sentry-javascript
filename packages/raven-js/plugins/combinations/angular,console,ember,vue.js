/* This file was generated by './scripts/generate-plugin-combinations.js'! */
const Raven = require('../../src/singleton');
const angularPlugin = require('../angular');
const consolePlugin = require('../console');
const emberPlugin = require('../ember');
const vuePlugin = require('../vue');

Raven
  .addPlugin(angularPlugin)
  .addPlugin(consolePlugin)
  .addPlugin(emberPlugin)
  .addPlugin(vuePlugin);