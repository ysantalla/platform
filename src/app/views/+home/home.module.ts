import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { NewsComponent } from './components/news/news.component';
import { InterestComponent } from './components/interest/interest.component';
import { HomeGuard } from '@app/core/guards/home.guard';
import { EventsComponent } from './components/events/events.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [HomeGuard],
    data: {title: 'home'}
  },
  {
    path: 'index',
    component: IndexComponent,
    data: {title: 'home'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, NewsComponent, InterestComponent, EventsComponent]
})
export class HomeModule { }
