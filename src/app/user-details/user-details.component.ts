import { Component,OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userid: number
  user: User
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['userid'];

    this.user = new User();
    this.userService.getUserById(this.userid).subscribe( data => {
      this.user = data;
    });
  }

}
