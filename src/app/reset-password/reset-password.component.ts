import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'] // Assurez-vous d'avoir ce fichier CSS pour le style
})
export class ResetPasswordComponent {
  token: string;
  newPassword: string;
  confirmPassword: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.token = this.route.snapshot.queryParams['token'];
  }

  onResetPassword() {
    if (this.newPassword !== this.confirmPassword) {  
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    this.authService.resetPassword(this.token, this.newPassword).subscribe(
      response => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue. Veuillez réessayer.'
        });
        
      },
      error => {
        Swal.fire({
          icon: 'success',
          title: 'mot de passe reinitialiser!',
          text: 'Votre mot de passe a été reinitaliser.',
          showConfirmButton: false,
          timer: 3000 // Masquer automatiquement l'alerte après 3 secondes
          
        });
        this.router.navigate(['/login']);
      }
    );
  }
}
