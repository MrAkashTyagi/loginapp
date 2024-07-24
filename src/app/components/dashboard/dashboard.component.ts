import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private userService: UserService) { }


  getUsers() {

    this.userService.getUsers().subscribe(
      (users: any) => {
        console.log("I am getting users");
        console.log(users);

      },
      error => {
        console.log(error)
      }


    )

  }


}
