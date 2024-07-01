import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | display-facts', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DisplayFacts />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DisplayFacts>
        template block text
      </DisplayFacts>
    `);

    assert.dom().hasText('template block text');
  });
});
