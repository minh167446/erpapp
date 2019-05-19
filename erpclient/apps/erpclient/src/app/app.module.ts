import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';

import { RouteRoutingModule } from './route/route-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProfileComponent } from './profile/profile.component';
import { PostemployeeComponent } from './postemployee/postemployee.component';
import { DepartmentComponent } from './department/department.component';
import { SettingsComponent } from './settings/settings.component';
import { PostdepartmentComponent } from './postdepartment/postdepartment.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DetailemployeeComponent } from './detailemployee/detailemployee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EditdepartmentComponent } from './editdepartment/editdepartment.component';
import { Page404Component } from './page404/page404.component';
import { DeleteaempComponent } from './deleteaemp/deleteaemp.component';
import { DetailemployeecontactComponent } from './detailemployeecontact/detailemployeecontact.component';
import { DetailemployeematureComponent } from './detailemployeemature/detailemployeemature.component';
import { DetailemployeehealthyComponent } from './detailemployeehealthy/detailemployeehealthy.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { NxModule } from '@nrwl/nx';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MessageComponent,
    DashboardComponent,
    EmployeeComponent,
    ProfileComponent,
    PostemployeeComponent,
    DepartmentComponent,
    SettingsComponent,
    PostdepartmentComponent,
    EditemployeeComponent,
    DetailemployeeComponent,
    EditdepartmentComponent,
    Page404Component,
    DeleteaempComponent,
    DetailemployeecontactComponent,
    DetailemployeematureComponent,
    DetailemployeehealthyComponent,
    EmployeeloginComponent,
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NxModule.forRoot()
  ],
  entryComponents: [ DeleteaempComponent ],
  providers: [RestApiService, DataService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
