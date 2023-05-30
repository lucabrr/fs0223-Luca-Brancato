import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNonAttiviComponent } from './post-non-attivi.component';

describe('PostNonAttiviComponent', () => {
  let component: PostNonAttiviComponent;
  let fixture: ComponentFixture<PostNonAttiviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostNonAttiviComponent]
    });
    fixture = TestBed.createComponent(PostNonAttiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
