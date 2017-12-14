import { NgModule }			from '@angular/core';
import { CommonModule }		from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';


import { HeaderComponent }	from './header.component';
import { FooterComponent }	from './footer.component';

@NgModule({
	imports: [
		CommonModule,
		AppRoutingModule
	],
	declarations: [
		HeaderComponent,
		FooterComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent
	]
})
export class CoreModule {}