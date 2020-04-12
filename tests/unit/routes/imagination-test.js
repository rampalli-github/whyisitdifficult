import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | imagination', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:imagination');
    assert.ok(route);
  });
});
