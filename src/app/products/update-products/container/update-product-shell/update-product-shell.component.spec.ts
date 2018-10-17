import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductShellComponent } from './update-product-shell.component';

describe('UpdateProductShellComponent', () => {
  let component: UpdateProductShellComponent;
  let fixture: ComponentFixture<UpdateProductShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
