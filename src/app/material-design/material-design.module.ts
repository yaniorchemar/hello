import { NgModule } from '@angular/core';
import { MatTabsModule,MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule
  ],
  exports: [MatTabsModule,MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule]
})
export class MaterialDesignModule { }