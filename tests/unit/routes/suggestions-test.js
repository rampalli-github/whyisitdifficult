import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | suggestions', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:suggestions');
    assert.ok(route);
  });
});
