import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInlistComponent } from './container-inlist.component';

describe('ContainerInlistComponent', () => {
  let component: ContainerInlistComponent;
  let fixture: ComponentFixture<ContainerInlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerInlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerInlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
