import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent
    ],
  exports: [ MainComponent ]
})
export class MainModule {}
