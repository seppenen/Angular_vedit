import {Component, OnInit} from '@angular/core';
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showModal = true

  constructor(public modalService: ModalService) {

  }

  ngOnInit(): void {

  }

}
