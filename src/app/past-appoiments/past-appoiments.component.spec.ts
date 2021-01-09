import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastAppoimentsComponent } from './past-appoiments.component';

describe('PastAppoimentsComponent', () => {
  let component: PastAppoimentsComponent;
  let fixture: ComponentFixture<PastAppoimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastAppoimentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastAppoimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
