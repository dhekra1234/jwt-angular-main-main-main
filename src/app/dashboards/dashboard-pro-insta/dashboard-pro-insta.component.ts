import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PythonresultService } from 'src/app/pythonresult.service';
import { jsPDF } from 'jspdf';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-pro-insta',
  templateUrl: './dashboard-pro-insta.component.html',
  styleUrls: ['./dashboard-pro-insta.component.css']
})
export class DashboardProInstaComponent implements OnInit, AfterViewInit {
  // Compte compte1
  compte1PostsCount: number;
  compte1FollowersCount: number;
  compte1FollowingCount: number;
  compte1TotalLikes: number;
  compte1TotalComments: number;
  compte1EngagementRate: number;
  compte1AverageLikesPerPost: number;
  compte1AverageCommentsPerPost: number;

  // Compte compte2
  compte2PostsCount: number;
  compte2FollowersCount: number;
  compte2FollowingCount: number;
  compte2TotalLikes: number;
  compte2TotalComments: number;
  compte2EngagementRate: number;
  compte2AverageLikesPerPost: number;
  compte2AverageCommentsPerPost: number;

  accountNames: string[] = ['jawedAhmed', 'maissaTekaya'];

  constructor(
    private route: ActivatedRoute,
    private pythonResultService: PythonresultService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.fetchPythonResult('jawedAhmed', 'jawed');
    this.fetchPythonResult('maissaTekaya', 'maissa');
  }

  fetchPythonResult(accountName: string, prefix: string): void {
    this.pythonResultService.getPythonResult(accountName).subscribe(data => {
      if (prefix === 'jawed') {
        this.compte1PostsCount = data.posts_count;
        this.compte1FollowersCount = data.followers_count;
        this.compte1FollowingCount = data.following_count;
        this.compte1TotalLikes = data.total_likes;
        this.compte1TotalComments = data.total_comments;
        this.compte1EngagementRate = data.engagement_rate;
        this.compte1AverageLikesPerPost = data.average_likes_per_post;
        this.compte1AverageCommentsPerPost = data.average_comments_per_post;
        this.updateEngagementChart(prefix);
        this.updateAverageChart(prefix);
      } else if (prefix === 'maissa') {
        this.compte2PostsCount = data.posts_count;
        this.compte2FollowersCount = data.followers_count;
        this.compte2FollowingCount = data.following_count;
        this.compte2TotalLikes = data.total_likes;
        this.compte2TotalComments = data.total_comments;
        this.compte2EngagementRate = data.engagement_rate;
        this.compte2AverageLikesPerPost = data.average_likes_per_post;
        this.compte2AverageCommentsPerPost = data.average_comments_per_post;
        this.updateEngagementChart(prefix);
        this.updateAverageChart(prefix);
      }
    }, error => {
      console.error('Error fetching Python result', error);
    });
  }

  updateEngagementChart(prefix: string) {
    const canvas = document.getElementById(`${prefix}EngagementChart`) as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found');
      return;
    }

    const totalLikes = prefix === 'compte1' ? this.compte1TotalLikes : this.compte2TotalLikes;
    const totalComments = prefix === 'compte1' ? this.compte1TotalComments : this.compte2TotalComments;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Total j'aimes", 'Total commentaires'],
        datasets: [{
          data: [totalLikes, totalComments],
          backgroundColor: ['#ff6384', '#36a2eb']
        }]
      }
    });
  }

  updateAverageChart(prefix: string) {
    const canvas = document.getElementById(`${prefix}AverageChart`) as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found');
      return;
    }

    const averageLikesPerPost = prefix === 'compte1' ? this.compte1AverageLikesPerPost : this.compte2AverageLikesPerPost;
    const averageCommentsPerPost = prefix === 'compte1' ? this.compte1AverageCommentsPerPost : this.compte2AverageCommentsPerPost;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['J\'aimes', 'Commentaires'],
        datasets: [
          {
            label: 'Moyenne J\'aimes',
            data: [averageLikesPerPost, 0],
            backgroundColor: '#ff6384'
          },
          {
            label: 'Moyenne Commentaires',
            data: [0, averageCommentsPerPost],
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

    const elementHTML = document.querySelector('.wrapper') as HTMLElement;

    if (elementHTML) {
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