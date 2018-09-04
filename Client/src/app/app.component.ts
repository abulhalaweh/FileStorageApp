import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '@fortawesome/fontawesome-free/js/all.js';
import { Subscription } from 'rxjs/internal/Subscription';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public loggedIn = false;
  private signedIn: Subscription;
  private signedOut: Subscription;

  constructor(private accountService: AccountService,
              private router: Router) {
    this.signedIn = accountService.isLoggedIn.subscribe(() => this.hasLoggedIn());
    this.signedOut = accountService.isLoggedOut.subscribe(() => this.hasLoggedOut());
  }

  public isLoggedIn(): void {
    if (this.loggedIn === true) {
      this.router.navigate(['/profile/info'], {skipLocationChange: true});
    } else {
      this.router.navigate( ['/account/login'],
      {
          queryParams: { 'redirect': true },
          skipLocationChange: true
      });
    }
  }

  //public isLoggedInToMyStorage(): void {
  //  if (this.loggedIn === true) {
  //    this.router.navigate(['/profile/info'], { skipLocationChange: true });
  //    //this.router.navigate(['/upload/uploadFile'], { skipLocationChange: true });
  //  } else {
  //    this.router.navigate(['/account/login'],
  //      {
  //        queryParams: { 'redirect': true },
  //        skipLocationChange: true
  //      });
  //  }
  //}

  public hasLoggedIn(): void {
      this.loggedIn = true;
  }

  public hasLoggedOut(): void {
    if (this.loggedIn === true) {
      this.accountService.logout();
      this.loggedIn = false;
      this.router.navigate(['/']);
    }
  }
}
