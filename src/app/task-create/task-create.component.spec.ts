import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TaskService} from '../task.service'
import { Router } from '@angular/router';
import { TaskCreateComponent } from './task-create.component';

describe('TaskCreateComponent', () => {
  let component: TaskCreateComponent;
  let fixture: ComponentFixture<TaskCreateComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let router:Router 


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCreateComponent ],
      imports:[HttpClientModule],
      providers: [ { provide: FormBuilder, useValue: formBuilder },{provide:Router,useValue:router},{provide:TaskService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
