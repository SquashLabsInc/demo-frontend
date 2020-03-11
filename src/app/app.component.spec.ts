import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ AppComponent ],
        imports:[HttpClientModule],
        providers: [{provide:TaskService}]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it(`should have a title 'To-Do-App'`, () => {
        expect(component.title).toBe('To-Do-App');
      });
  });