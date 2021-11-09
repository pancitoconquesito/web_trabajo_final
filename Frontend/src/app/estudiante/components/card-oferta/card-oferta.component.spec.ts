import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfertaComponent } from './card-oferta.component';

describe('CardOfertaComponent', () => {
  let component: CardOfertaComponent;
  let fixture: ComponentFixture<CardOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
