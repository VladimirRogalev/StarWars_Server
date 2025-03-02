import {BadRequestError, Body, Get, JsonController, Param, Post} from 'routing-controllers';
import StarWarsFilmsService from '../service/StarWarsFilmsService';
import StarWarsFilmsServiceImpl from '../service/StarWarsFilmsServiceImpl';
import NewFilmsDto from '../dto/NewFilmsDto';


@JsonController('/v1')
export default class StarWarsFilmsController {
    starWarsFilmsService: StarWarsFilmsService = new StarWarsFilmsServiceImpl();
    @Post('/films')
    async createFilms(@Body() newFilmsDto: NewFilmsDto[]) {
        return await this.starWarsFilmsService.createFilms(newFilmsDto);
    }
    @Get('/films')
    async getAllFilms() {
        return await this.starWarsFilmsService.getAllFilms();
    }
    @Get('/films/:id')
    async getFilmById(@Param('id') id: string,) {
        const parseId = Number(id);
        if(isNaN(parseId)){
            throw new BadRequestError("Id must be a number")
        }
        return await this.starWarsFilmsService.getFilmById(id);
    }

}