import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewnone',
  templateUrl: './viewnone.component.html',
  styleUrls: ['./viewnone.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ViewnoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
