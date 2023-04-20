import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statusOptions = ['stable', 'critical', 'finished']
  projectForm!: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null),
      'mail': new FormControl(null),
      'status': new FormControl('stable')
    })
  }

  onSubmit() {
    console.log(this.projectForm)
  }
}
