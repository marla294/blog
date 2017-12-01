import { NgModule } 				  from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';

import { HomeComponent }              from './home.component';
import { PostComponent }              from './post.component';

const appRoutes: Routes = [
  { path: 'home', 		component: HomeComponent, data: { state: 'home'} },
  { path: 'post/:id', 	component: PostComponent, data: { state: 'post'} },
  { path: '', 			redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}