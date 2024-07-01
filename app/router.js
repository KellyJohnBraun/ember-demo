import EmberRouter from '@ember/routing/router';
import config from 'test-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('planets');

  this.route('planet', function () {
    this.route('earth');
    this.route('mars');
    this.route('venus');
  });
});
