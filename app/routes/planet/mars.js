import Route from '@ember/routing/route';

export default class PlanetMarsRoute extends Route {
  model() {
    return {
      name: 'Mars',
      facts: [
        "Mars is known as the 'Red Planet' due to its reddish appearance caused by iron oxide (rust) on its surface.",
        'It has the largest volcano and canyon in the Solar System, Olympus Mons and Valles Marineris, respectively.',
        'Mars has a thin atmosphere mostly made up of carbon dioxide, with very cold temperatures.',
      ],
      size: {
        diameter_km: 6779,
        diameter_earth_ratio: 0.532,
      },
      distance_from_sun: {
        average_distance_km: 227936640,
        average_distance_earth_ratio: 1.52,
      },
    };
  }
}
