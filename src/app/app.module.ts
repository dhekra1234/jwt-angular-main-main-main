import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AuthService } from './auth.service';
import { ProComponent } from './pro/pro.component';
import { IndepComponent } from './indep/indep.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecoverPwdComponent } from './components/recover-pwd/recover-pwd.component';
import { ScrapingService } from './scraping.service';
import { DashboardIndepInstaComponent } from './dashboards/dashboard-indep-insta/dashboard-indep-insta.component';
import { PythonresultService } from './pythonresult.service';
import { NgChartsModule } from 'ng2-charts';
import { DashInstaComponent } from './dash-insta/dash-insta.component';
import { DashboardInstaComponent } from './dashboard-insta/dashboard-insta.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardProInstaComponent } from './dashboards/dashboard-pro-insta/dashboard-pro-insta.component';
import { DashIndepFbComponent } from './dashboards/dash-indep-fb/dash-indep-fb.component';
import { DashProFbComponent } from './dashboards/dash-pro-fb/dash-pro-fb.component';
import { UrlInstaIndepComponent } from './urls/url-insta-indep/url-insta-indep.component';
import { UrlInstaProComponent } from './urls/url-insta-pro/url-insta-pro.component';
import { UrlFbIndepComponent } from './urls/url-fb-indep/url-fb-indep.component';
import { UrlFbProComponent } from './urls/url-fb-pro/url-fb-pro.component';
import { UrlLinkIndepComponent } from './urls/url-link-indep/url-link-indep.component';
import { UrlLinkProComponent } from './urls/url-link-pro/url-link-pro.component';
import { ScrapefbService } from './scrapefb.service';
import { PythonfbService } from 'src/app/pythonfb.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent,
    UserListComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UpdateUserComponent,
    DashboardAdminComponent,
    ProComponent,
    IndepComponent,
    HeaderComponent,
    RecoverPwdComponent,
    DashboardIndepInstaComponent,
    DashInstaComponent,
    DashboardInstaComponent,
    DashboardProInstaComponent,
    DashIndepFbComponent,
    DashProFbComponent,
    UrlInstaIndepComponent,
    UrlInstaProComponent,
    UrlFbIndepComponent,
    UrlFbProComponent,
    UrlLinkIndepComponent,
    UrlLinkProComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgChartsModule,
    NgApexchartsModule
  ],
  providers: [AuthService,ScrapingService,PythonresultService,ScrapefbService,PythonfbService],
  bootstrap: [AppComponent]
})
export class AppModule { }