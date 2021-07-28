import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item1: string = '';
  @Output() msgEmit = new EventEmitter<string>();
  message = "Hello from child"
  msg = "Hello Again from child"
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage() {
    this.msgEmit.emit(this.msg)
  }
}
