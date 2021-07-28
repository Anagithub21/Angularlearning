import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  iamtrue: boolean = true
  users: any = [
    1, 2, 3, 5, 6, 7, 8, 34
  ]
  employees: any = []

  constructor() {
    this.employees = [
      {
        code: '1001', name: 'drashti', gender: 'Female',
        salary: 55500
      },
      {
        code: '1002', name: 'namrata', gender: 'Female',
        salary: 57000
      },
      {
        code: '1003', name: 'shreeja', gender: 'Female',
        salary: 59000
      },
      {
        code: '1004', name: 'shreenil', gender: 'Male',
        salary: 65000
      }
    ];
  }
  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }

  ngOnInit(): void {

  }
  changeme() {
    if (this.iamtrue) {
      this.iamtrue = false
    } else {
      this.iamtrue = true
    }
  }

  getEmployees(): void {
    this.employees = [
      {
        code: '1001', name: 'drashti', gender: 'Female',
        salary: 55500
      },
      {
        code: '1002', name: 'namrata', gender: 'Female',
        salary: 57000
      },
      {
        code: '1003', name: 'shreeja', gender: 'Female',
        salary: 59000
      },
      {
        code: '1004', name: 'shreenil', gender: 'Male',
        salary: 65000
      },
      {
        code: '1005', name: 'tejas', gender: 'Male',
        salary: 67000
      }
    ];
  }
}
