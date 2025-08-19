import { ApplicationConfig, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

export const appConfig: ApplicationConfig = {
 providers: [
    importProvidersFrom(
      RouterModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      CommonModule
    )
  ]
};
