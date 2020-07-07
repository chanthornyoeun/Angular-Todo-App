import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailTemplateDrivenFormComponent } from './todo-detail-template-driven-form.component';

describe('TodoDetailTemplateDrivenFormComponent', () => {
  let component: TodoDetailTemplateDrivenFormComponent;
  let fixture: ComponentFixture<TodoDetailTemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailTemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
