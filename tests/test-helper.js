/* globals QUnit */

import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

setResolver(resolver);

// Training specific settings:

QUnit.config.testTimeout = 4000;
QUnit.config.reorder = false;
