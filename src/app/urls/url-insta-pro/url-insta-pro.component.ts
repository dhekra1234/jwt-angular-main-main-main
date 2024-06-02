import { Component } from '@angular/core';
import { ScrapingService } from 'src/app/scraping.service';

@Component({
  selector: 'app-url-insta-pro',
  templateUrl: './url-insta-pro.component.html',
  styleUrls: ['./url-insta-pro.component.css']
})
export class UrlInstaProComponent {
  url1: string;
  url2: string;

  constructor(private scrapingService: ScrapingService) { }

  onSubmit() {
    this.scrapingService.scrapeProfile(this.url1).subscribe({
      next: (response1) => {
        console.log('Scraping successful for URL1!', response1);
        this.scrapingService.scrapeProfile(this.url2).subscribe({
          next: (response2) => {
            console.log('Scraping successful for URL2!', response2);
            // Compare the responses here or handle them as needed
          },
          error: (error) => {
            console.error('Scraping failed for URL2!', error);
          },
          complete: () => {
            console.log('Scraping process complete for URL2.');
          }
        });
      },
      error: (error) => {
        console.error('Scraping failed for URL1!', error);
      },
      complete: () => {
        console.log('Scraping process complete for URL1.');
      }
    });
  }

}
