import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbgSideMenuComponent } from './sbg-side-menu.component';
import { provideRouter } from '@angular/router';

describe('SbgSideMenuComponent', () => {
  let component: SbgSideMenuComponent;
  let fixture: ComponentFixture<SbgSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbgSideMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SbgSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSingIn when button is clicked', () => {
    spyOn(component.onSingIn, 'emit');
    fixture.componentRef.setInput('isAutheticated', false);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    button.click();

    expect(component.onSingIn.emit).toHaveBeenCalled();
  });

  it('should call onSingOut when button is clicked', () => {
    spyOn(component.onSingOut, 'emit');
    fixture.componentRef.setInput('isAutheticated', true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    button.click();

    expect(component.onSingOut.emit).toHaveBeenCalled();
  });
});
