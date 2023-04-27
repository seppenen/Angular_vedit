import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {ModalService} from "../services/modal.service";
import {subscribeOn} from "rxjs";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  private Authenticated: boolean = false;

  constructor(public modalService: ModalService, public authService: AuthService) {
    this.authService.isAuthenticated$.subscribe(state => {
      this.Authenticated = state;
      console.log(this.Authenticated)
    })
  }

  openModal($event: Event) {
    $event.preventDefault();
    this.modalService.toggleModal('auth');
  }


}
