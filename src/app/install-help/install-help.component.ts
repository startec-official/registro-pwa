import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-install-help',
  templateUrl: './install-help.component.html',
  styleUrls: ['./install-help.component.css']
})
export class InstallHelpComponent implements OnInit {

  browserType : string;

  constructor() { }

  ngOnInit(): void {
    this.browserType = "";
  }

}
