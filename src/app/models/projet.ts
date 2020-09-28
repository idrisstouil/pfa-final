import { User } from './User';

export interface Projet{
    name:string,
    description:string,
    date_debut:Date,
    date_fin:Date,
    users ?: User[]
}