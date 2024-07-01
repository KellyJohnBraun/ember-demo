import Route from '@ember/routing/route';

export default class PlanetsRoute extends Route {
  model() {
    return [
      {
        name: 'Venus',
        facts: [
          "Venus is often called Earth's 'sister planet' because they are similar in size and composition.",
          'It is the hottest planet in the Solar System, with surface temperatures reaching about 462 °C (864 °F).',
          'Venus has a thick atmosphere primarily composed of carbon dioxide with clouds of sulfuric acid.',
        ],
        size: {
          diameter_km: 12104,
          diameter_earth_ratio: 0.949,
        },
        distance_from_sun: {
          average_distance_km: 108208930,
          average_distance_earth_ratio: 0.73,
        },
      },
      {
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
      },
      {
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
      },
    ];
  }
}
