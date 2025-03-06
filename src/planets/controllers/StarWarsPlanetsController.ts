import {BadRequestError, Body, Get, JsonController, Param, Post} from 'routing-controllers';
import StarWarsPlanetsService from '../service/StarWarsPlanetsService';
import StarWarsPlanetsServiceImpl from '../service/StarWarsPlanetsServiceImpl';
import NewPlanetsDto from '../dto/NewPlanetsDto';


@JsonController('/v1')
export default class StarWarsPlanetsController {
    starWarsPlanetsService: StarWarsPlanetsService = new StarWarsPlanetsServiceImpl();
    @Post('/planets')
    async createPlanets(@Body() newPlanetsDto: NewPlanetsDto[]) {
        return await this.starWarsPlanetsService.createPlanets(newPlanetsDto);
    }
    @Get('/planets')
    async getAllPlanets() {
        return await this.starWarsPlanetsService.getAllPlanets();
    }
    @Get('/planets/:id')
    async getPlanetById(@Param('id') id: string,) {
        const parseId = Number(id);
        if(isNaN(parseId)){
            throw new BadRequestError("Id must be a number")
        }
        return await this.starWarsPlanetsService.getPlanetById(id);
    }

}