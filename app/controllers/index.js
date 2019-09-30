import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['s'],
  prop1: 'test',
  actions: {
    submit(Search) {
      this.transitionToRoute('index', { queryParams: { s: Search } });
    },
    update() {
      this.set('prop1', 'updated');
    }
  }
});
