export interface User {
    firstname: string,
    lastname: string,
    about: string,
    date: Date,
    status: string
}

export enum Status {
    active = 'active',
    inactive = 'inactive',
    deleted = 'deleted',
}