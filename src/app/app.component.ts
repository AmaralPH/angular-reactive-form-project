import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

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
      'projectName': new FormControl(null, [Validators.required], this.invalidNamesAsync),
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

  invalidNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'invalidProjectName': true})
        } else {
          resolve(null)
        }
      }, 1500)
    })
    return promise;
  }
}
