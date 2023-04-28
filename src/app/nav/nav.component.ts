import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {ModalService} from "../services/modal.service";



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public modalService: ModalService, public authService: AuthService) {

  }

  openModal($event: Event) {
    $event.preventDefault();
    this.modalService.toggleModal('auth');
  }


}
