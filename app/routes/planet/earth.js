import Route from '@ember/routing/route';

export default class PlanetEarthRoute extends Route {
  model() {
    return {
      name: 'Earth',
      facts: [
        'Earth is the third planet from the Sun and the only planet known to support life.',
        'It has a diverse range of environments, from oceans to mountains, and a breathable atmosphere dominated by nitrogen and oxygen.',
      ],
      size: {
        diameter_km: 12742,
        diameter_earth_ratio: 1,
      },
      distance_from_sun: {
        average_distance_km: 149597870,
        average_distance_earth_ratio: 1,
      },
    };
  }
}
