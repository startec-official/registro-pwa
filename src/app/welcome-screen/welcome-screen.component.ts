import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../utils/storage.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {
  @ViewChild("content", {static: true }) private content;

  constructor( private storageService : StorageService,
               private modalService: NgbModal,
               private swUpdate: SwUpdate ) { }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        this.modalService.open( this.content , {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          console.log(result);
        });
      });
    }
  }

  reload(): void {
    window.location.reload();
  }
}
