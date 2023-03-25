import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from '../department.service';
import { Employee } from '../employee-data';
import { DataService } from '../employee.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css'],
})
export class DeptComponent implements OnInit {
  constructor(private DepartmentService: DepartmentService) {}
  employees: Employee[] = [];
  private dataservice: DataService;

  getUsers() {
    this.dataservice.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
  ngOnInit() {
    this.getUsers();
  }
}
