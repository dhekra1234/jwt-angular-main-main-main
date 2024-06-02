import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userid: number;
  user: User = new User();
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }
   
    
  ngOnInit(): void {
    this.userid = this.route.snapshot.params['userid'];

    this.userService.getUserById(this.userid).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.userService.updateUser(this.userid, this.user).subscribe( data =>{
      this.goToUserList();
      console.log('Mise à jour des données utilisateur', this.user);
      this.router.navigate(['/dashboard-admin']);
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

}
