import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Route | planet/venus', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:planet/venus');
    assert.ok(route);
  });
});
