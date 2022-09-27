import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaSectionComponent } from './ca-section.component';

describe('CaSectionComponent', () => {
  let component: CaSectionComponent;
  let fixture: ComponentFixture<CaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
