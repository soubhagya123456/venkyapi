import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledataComponent } from './filedata.component';

describe('FiledataComponent', () => {
  let component: FiledataComponent;
  let fixture: ComponentFixture<FiledataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiledataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
