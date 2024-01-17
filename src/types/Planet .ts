type Planet = {
    name: string; // The name of this planet.
    diameter: string; // The diameter of this planet in kilometers.
    rotation_period: string; // The number of standard hours it takes for this planet to complete a single rotation on its axis.
    orbital_period: string; // The number of standard days it takes for this planet to complete a single orbit of its local star.
    gravity: string; // A number denoting the gravity of this planet.
    population: string; // The average population of sentient beings inhabiting this planet.
    climate: string; // The climate of this planet.
    terrain: string; // The terrain of this planet.
    surface_water: string; // The percentage of the planet surface that is naturally occurring water or bodies of water.
    residents: string[]; // An array of People URL Resources that live on this planet.
    films: string[]; // An array of Film URL Resources that this planet has appeared in.
    url: string; // The hypermedia URL of this resource.
    created: string; // The ISO 8601 date format of the time that this resource was created.
    edited: string; // The ISO 8601 date format of the time that this resource was edited.
  };