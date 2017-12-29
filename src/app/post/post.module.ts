import { NgModule }					  from '@angular/core';
import { CommonModule } 			  from '@angular/common';
import { AppRoutingModule }           from '../app-routing.module';

import { PostComponent }              from './post.component';
import { PostNavComponent }           from './post-nav.component';

@NgModule({
	imports: [
		CommonModule,
		AppRoutingModule
	],
	declarations: [
		PostComponent,
		PostNavComponent
	]
})
export class PostModule {}