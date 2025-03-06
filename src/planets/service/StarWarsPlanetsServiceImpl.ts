import StarWarsPlanetsService from './StarWarsPlanetsService';
import NewPlanetsDto from '../dto/NewPlanetsDto';
import {Planet} from '../model/Planet';
import {BadRequestError, NotFoundError} from 'routing-controllers';
import PlanetDto from '../dto/PlanetDto';

export default class StarWarsPlanetsServiceImpl implements StarWarsPlanetsService {

    async createPlanets(newPlanetsDto: NewPlanetsDto[]): Promise<{ message: string }> {
        if (!newPlanetsDto || newPlanetsDto.length === 0) {
            throw new BadRequestError('Request must contain at least one planet.');
        }
        await Planet.insertMany(newPlanetsDto);
        return {message: 'Planets added'};
    }

    async getAllPlanets(): Promise<PlanetDto[]> {
        const planets = await Planet.find();
        if (planets.length === 0) {
            throw new NotFoundError(`Planets not found`);
        }

        return planets.map(planet => ({
            id: planet.id,
            edited: planet.edited,
            climate: planet.climate,
            surface_water: planet.surface_water,
            name: planet.name,
            diameter: planet.diameter,
            rotation_period: planet.rotation_period,
            created: planet.created,
            terrain: planet.terrain,
            gravity: planet.gravity,
            orbital_period: planet.orbital_period,
            population: planet.population
        }));
    }

    async getPlanetById(id: string): Promise<PlanetDto> {
        const planet = await Planet.findOne({id});
        if (!planet) {
            throw new NotFoundError(`Planet with id ${id} not found`);
        }

        return {
            id: planet.id,
            edited: planet.edited,
            climate: planet.climate,
            surface_water: planet.surface_water,
            name: planet.name,
            diameter: planet.diameter,
            rotation_period: planet.rotation_period,
            created: planet.created,
            terrain: planet.terrain,
            gravity: planet.gravity,
            orbital_period: planet.orbital_period,
            population: planet.population
        };
    }
}