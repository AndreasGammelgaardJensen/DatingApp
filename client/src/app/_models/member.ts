import { Photo } from './photo';

export interface Member {
    id: number;
    userName: string;
    photoUrl: string;
    introduction: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    lookingFor: string;
    interest?: any;
    city: string;
    country: string;
    photos: Photo[];
}

