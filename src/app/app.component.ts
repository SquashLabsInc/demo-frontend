import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'To-Do-App';
  constructor(
    private apiService: TaskService
  ) { 
    
  }

  Tasks:any = [];

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(){
    this.apiService.getAllTask().subscribe((data) => {
     this.Tasks = data.results;
    })    
  }
  removeTask(task, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteTask(task.id).subscribe((data) => {
          this.Tasks.splice(index, 1);
        }
      )    
    }
  }
}
