import { helper } from '@ember/component/helper';

export default helper(function routeFormatter(positional /*, named*/) {
  let route = positional[0];
  return 'planet.'.concat(route.toLowerCase());
});
