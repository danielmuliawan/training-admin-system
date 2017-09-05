import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, }    from '@angular/forms';
import { RouterModule }   from '@angular/router'; // for routing

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './home/schedule.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeriodComponent } from './period/period.component';
import { ContentPeriodComponent, DialogDataExampleDialog } from './period/content-period.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, LoginComponent, HomeComponent, ScheduleComponent, PeriodComponent, ContentPeriodComponent, DialogDataExampleDialog
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, 
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent},
        { path: 'create-period', component: PeriodComponent},
        { path: 'period', component: ContentPeriodComponent }
      ] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialog]
})
export class AppModule { }
