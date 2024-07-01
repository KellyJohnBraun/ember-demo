import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Route | planet/earth', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:planet/earth');
    assert.ok(route);
  });
});
