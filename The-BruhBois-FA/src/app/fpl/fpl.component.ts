import { Component, OnInit } from '@angular/core';
import { FplApiService } from './fpl-api.service';

@Component({
  selector: 'app-fpl',
  templateUrl: './fpl.component.html',
  styleUrls: ['./fpl.component.css'],
  providers: [FplApiService]
})
export class FplComponent {
  error: any
  premData: any
  premResults: Array<any> = []

  constructor( private fplservice: FplApiService) { }

  showPrem() {
    this.fplservice.getPrem()
    .subscribe({
      next: (data : any) => this.premData = {...data},
      error: error => this.error = error,
    });
  }


}
