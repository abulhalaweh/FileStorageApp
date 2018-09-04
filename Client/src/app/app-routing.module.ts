import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { UserInfoComponent } from './profile/userInfo/user.info.component';
//import { UploadComponent } from './UploadFile/upload.component';
//import { UploadFileComponent } from './UploadFile/upload.file.component';
import { UsersDataComponent } from './profile/users.data/users.data.component';
import { ChangeLoginComponent } from './profile/change.login/change.login.component';
import { ChangePasswordComponent } from './profile/change.password/change.password.component';


const accountRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '/' }
  ];

const profileRoutes: Routes = [
    { path: 'info', component: UserInfoComponent },
    { path: 'data', component: UsersDataComponent },
    { path: 'changeLogin', component: ChangeLoginComponent },
    { path: 'changePassword', component: ChangePasswordComponent },
    { path: '**', redirectTo: '/' }
  ];

//const uploadRoutes: Routes = [
//  { path: 'uploadFile', component: UploadComponent },
//  { path: '**', redirectTo: '/' }
//];

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'account', children: accountRoutes },
    { path: 'profile', component: ProfileComponent, children: profileRoutes },
  //{ path: 'upload', component: ProfileComponent, children: profileRoutes },
  //{ path: 'upload', component: UploadFileComponent, children: uploadRoutes },
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
