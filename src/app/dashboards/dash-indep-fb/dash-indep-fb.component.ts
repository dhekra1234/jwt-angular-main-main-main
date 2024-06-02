import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PythonfbService } from 'src/app/pythonfb.service';
import { Chart } from 'chart.js';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-dash-indep-fb',
  templateUrl: './dash-indep-fb.component.html',
})
export class DashIndepFbComponent implements OnInit, AfterViewInit {
  postsCount: number;
  followersCount: number;
  likesCount: number;
  totalLikes: number;
  totalComments: number;
  totalReacts: number;
  totalShares: number;
  engagementRate: number;
  averageLikesPerPost: number;
  averageCommentsPerPost: number;
  averageSharesPerPost: number;

  
  accountName: string = '100044454488720'; // Exemple de compte
  constructor(
    private route: ActivatedRoute,
    private pythonfbService: PythonfbService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.fetchPythonfb(this.accountName);
  }

  fetchPythonfb(accountName: string): void {
    this.pythonfbService.getPythonfb(accountName).subscribe(data => {
      this.postsCount = data.posts_count;
      this.followersCount = data.followers_count;
      this.likesCount = data.likes_count;
      this.totalReacts = data.total_reacts;
      this.totalComments = data.total_comments;
      this.totalShares = data.total_shares;
      this.engagementRate = data.engagement_rate;
      this.averageLikesPerPost = data.average_likes_per_post;
      this.averageCommentsPerPost = data.average_comments_per_post;
      this.averageSharesPerPost = data.average_shares_per_post;
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
  const engagementRate = ((this.totalLikes + this.totalComments + this.totalShares) / followersCount) * 100;

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Total j'aimes", 'Total commentaires', 'Total partages'],
      datasets: [{
        data: [this.totalReacts, this.totalComments, this.totalShares],
        backgroundColor: [' rgb(207, 205, 205)', '#d098e1', '#727cf5']
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
      labels: ['J\'aimes', 'Commentaires', 'Partages'], // Étiquettes pour les catégories
      datasets: [
        {
          label: 'Moyenne J\'aimes',
          data: [this.averageLikesPerPost, 0, 0], // Mettre 0 pour l'alignement
          backgroundColor: '#d098e1'
        },
        {
          label: 'Moyenne Commentaires',
          data: [0, this.averageCommentsPerPost, 0], // Mettre 0 pour l'alignement
          backgroundColor: '#727cf5'
        },
        {
          label: 'Moyenne Partages',
          data: [0, 0, this.averageSharesPerPost], // Mettre 0 pour l'alignement
          backgroundColor: ' rgb(207, 205, 205)'
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
    const elementHTML = document.querySelector('.container') as HTMLElement;
  
    if (elementHTML) {
      html2canvas(elementHTML, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('landscape', 'mm', 'a3');
  
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('export.pdf');
      });
    } else {
      console.error("L'élément HTML n'a pas été trouvé.");
    }
}
exportPNG() {
  const elementHTML = document.querySelector('.container') as HTMLElement;

  if (elementHTML) {
    html2canvas(elementHTML, { scale: 2 }).then((canvas) => {
      // Convert the canvas to a PNG and trigger a download
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'dashboard.png';
      link.click();
    });
  } else {
    console.error("L'élément HTML n'a pas été trouvé.");
  }
}
}
