import NewPeoplesDto from '../dto/NewPeoplesDto';
import PeopleDto from '../dto/PeopleDto';

export default interface StarWarsPeoplesService {
    createPeoples(newPeoplesDto: NewPeoplesDto[]): Promise<{ message: string }>;

    getAllPeoples(): Promise<PeopleDto[]>;

    getPeopleById(id: string): Promise<PeopleDto>;
}