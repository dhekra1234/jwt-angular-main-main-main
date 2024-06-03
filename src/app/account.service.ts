import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountName: string;

  constructor() { }

  setAccountName(name: string) {
    this.accountName = name;
  }

  getAccountName(): string {
    return this.accountName;
  }
}