

export default class FilmDto {
    characters: number [];
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    id: number;
    opening_crawl: string;
    planets: number [];
    producer: string;
    release_date: string;
    species: number [];
    starships: number [];
    title: string;
    vehicles: number []


    constructor(characters: number[], created: string, director: string, edited: string, episode_id: number, id: number, opening_crawl: string, planets: number[], producer: string, release_date: string, species: number[], starships: number[], title: string, vehicles: number[]) {
        this.characters = characters;
        this.created = created;
        this.director = director;
        this.edited = edited;
        this.episode_id = episode_id;
        this.id = id;
        this.opening_crawl = opening_crawl;
        this.planets = planets;
        this.producer = producer;
        this.release_date = release_date;
        this.species = species;
        this.starships = starships;
        this.title = title;
        this.vehicles = vehicles;
    }
}