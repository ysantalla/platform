import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { BoardDirectorsComponent } from './board-directors/board-directors.component';
import { UniversityComponent } from './university/university.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {title: 'university'}
  },
  {
    path: 'board-directors',
    component: BoardDirectorsComponent,
    data: {title: 'boardOfDirectors'}
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, BoardDirectorsComponent, UniversityComponent]
})
export class UniversityModule { }
