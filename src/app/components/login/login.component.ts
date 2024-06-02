import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  role = '';
  mode = '';
  emailError: string | null = null;
  passwordError: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.emailError = null;
    this.passwordError = null;

    if (!this.validateEmail(this.email)) {
      this.emailError = "Veuillez entrer une adresse email valide.";
      return;
    }

    this.authService.checkEmailExists(this.email).subscribe(
      (user: User | null) => {
        if (!user) {
          this.emailError = "L'adresse email n'existe pas.";
        } else {
          // Add logic to check both encoded and non-encoded passwords
          this.authService.login(this.email, this.password, this.mode).subscribe(
            (response) => {
              if (response.role === 'admin') {
                this.router.navigate(['/dashboard-admin']);
              } else if (response.role === 'pro') {
                this.router.navigate(['/pro']);
              } else {
                this.router.navigate(['/indep']);
              }
            },
            (error) => {
              console.error('Login failed', error);
              this.passwordError = "Mot de passe incorrect";
            }
          );
        }
      },
      (error) => {
        console.error('Email check failed', error);
        this.emailError = "Une erreur est survenue lors de la vérification de l'email.";
      }
    );
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
