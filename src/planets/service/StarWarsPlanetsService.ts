import NewPlanetsDto from '../dto/NewPlanetsDto';
import PlanetDto from '../dto/PlanetDto';

export default interface StarWarsPlanetsService {

    createPlanets(newPlanetsDto: NewPlanetsDto[]): Promise<{message: string}>;
    getAllPlanets():Promise<PlanetDto[]>;
    getPlanetById(id: string): Promise<PlanetDto>

}