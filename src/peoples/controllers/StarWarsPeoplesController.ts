import {Body, Get, JsonController, Param, Post} from 'routing-controllers';
import StarWarsPeoplesService from '../service/StarWarsPeoplesService';
import StarWarsPeoplesServiceImpl from '../service/StarWarsPeoplesServiceImpl';
import NewPeoplesDto from '../dto/NewPeoplesDto';


@JsonController('/v1')
export default class StarWarsPeoplesController {
    starWarsPeoplesService: StarWarsPeoplesService = new StarWarsPeoplesServiceImpl();

    @Post('/peoples')
    async createPeoples(@Body() newPeoplesDto: NewPeoplesDto[]) {
        return await this.starWarsPeoplesService.createPeoples(newPeoplesDto);
    }

    @Get('/peoples')
    async getAllPeoples() {
        return await this.starWarsPeoplesService.getAllPeoples();
    }

    @Get('/peoples/:id')
    async getPeopleById(@Param('id') id: string,) {
        return await this.starWarsPeoplesService.getPeopleById(id);
    }

}