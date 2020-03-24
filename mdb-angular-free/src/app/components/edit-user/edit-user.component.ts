import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserDTO } from 'src/app/core/model/userDTO';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MessageService } from 'src/app/core/message.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user = new  UserDTO();
  idUser: string;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private messageService: MessageService,
              private location: Location) { }

  ngOnInit() {
    this.idUser = this.route.snapshot.paramMap.get('id');
    this.apiService.getUserById(this.idUser).subscribe(user => {
     this.user = user;
     console.log('Retornou usuário com sucesso! ');
    }, error => {
      console.log('Error ao pegar usuário por ID! ', error);
    });
  }
  update(): void {
    this.user.id = this.idUser;
    this.apiService.updateUser(this.user).subscribe(() => {
      this.messageService.showSuccess('Atualizado', 'Usuário atualizado com sucesso!');
      this.goBack();
    }, error => {
      this.messageService.showError('Falha de Atualização', 'Falha ao tentar atualizar usuário!');
    });
  }
  goBack() {
    this.location.back();
  }
}
