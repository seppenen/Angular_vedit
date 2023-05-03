import {Component, ElementRef, Input} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() modalID: string = '';
  constructor(public modalService: ModalService, public el: ElementRef) {


  }

  closeModal() {
    this.modalService.toggleModal(this.modalID);
  }



}
