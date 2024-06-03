import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User[];
  userCount: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    this.userService.getUserList().subscribe(data => {
      this.user = data;
      // Calculer le nombre d'utilisateurs en excluant l'admin
      this.userCount = this.user.length - 1;
      // Mettre à jour le compteur d'utilisateurs dans SharedDataService
      this.sharedDataService.setUserCount(this.userCount);
    });
  }

  userDetails(userid: number) {
    this.router.navigate(['user-details', userid]);
  }

  updateUser(userid: number) {
    this.router.navigate(['update-user', userid]);
  }

  deleteUser(userid: number) {
    this.userService.deleteUser(userid).subscribe(data => {
      console.log(data);
      this.getUser();
    });
  }
}
