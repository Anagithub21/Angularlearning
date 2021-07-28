import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-emulate',
  templateUrl: './view-emulate.component.html',
  styleUrls: ['./view-emulate.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ViewEmulateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
