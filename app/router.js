import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('introduction');
  this.route('introcontinued');
  this.route('introjee');
  this.route('chaptersjee');
  this.route('knowscenarios');
  this.route('memory');
  this.route('memorycontinued');
  this.route('memorycontinued-2');
  this.route('memorycontinued-3');
  this.route('imagination');
  this.route('suggestions');
  this.route('suggest-english');
});
