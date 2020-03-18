import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/core/model/login';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  user = new UserLogin();

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    this.apiService.login(this.user).subscribe(data => {
      this.loginSuccess(data);
    }, error =>{
      alert('Erro ao fazer Login');
    });
  }

  public loginSuccess(data: any) {
    localStorage.clear();
    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
    this.apiService.getMainUser(localStorage.getItem('accessToken')).subscribe(user => {
      this.redirectPage(user);
    }, error =>{
      alert('Erro ao pegar usuário logado');
    });
  }

  public redirectPage(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate(['welcome']);
  }
}
