import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Route | planets', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:planets');
    assert.ok(route);
  });
});
