import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statusOptions = ['stable', 'critical', 'finished'];
  invalidProjectNames = ['Test'];
  projectForm!: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.invalidNames.bind(this)]),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable')
    })
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  invalidNames(control: FormControl): { [p: string]: boolean } | null {
    if (this.invalidProjectNames.indexOf(control.value) !== -1) {
      return {'invalidProjectName': true};
    }
    return null;
  }
}
