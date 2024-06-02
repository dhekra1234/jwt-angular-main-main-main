import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  hide: boolean = true;
  submitted: boolean = false;

  constructor(private http: HttpClient) { }

  toggleHide() {
    this.hide = !this.hide;
  }

  passwordErrors(): string[] {
    const errors = [];
    if (!/[A-Z]/.test(this.password)) {
      errors.push('Le mot de passe doit commencer par une lettre majuscule.');
    }
    if ((this.password.match(/[^a-zA-Z0-9]/g) || []).length < 2) {
      errors.push('Le mot de passe doit contenir au moins deux caractères spéciaux.');
    }
    if (this.password.length < 8) {
      errors.push('Le mot de passe doit contenir au moins 8 caractères.');
    }
    return errors;
  }

  isFormValid(): boolean {
    return (
      this.username &&
      this.email &&
      this.password &&
      this.confirmPassword &&
      this.password === this.confirmPassword &&
      this.passwordErrors().length === 0
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.isFormValid()) {
      this.save();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Le formulaire est invalide. Veuillez vérifier les champs.',
      });
    }
  }

  save() {
    let bodyData = {
      "username": this.username,
      "email": this.email,
      "password": this.password
    };

    this.http.post("http://localhost:8080/api/v1/user/save", bodyData, { responseType: 'text' }).subscribe(
      (resultData: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Utilisateur enregistré avec succès',
        });
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Échec de l\'inscription. Veuillez réessayer.',
        });
      }
    );
  }
 }