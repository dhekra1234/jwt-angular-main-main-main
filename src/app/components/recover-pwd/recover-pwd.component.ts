import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover-pwd',
  templateUrl: './recover-pwd.component.html',
 
})
export class RecoverPwdComponent {
  email: string;

  constructor(private authService: AuthService, private router: Router) {}

  onRecoverPassword() {
    this.authService.recoverPassword(this.email).subscribe(
      response => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue. Veuillez réessayer.'
        });
        
      },
      error => {
        console.error('Erreur lors de la récupération du mot de passe:', error); // Afficher l'erreur dans la console
        Swal.fire({
          icon: 'success',
          title: 'Email envoyé!',
          text: 'Un lien de réinitialisation de mot de passe a été envoyé à votre adresse email.',
          showConfirmButton: false,
          timer: 3000 // Masquer automatiquement l'alerte après 3 secondes
          
        });
        
      }
    );
  }
}
