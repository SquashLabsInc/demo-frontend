import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: TaskService
  ) { 
    this.mainForm();
  }

  submitted = false;
  taskForm: FormGroup;

  ngOnInit(): void {
  }


  mainForm() {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      description:['', [Validators.required]]
     
    })
  }

  get myForm(){
    return this.taskForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.taskForm.valid) {
      return false;
    } else {
      this.apiService.createTask(this.taskForm.value).subscribe(
        (res) => {
          if(res){
            console.log('Task successfully created!')
          }
          this.ngZone.run(() => this.router.navigateByUrl('/'))
        }, (error) => {
          console.log(error);
        });
    }
  }
}
