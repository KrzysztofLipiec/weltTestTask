import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {AppComponent} from "./AppComponent";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('router-outlet'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have router-outlet', () => {
    fixture.detectChanges();
    const outlet = de.nativeElement;
    expect(outlet).not.toBeUndefined();
  });
});
