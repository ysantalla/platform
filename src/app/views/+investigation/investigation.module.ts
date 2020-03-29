import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { ScientificCouncilComponent } from './scientific-council/scientific-council.component';
import { LinesInvestigationComponent } from './lines-investigation/lines-investigation.component';
import { InvestigationGroupsComponent } from './investigation-groups/investigation-groups.component';
import { StudyCenterComponent } from './study-center/study-center.component';
import { PublicationsComponent } from './publications/publications.component';


const routes: Routes = [
  {
    path: 'scientificcouncil',
    component: ScientificCouncilComponent,
    data: {title: 'scientificcouncil'}
  },
  {
    path: 'lines',
    component: LinesInvestigationComponent,
    data: {title: 'linesinvestigation'}
  },
  {
    path: 'groups',
    component: InvestigationGroupsComponent,
    data: {title: 'investigationgroups'}
  },
  {
    path: 'studycenter',
    component: StudyCenterComponent,
    data: {title: 'studycenter'}
  },
  {
    path: 'publications',
    component: PublicationsComponent,
    data: {title: 'publications'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScientificCouncilComponent, LinesInvestigationComponent, InvestigationGroupsComponent, StudyCenterComponent, PublicationsComponent]
})
export class InvestigationModule { }
