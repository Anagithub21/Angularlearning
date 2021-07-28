import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  id: number = 10;
  name: string = "Ankita Shrivastava"
  serverStatus: string = "Offline"
  allownewServer: boolean = true
  event:boolean=false
  isLoggedIn:boolean=true
  myarr:any=[{name:"Ana"},{name:"Shri"}]
  constructor() {
    setTimeout(() => {
      this.allownewServer = false
    }, 3000)
  }

  ngOnInit(): void {
  }
  getserverstatus() {
    return this.serverStatus
  }
  showdata(){
    this.event=true
    this.isLoggedIn=false
  }
  getcolor(){
    return 'green'
  }
}
