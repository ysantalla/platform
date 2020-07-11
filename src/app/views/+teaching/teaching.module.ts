import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { UndergraduateComponent } from './undergraduate/undergraduate.component';
import { PostgraduateComponent } from './postgraduate/postgraduate.component';
import { EnrollmentSvgComponent } from './enrollment-svg/enrollment-svg.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {title: 'teaching'}
  },
  {
    path: 'enrollment',
    component: EnrollmentComponent,
    data: {title: 'enrollment'}
  },
  {
    path: 'undergraduate',
    component: UndergraduateComponent,
    data: {title: 'undergraduate'}
  },
  {
    path: 'postgraduate',
    component: PostgraduateComponent,
    data: {title: 'postgraduate'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, EnrollmentComponent, UndergraduateComponent, PostgraduateComponent, EnrollmentSvgComponent]
})
export class TeachingModule { }
