import { NgModule } from '@angular/core';
import { MatTabsModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule
  ],
  exports: [MatTabsModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule]
})
export class MaterialDesignModule { }