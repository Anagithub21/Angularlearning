import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-shadowdom',
  templateUrl: './view-shadowdom.component.html',
  styleUrls: ['./view-shadowdom.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ViewShadowdomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
