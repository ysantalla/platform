import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ScientificCouncilComponent } from './scientific-council/scientific-council.component';
import { LinesInvestigationComponent } from './lines-investigation/lines-investigation.component';
import { InvestigationGroupsComponent } from './investigation-groups/investigation-groups.component';
import { StudyCenterComponent } from './study-center/study-center.component';
import { PublicationsComponent } from './publications/publications.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {title: 'investigation'}
  },
  {
    path: 'scientificcouncil',
    component: ScientificCouncilComponent,
    data: {title: 'investigation'}
  },
  {
    path: 'linesinvestigation',
    component: LinesInvestigationComponent,
    data: {title: 'investigation'}
  },
  {
    path: 'investigationgroups',
    component: InvestigationGroupsComponent,
    data: {title: 'investigation'}
  },
  {
    path: 'studycenter',
    component: StudyCenterComponent,
    data: {title: 'investigation'}
  },
  {
    path: 'publications',
    component: PublicationsComponent,
    data: {title: 'investigation'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, ScientificCouncilComponent, LinesInvestigationComponent, InvestigationGroupsComponent, StudyCenterComponent, PublicationsComponent]
})
export class InvestigationModule { }
