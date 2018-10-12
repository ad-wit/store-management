import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersShellComponent } from './view-users-shell.component';

describe('ViewUsersShellComponent', () => {
  let component: ViewUsersShellComponent;
  let fixture: ComponentFixture<ViewUsersShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsersShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
