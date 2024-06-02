import { Component,OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User[];
  constructor(private userService: UserService, private router: Router){}
  ngOnInit(): void {
    this.getUser();
  }
  private getUser(){
    this.userService.getUserList().subscribe(data => {
      this.user = data;
    });
  }
  userDetails(userid: number){
    this.router.navigate(['user-details', userid]);
  }

  updateUser(userid: number){
    this.router.navigate(['update-user', userid]);
  }

  deleteUser(userid: number){
    this.userService.deleteUser(userid).subscribe( data => {
      console.log(data);
      this.getUser();
    })
  }
}
