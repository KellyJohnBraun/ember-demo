import Route from '@ember/routing/route';

export default class PlanetVenusRoute extends Route {
  model (){
    return {
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
      }
    }
  }
}
