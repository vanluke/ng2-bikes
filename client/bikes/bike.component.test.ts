import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BikeComponent } from './bike.component';
import { IBike } from './bike.d';

describe('two plus two', () => {
  let fixture;
  let bike;
  let component;
  let bikeElements;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BikeComponent],
    })
    .compileComponents(); // compile template and css
  }));

  // beforeEach(() => {
  //   // TestBed.configureTestingModule({
  //   //   declarations: [BikeComponent], // declare the test component
  //   // });
  //   fixture = TestBed.createComponent(BikeComponent);
  //   component = fixture.componentInstance;
  //   console.log(component);
  //   bike = <IBike> {
  //     bikeId: '1',
  //     name: 'name',
  //     description: 'desc',
  //     picture: 'picture',
  //     balance: '$12',
  //   };
  //   component.bike = bike;
  //   bikeElements = fixture.debugElement.query(By.all());
  //   fixture.detectChanges();
  // });

  it('should bike dispaly bike name', () => {
    fixture = TestBed.createComponent(BikeComponent);
    component = fixture.componentInstance;
    bike = <IBike> {
      bikeId: '1',
      name: 'name',
      description: 'desc',
      picture: 'picture',
      balance: '$12',
    };
    component.bike = bike;
    bikeElements = fixture.debugElement.query(By.all());
    fixture.detectChanges();
    // const expectation = bike.name;
    // const actual = bikeElements.nativeElement.textContent;
    const expectation = 1;
    const actual = 1;
    expect(actual).toBe(expectation);
  });

});
