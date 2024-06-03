import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ProComponent } from './pro/pro.component';
import { IndepComponent } from './indep/indep.component';
import { HeaderComponent } from './components/header/header.component';
import { RecoverPwdComponent } from './components/recover-pwd/recover-pwd.component';
import { DashboardIndepInstaComponent } from './dashboards/dashboard-indep-insta/dashboard-indep-insta.component';
import { DashInstaComponent } from './dash-insta/dash-insta.component';
import { DashboardInstaComponent } from './dashboard-insta/dashboard-insta.component';
import { DashboardProInstaComponent } from './dashboards/dashboard-pro-insta/dashboard-pro-insta.component';
import { DashIndepFbComponent } from './dashboards/dash-indep-fb/dash-indep-fb.component';
import { DashProFbComponent } from './dashboards/dash-pro-fb/dash-pro-fb.component';
import { UrlInstaIndepComponent } from './urls/url-insta-indep/url-insta-indep.component';
import { UrlInstaProComponent } from './urls/url-insta-pro/url-insta-pro.component';
import { UrlFbIndepComponent } from './urls/url-fb-indep/url-fb-indep.component';
import { UrlFbProComponent } from './urls/url-fb-pro/url-fb-pro.component';
import { UrlLinkIndepComponent } from './urls/url-link-indep/url-link-indep.component';
import { UrlLinkProComponent } from './urls/url-link-pro/url-link-pro.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { StatAdminComponent } from './stat-admin/stat-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "home", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "create-user", component: CreateUserComponent },
  { path: "user-list", component: UserListComponent },
  {path: "user-details/:userid", component: UserDetailsComponent},
  {path: 'update-user/:userid', component: UpdateUserComponent},
  { path: "pro", component: ProComponent },
  { path: "indep", component: IndepComponent },
  { path: "dashboard-admin", component:  DashboardAdminComponent},
  { path: "header", component: HeaderComponent },
  { path: "recover-pwd", component:   RecoverPwdComponent },
  { path: "dash-indep-insta", component: DashboardIndepInstaComponent },
  { path: "dash-insta", component:DashInstaComponent  },
  { path: "dashboard-insta", component: DashboardInstaComponent },
  { path: "dash-pro-insta", component: DashboardProInstaComponent },
  { path: "dash-indep-fb", component:DashIndepFbComponent  },
  { path: "dash-pro-fb", component:DashProFbComponent },
  { path: "url-insta-indep", component:UrlInstaIndepComponent },
  { path: "url-insta-pro", component: UrlInstaProComponent},
  { path: "url-fb-indep", component:  UrlFbIndepComponent},
  { path: "url-fb-pro", component:UrlFbProComponent },
  { path: "url-link-indep", component:UrlLinkIndepComponent },
  { path: "url-link-pro", component:UrlLinkProComponent },
  { path: "reset-password", component:ResetPasswordComponent },
  { path: "stat-admin", component:StatAdminComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
