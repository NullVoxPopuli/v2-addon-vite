import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

import Sample from 'the-v2-addon/sample';

module('Rendering | Example', function (hooks) {
  setupRenderingTest(hooks);

  test('render a component', async function (assert) {
    await render(
      <template>
        <Sample @foo="arg" />
      </template>
    );

    assert.dom().containsText('A Demo Component: @foo:arg');
  });
});
