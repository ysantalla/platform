import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { BoardDirectorsComponent } from './board-directors/board-directors.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {title: 'university'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, BoardDirectorsComponent]
})
export class UniversityModule { }
