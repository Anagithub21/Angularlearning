import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  message: any = "Hello Child from parent"
  @ViewChild(ChildComponent, { static: false }) child: any;
  message1: any;
  constructor() { }

  ngOnInit(): void {
  //  this.message1 = this.child.message
  }
  ngAfterViewInit() {
    this.message1 = this.child.message
  }
  receivemessage(e: any) {
    console.log(e)
  }
}
