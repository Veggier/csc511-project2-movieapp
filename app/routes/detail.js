import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
     return this.store.queryRecord('detailed', { i: params.id });
  }
});
