import StarWarsFilmsService from './StarWarsFilmsService';
import NewFilmsDto from '../dto/NewFilmsDto';
import {Film} from '../model/Film';
import {BadRequestError, NotFoundError} from 'routing-controllers';
import FilmDto from '../dto/FilmDto';

export default class StarWarsFilmsServiceImpl implements StarWarsFilmsService {
    async createFilms(newFilmsDto: NewFilmsDto[]): Promise<{ message: string }> {
        if (!newFilmsDto || newFilmsDto.length === 0) {
            throw new BadRequestError('Request must contain at least one film.');
        }
            await Film.insertMany(newFilmsDto);
            return {message: 'Film added'};
    }

    async getAllFilms(): Promise<FilmDto[]> {
        const films = await Film.find();
        if (films.length === 0) {
            throw new NotFoundError(`Films not found`);
        }

        return films.map(film => ({
            id: film.id,
            starships: film.starships,
            edited: film.edited,
            vehicles: film.vehicles,
            planets: film.planets,
            producer: film.producer,
            title: film.title,
            created: film.created,
            episode_id: film.episode_id,
            director: film.director,
            release_date: film.release_date,
            opening_crawl: film.opening_crawl,
            characters: film.characters,
            species: film.species,
        }));
    }

    async getFilmById(id: string): Promise<FilmDto> {
        const film = await Film.findOne({id});
        if (!film) {
            throw new NotFoundError(`Film with id ${id} not found`);
        }

        return {
            id: film.id,
            starships: film.starships,
            edited: film.edited,
            vehicles: film.vehicles,
            planets: film.planets,
            producer: film.producer,
            title: film.title,
            created: film.created,
            episode_id: film.episode_id,
            director: film.director,
            release_date: film.release_date,
            opening_crawl: film.opening_crawl,
            characters: film.characters,
            species: film.species,
        };
    }
}