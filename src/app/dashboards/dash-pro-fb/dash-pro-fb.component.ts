import { Component, OnInit, AfterViewInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PythonfbService } from 'src/app/pythonfb.service';
import { jsPDF } from 'jspdf';
import { Chart } from 'chart.js';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dash-pro-fb',
  templateUrl: './dash-pro-fb.component.html',
})
export class DashProFbComponent implements OnInit, AfterViewInit {
  // Compte compte1
  compte1postsCount: number;
  compte1followersCount: number;
  compte1likesCount: number;
  compte1totalLikes: number;
  compte1totalComments: number;
  compte1totalReacts: number;
  compte1totalShares: number;
  compte1engagementRate: number;
  compte1averageLikesPerPost: number;
  compte1averageCommentsPerPost: number;
  compte1averageSharesPerPost: number;
  // Compte compte2
  compte2postsCount: number;
  compte2followersCount: number;
  compte2likesCount: number;
  compte2totalLikes: number;
  compte2totalComments: number;
  compte2totalReacts: number;
  compte2totalShares: number;
  compte2engagementRate: number;
  compte2averageLikesPerPost: number;
  compte2averageCommentsPerPost: number;
  compte2averageSharesPerPost: number;
  engagementChartInstance: any;
  averageChartInstance: any;


  @ViewChild('engagementChart') engagementChart!: ElementRef;
  @ViewChild('averageChart') averageChart!: ElementRef;
  accountNames: string[] = ['100044454488720', '61554758663749'];

  constructor(
    private pythonfbService: PythonfbService,
    private renderer: Renderer2
  ) { }
  ngAfterViewInit(): void {
    // Initial rendering of charts with default data (optional)
    this.updateEngagementChart();
    this.updateAverageChart();
  }
  ngOnInit(): void {
    this.fetchPythonfb('100044454488720', 'url1');
    this.fetchPythonfb('61554758663749', 'url2');
  }

  fetchPythonfb(accountName: string, prefix: string): void {
    this.pythonfbService.getPythonfb(accountName).subscribe(data => {
      console.log(`${prefix} data:`, data);
      if (prefix === 'url1') {
        this.compte1postsCount = data.posts_count;
        this.compte1followersCount = data.followers_count;
        this.compte1likesCount = data.likes_count;
        this.compte1totalReacts = data.total_reacts;
        this.compte1totalComments = data.total_comments;
        this.compte1totalShares = data.total_shares;
        this.compte1engagementRate = data.engagement_rate;
        this.compte1averageLikesPerPost = data.average_likes_per_post;
        this.compte1averageCommentsPerPost = data.average_comments_per_post;
        this.compte1averageSharesPerPost = data.average_shares_per_post;
        this.updateEngagementChart();
        this.updateAverageChart();
      } else if (prefix === 'url2') {
        this.compte2postsCount = data.posts_count;
        this.compte2followersCount = data.followers_count;
        this.compte2likesCount = data.likes_count;
        this.compte2totalReacts = data.total_reacts;
        this.compte2totalComments = data.total_comments;
        this.compte2totalShares = data.total_shares;
        this.compte2engagementRate = data.engagement_rate;
        this.compte2averageLikesPerPost = data.average_likes_per_post;
        this.compte2averageCommentsPerPost = data.average_comments_per_post;
        this.compte2averageSharesPerPost = data.average_shares_per_post;
        this.updateEngagementChart();
        this.updateAverageChart();
      }
      
    }, error => {
      console.error('Error fetching Python result', error);
    });
  }

  updateEngagementChart(): void {
    if (!this.engagementChart) return;

    // Détruire le graphique existant s'il existe
    if (this.engagementChartInstance) {
      this.engagementChartInstance.destroy();
    }

    const ctx = this.engagementChart.nativeElement.getContext('2d');
    this.engagementChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Engagement Rate'],
        datasets: [
          {
            label: 'url1',
            data: [this.compte1engagementRate],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'url2',
            data: [this.compte2engagementRate],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 100, // Set this value to a suitable maximum for your data
            ticks: {
              stepSize: 10 // Adjust the step size to make the chart more readable
            }
          }
        }
      }
    });
  }
  updateAverageChart(): void {
    if (!this.averageChart) return;

    // Détruire le graphique existant s'il existe
    if (this.averageChartInstance) {
      this.averageChartInstance.destroy();
    }

    const ctx = this.averageChart.nativeElement.getContext('2d');
    this.averageChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Average Likes', 'Average Comments', 'Average Shares'],
        datasets: [
          {
            label: 'url1',
            data: [
              this.compte1averageLikesPerPost,
              this.compte1averageCommentsPerPost,
              this.compte1averageSharesPerPost
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'url2',
            data: [
              this.compte2averageLikesPerPost,
              this.compte2averageCommentsPerPost,
              this.compte2averageSharesPerPost
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 3000, // Set this value to a suitable maximum for your data
            ticks: {
              stepSize: 100 // Adjust the step size to make the chart more readable
            }
          }
        }
      }
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