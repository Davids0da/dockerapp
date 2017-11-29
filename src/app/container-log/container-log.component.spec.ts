import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLogComponent } from './container-log.component';

describe('ContainerLogComponent', () => {
  let component: ContainerLogComponent;
  let fixture: ComponentFixture<ContainerLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
