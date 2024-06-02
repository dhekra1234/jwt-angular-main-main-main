import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrapingService } from 'src/app/scraping.service';
@Component({
  selector: 'app-url-insta-indep',
  templateUrl: './url-insta-indep.component.html',
  styleUrls: ['./url-insta-indep.component.css']
})
export class UrlInstaIndepComponent {
  url: string = '';

  constructor(private router: Router, private scrapingService: ScrapingService) {}

  onSubmit() {
    const accountName = this.extractAccountName(this.url);
    if (accountName) {
      this.scrapingService.scrapeProfile(this.url).subscribe({
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
    const parts = url.split('/');
    return parts.length > 1 ? parts[parts.length - 2] : '';
  }
}