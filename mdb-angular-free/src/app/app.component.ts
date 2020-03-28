import { Component } from '@angular/core';
import { ApiService } from './core/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sba9-app';

  constructor(private apiService: ApiService){
  }

  isAuthenticated(): Observable<boolean> {
    return this.apiService.isAuthenticated();
  }
}
