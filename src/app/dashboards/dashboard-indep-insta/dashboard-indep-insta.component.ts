import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PythonresultService } from 'src/app/pythonresult.service';
import { Chart } from 'chart.js';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-dashboard-indep-insta',
  templateUrl: './dashboard-indep-insta.component.html',
})
export class DashboardIndepInstaComponent implements OnInit, AfterViewInit {
  postsCount: number;
  followersCount: number;
  followingCount: number;
  totalLikes: number;
  totalComments: number;
  engagementRate: number;
  averageLikesPerPost: number;
  averageCommentsPerPost: number;
  
  accountName: string = 'jawedAhmed'; // Exemple de compte
  constructor(
    private route: ActivatedRoute,
    private pythonResultService: PythonresultService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.fetchPythonResult(this.accountName);
  }

  fetchPythonResult(accountName: string): void {
    this.pythonResultService.getPythonResult(accountName).subscribe(data => {
      this.postsCount = data.posts_count;
      this.followersCount = data.followers_count;
      this.followingCount = data.following_count;
      this.totalLikes = data.total_likes;
      this.totalComments = data.total_comments;
      this.engagementRate = data.engagement_rate;
      this.averageLikesPerPost = data.average_likes_per_post;
      this.averageCommentsPerPost = data.average_comments_per_post;
      // Mettre à jour le graphique de taux d'engagement
      this.updateEngagementChart();
      // Mettre à jour le graphique de moyennes
      this.updateAverageChart();
    }, error => {
      console.error('Error fetching Python result', error);
    });
  }

  // Méthode pour mettre à jour le graphique de taux d'engagement
  updateEngagementChart() {
    const canvas = document.getElementById('engagementChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found');
      return;
    }

    // Calcul du taux d'engagement
    const followersCount = this.followersCount || 1; // Éviter la division par zéro
    const engagementRate = ((this.totalLikes + this.totalComments) / followersCount) * 100;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Total j'aimes", 'Total commentaires'],
        datasets: [{
          data: [this.totalLikes, this.totalComments],
          backgroundColor: ['#ff6384', '#36a2eb']
        }]
      }
    });
  }

  // Méthode pour mettre à jour le graphique de moyennes
  updateAverageChart() {
    const canvas = document.getElementById('averageChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found');
      return;
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['J\'aimes', 'Commentaires'], // Étiquettes pour les catégories
        datasets: [
          {
            label: 'Moyenne J\'aimes',
            data: [this.averageLikesPerPost, 0], // Mettre 0 pour l'alignement
            backgroundColor: '#ff6384'
          },
          {
            label: 'Moyenne Commentaires',
            data: [0, this.averageCommentsPerPost], // Mettre 0 pour l'alignement
            backgroundColor: '#36a2eb'
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0
            }
          }
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.loadScripts();
  }

  private loadScripts(): void {
    this.loadScript('assets/js/vendor.min.js')
      .then(() => {
        console.log('vendor.min.js loaded');
        return this.loadScript('assets/js/app.min.js');
      })
      .then(() => {
        console.log('app.min.js loaded');
        return this.loadScript('assets/js/vendor/apexcharts.min.js');
      })
      .then(() => {
        console.log('apexcharts.min.js loaded');
        return this.loadScript('assets/js/ui/component.chat.js');
      })
      .then(() => {
        console.log('component.chat.js loaded');
        return this.loadScript('assets/js/ui/component.todo.js');
      })
      .then(() => {
        console.log('component.todo.js loaded');
        return this.loadScript('assets/js/pages/demo.widgets.js');
      })
      .then(() => {
        console.log('demo.widgets.js loaded');
      })
      .catch(error => console.error('Error loading scripts', error));
  }

  private loadScript(scriptUrl: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = this.renderer.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      scriptElement.onerror = reject;
      this.renderer.appendChild(document.body, scriptElement);
    });
  }

  exportPDF() {
    const doc = new jsPDF();

    // Sélectionnez l'élément HTML que vous souhaitez convertir en PDF
    const elementHTML = document.querySelector('.wrapper') as HTMLElement;

    if (elementHTML) {
      // Ajoutez l'élément HTML au PDF
      doc.html(elementHTML, {
        callback: function (doc) {
          doc.save('export.pdf');
        },
        x: 10,
        y: 10
      });
    } else {
      console.error("L'élément HTML n'a pas été trouvé.");
    }
  }
}
