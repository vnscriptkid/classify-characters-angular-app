import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

const routes = [
  { path: 'chars', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':side', component: ListComponent }
  ] },
  { path: 'new', loadChildren: './create-character/create-character.module#CreateCharacterModule' },
  { path: '**', redirectTo: 'chars' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
