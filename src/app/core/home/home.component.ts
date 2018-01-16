import { Component, OnInit } from '@angular/core';
import * as rootActions from './../../core/actions/global-ui';
import * as fromRoot from '../../redux';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  loadFiveSecond() {
    this.store.dispatch(new rootActions.SetSpinnerVisibilityAction(true));

    setTimeout(() => {
      this.store.dispatch(new rootActions.SetSpinnerVisibilityAction(false));
    }, 5000);
  }
}
