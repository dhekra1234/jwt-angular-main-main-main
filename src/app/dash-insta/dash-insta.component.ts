import { Component, Input, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ChartType, ChartTypeRegistry } from 'chart.js'; // Importer les types nécessaires

@Component({
  selector: 'app-dash-insta',
  templateUrl: './dash-insta.component.html',
  styleUrls: ['./dash-insta.component.css']
})
export class DashInstaComponent implements OnInit {
  @Input() chartData: any;

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public chartLabels: string[] = ['Posts', 'Followers', 'Following'];
  public chartType: keyof ChartTypeRegistry = 'bar'; // Typage correct ici
  public chartLegend: boolean = true;

  public chartDataSets: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.chartDataSets = [
      { data: [this.chartData.posts_count, this.chartData.followers_count, this.chartData.following_count], label: 'Count' }
    ];
  }

  exportPDF() {
    const DATA = document.getElementById('chart-container');
    html2canvas(DATA).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('chart.pdf');
    });
  }
}
