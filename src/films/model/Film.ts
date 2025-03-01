import {Schema, Document, model} from 'mongoose';

export  interface IFilm extends Document {
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
}

const filmSchema : Schema = new Schema <IFilm> (
    {
        characters: {type: [Number], required: true},
        created: {type: String, required: true},
        director: {type: String, required: true},
        edited: {type: String, required: true},
        episode_id: {type: Number, required: true},
        id:{type: Number, required: true},
        opening_crawl: {type: String, required: true},
        planets: {type: [Number], required: true},
        producer: {type: String, required: true},
        release_date: {type: String, required: true},
        species: {type: [Number], required: true},
        starships: {type: [Number], required: true},
        title: {type: String, required: true, unique: true},
        vehicles: {type: [Number], required: true},
    }
)

export const Film = model<IFilm> ('Film', filmSchema);