import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private notify = new Subject();
  public notfyObservable$ = this.notify.asObservable();
  
  constructor(private toastrService: ToastrService) { }

  showSuccess(titulo, message) {
    this.toastrService.success( message, titulo);
    this.notify.next(true);
  }

  showWarning(titulo, message) {
    this.toastrService.warning(message, titulo);
    this.notify.next(true);
  }

  showError(titulo, message) {
    this.toastrService.error(message, titulo);
    this.notify.next(true);
  }

}
