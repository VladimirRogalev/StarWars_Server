

export default class PeopleDto {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: number;
    id: number;
    image: string;
    mass: string;
    name: string;
    skin_color: string


    constructor(birth_year: string, created: string, edited: string, eye_color: string, gender: string, hair_color: string, height: string, homeworld: number, id: number, image: string, mass: string, name: string, skin_color: string) {
        this.birth_year = birth_year;
        this.created = created;
        this.edited = edited;
        this.eye_color = eye_color;
        this.gender = gender;
        this.hair_color = hair_color;
        this.height = height;
        this.homeworld = homeworld;
        this.id = id;
        this.image = image;
        this.mass = mass;
        this.name = name;
        this.skin_color = skin_color;
    }
}