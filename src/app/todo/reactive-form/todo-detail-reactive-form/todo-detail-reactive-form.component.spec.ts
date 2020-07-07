import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailReactiveFormComponent } from './todo-detail-reactive-form.component';

describe('TodoDetailReactiveFormComponent', () => {
  let component: TodoDetailReactiveFormComponent;
  let fixture: ComponentFixture<TodoDetailReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
