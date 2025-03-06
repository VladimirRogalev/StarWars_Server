

export default class PlanetDto {
    climate:	string;
    created:	string;
    diameter:	string;
    edited:	string;
    gravity:	string;
    id:	number;
    name:	string;
    orbital_period:	string;
    population:	string;
    rotation_period:	string;
    surface_water:	string;
    terrain:	string


    constructor(climate: string, created: string, diameter: string, edited: string, gravity: string, id: number, name: string, orbital_period: string, population: string, rotation_period: string, surface_water: string, terrain: string) {
        this.climate = climate;
        this.created = created;
        this.diameter = diameter;
        this.edited = edited;
        this.gravity = gravity;
        this.id = id;
        this.name = name;
        this.orbital_period = orbital_period;
        this.population = population;
        this.rotation_period = rotation_period;
        this.surface_water = surface_water;
        this.terrain = terrain;
    }
}
