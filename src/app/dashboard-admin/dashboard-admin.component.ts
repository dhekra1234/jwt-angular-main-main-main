
import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-dashboard-admin',
    templateUrl: './dashboard-admin.component.html'
})
export class DashboardAdminComponent implements AfterViewInit  {

  constructor(private renderer: Renderer2) {}

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
        return this.loadScript('assets/js/vendor/Chart.bundle.min.js');
      })
      .then(() => {
        console.log('Chart.bundle.min.js loaded');
        return this.loadScript('assets/js/pages/demo.dashboard-projects.js');
      })
      .then(() => {
        console.log('demo.dashboard-projects.js loaded');
      })
      .catch(error => console.error('Error loading scripts', error));
  }  

  private loadScript(scriptUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const scriptElement = this.renderer.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = () => resolve();
      scriptElement.onerror = () => reject(new Error(`Script load error for ${scriptUrl}`));
      this.renderer.appendChild(document.body, scriptElement);
    });
  }
}