import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbgSideMenuComponent } from './sbg-side-menu.component';

describe('SbgSideMenuComponent', () => {
  let component: SbgSideMenuComponent;
  let fixture: ComponentFixture<SbgSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbgSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbgSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
