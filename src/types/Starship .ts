type Starship = {
    name: string; // The name of this starship.
    model: string; // The model or official name of this starship.
    starship_class: string; // The class of this starship.
    manufacturer: string; // The manufacturer of this starship.
    cost_in_credits: string; // The cost of this starship new, in galactic credits.
    length: string; // The length of this starship in meters.
    crew: string; // The number of personnel needed to run or pilot this starship.
    passengers: string; // The number of non-essential people this starship can transport.
    max_atmosphering_speed: string; // The maximum speed of this starship in the atmosphere.
    hyperdrive_rating: string; // The class of this starship's hyperdrive.
    MGLT: string; // The Maximum number of Megalights this starship can travel in a standard hour.
    cargo_capacity: string; // The maximum number of kilograms that this starship can transport.
    consumables: string; // The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
    films: string[]; // An array of Film URL Resources that this starship has appeared in.
    pilots: string[]; // An array of People URL Resources that this starship has been piloted by.
    url: string; // The hypermedia URL of this resource.
    created: string; // The ISO 8601 date format of the time that this resource was created.
    edited: string; // The ISO 8601 date format of the time that this resource was edited.
  };

  export default Starship