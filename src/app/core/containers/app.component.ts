import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../redux';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showSpinner = false;
  mostrarMenu = false;

  subscriptions : Subscription[] = [];

  constructor(private store: Store<fromRoot.State>, private router: Router) {

  }

  ngOnInit(): void {

      this.subscriptions.push(this.store.select(fromRoot.getShowSpinner).subscribe(x => {
          setTimeout(() => {
              this.showSpinner = x;
          }, 1);
      }));
  }

  ngOnDestroy() {
      this.subscriptions.forEach(x => x.unsubscribe());
  }
}
