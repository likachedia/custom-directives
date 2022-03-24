import { Injectable } from '@angular/core';
import { User } from '../shared/model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] | undefined

  constructor() { }

  getUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      setTimeout(() => {
       return resolve([
      {
        firstname: 'lika',
        lastname: "chedia",
        about: "lika",
        date: new Date(1997, 6, 21),
        status: "active",
      },
      {
        firstname: 'lika1',
        lastname: "chedia",
        about: "lika1",
        date: new Date(1995, 6, 21),
        status: "inactive",
      },
      {
        firstname: 'lika2',
        lastname: "chedia",
        about: "lika2",
        date: new Date(1993, 3, 28),
        status: "deleted",
      },
    ])
      }, 0);
    })
  }

 async setUsers() {
   const data = await this.getUsers();
   this.users = data
  }
}
