import StarWarsPeoplesService from './StarWarsPeoplesService';
import NewPeoplesDto from '../dto/NewPeoplesDto';
import {BadRequestError, NotFoundError} from 'routing-controllers';
import {People} from '../model/People';
import PeopleDto from '../dto/PeopleDto';


export default class StarWarsPeoplesServiceImpl implements StarWarsPeoplesService {
    async createPeoples(newPeoplesDto: NewPeoplesDto[]): Promise<{ message: string }> {
        if (!newPeoplesDto || newPeoplesDto.length === 0) {
            throw new BadRequestError('Request must contain at least one people.');
        }
            await People.insertMany(newPeoplesDto);
            return {message: 'Peoples added'};
    }

    async getAllPeoples(): Promise<PeopleDto[]> {
        const peoples = await People.find();
        if (peoples.length === 0) {
            throw new NotFoundError(`Peoples not found`);
        }

        return peoples.map(people => ({
            id: people.id,
            edited: people.edited,
            name: people.name,
            created: people.created,
            gender: people.gender,
            skin_color: people.skin_color,
            hair_color: people.hair_color,
            height: people.height,
            eye_color: people.eye_color,
            mass: people.mass,
            homeworld: people.homeworld,
            birth_year: people.birth_year,
            image: people.image,
        }));
    }

    async getPeopleById(id: string): Promise<PeopleDto> {
        const people = await People.findOne({id});
        if (!people) {
            throw new NotFoundError(`People with id ${id} not found`);
        }
        return {
            id: people.id,
            edited: people.edited,
            name: people.name,
            created: people.created,
            gender: people.gender,
            skin_color: people.skin_color,
            hair_color: people.hair_color,
            height: people.height,
            eye_color: people.eye_color,
            mass: people.mass,
            homeworld: people.homeworld,
            birth_year: people.birth_year,
            image: people.image,
        };
    }
}