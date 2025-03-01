import NewFilmsDto from '../dto/NewFilmsDto';
import FilmDto from '../dto/FilmDto';

export default interface StarWarsFilmsService {

    createFilms(newFilmsDto: NewFilmsDto[]): Promise<{message: string}>;
    getAllFilms(): Promise<FilmDto[]>;
    getFilmById(id: string): Promise<FilmDto>;
}