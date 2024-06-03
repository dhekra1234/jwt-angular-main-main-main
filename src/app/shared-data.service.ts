import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private reportCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  reportCount$ = this.reportCountSubject.asObservable();

  private userCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  userCount$ = this.userCountSubject.asObservable();

  constructor() {
    const savedReportCount = localStorage.getItem('reportCount');
    if (savedReportCount) {
      this.reportCountSubject.next(Number(savedReportCount));
    }

    const savedUserCount = localStorage.getItem('userCount');
    if (savedUserCount) {
      this.userCountSubject.next(Number(savedUserCount));
    }
  }

  incrementReportCount() {
    let currentReportCount = this.reportCountSubject.value;
    currentReportCount += 1;
    this.reportCountSubject.next(currentReportCount);
    localStorage.setItem('reportCount', currentReportCount.toString());
    console.log(`Report count incremented to: ${currentReportCount}`);
  }

  setUserCount(count: number) {
    this.userCountSubject.next(count);
    localStorage.setItem('userCount', count.toString());
    console.log(`User count set to: ${count}`);
  }
}
