import { Component, OnInit } from '@angular/core';
import { Status } from '../shared/model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  status = Status.active
  get users() {
    console.log(this.userService.users);
    return this.userService.users;
  }

  constructor(private userService: UsersService) { }

  async ngOnInit() {
   await this.userService.setUsers();
  }

}
