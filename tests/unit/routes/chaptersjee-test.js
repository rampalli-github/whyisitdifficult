import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | chaptersjee', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:chaptersjee');
    assert.ok(route);
  });
});
