import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/core/model/userDTO';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public user = new UserDTO();

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

}
