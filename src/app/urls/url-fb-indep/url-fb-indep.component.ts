import { Component } from '@angular/core';
import { ScrapefbService } from 'src/app/scrapefb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-fb-indep',
  templateUrl: './url-fb-indep.component.html',
})
export class UrlFbIndepComponent {
  url: string = '';

  constructor(private router: Router, private scrapefbService: ScrapefbService) {}

  onSubmit() {
    const accountName = this.extractAccountName(this.url);
    if (accountName) {
      this.scrapefbService.scrapeProfile(this.url).subscribe({
        next: (response) => {
          console.log('Scraping successful!', response);
          // Rediriger vers la page des résultats avec le nom de compte
          //this.router.navigate(['/dash-indep-insta', accountName]);
        },
        error: (error) => {
          console.error('Scraping failed!', error);
          // Gérez l'erreur comme nécessaire
        },
        complete: () => {
          console.log('Scraping process complete.');
          // Action à réaliser une fois que l'opération est complètement terminée
        }
      });
    } else {
      console.error('URL invalide');
      // Gérez l'erreur si l'URL est invalide ou ne contient pas le nom de compte
    }
  }

  extractAccountName(url: string): string {
    // Check if the URL contains 'id='
    const idIndex = url.indexOf('id=');
    if (idIndex !== -1) {
      // Extract the part after 'id='
      const idPart = url.substring(idIndex + 3);
      // Split the part by '&' to get the ID if there are other parameters
      const parts = idPart.split('&');
      // Return the ID part
      return parts[0];
    }
    // If 'id=' is not found, return an empty string
    return '';
  }
  
}