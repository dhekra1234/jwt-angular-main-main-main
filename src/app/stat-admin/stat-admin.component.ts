import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stat-admin',
  templateUrl: './stat-admin.component.html',
  styleUrls: ['./stat-admin.component.css']
})
export class StatAdminComponent implements OnInit {
  reportCount: number;
  userCount: number;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.reportCount$.subscribe(count => {
      this.reportCount = count;
      this.updateReportChart();
    });

    this.sharedDataService.userCount$.subscribe(count => {
      this.userCount = count;
      this.updateUserChart();
    });
  }

  updateReportChart() {
    const ctx = document.getElementById('reportChart') as HTMLCanvasElement;
    if (!ctx) {
      console.error('Canvas element not found');
      return;
    }

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Rapports'],
        datasets: [{
          data: [this.reportCount],
          backgroundColor: ['#727cf5']
        }]
      }
    });
  }

  updateUserChart() {
    const ctx = document.getElementById('userChart') as HTMLCanvasElement;
    if (!ctx) {
      console.error('Canvas element not found');
      return;
    }

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Utilisateurs'],
        datasets: [{
          data: [this.userCount],
          backgroundColor: ['#d098e1']
        }]
      }
    });
  }
}
