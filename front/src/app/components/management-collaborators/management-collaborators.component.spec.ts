import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCollaboratorsComponent } from './management-collaborators.component';

describe('ManagementCollaboratorsComponent', () => {
  let component: ManagementCollaboratorsComponent;
  let fixture: ComponentFixture<ManagementCollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementCollaboratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
