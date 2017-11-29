import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, animateChild }	from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  	trigger('routerAnimation', [
  		transition('* <=> *', [
  			style({opacity: 0}), animate(500)
  		])
  	])
  ]
})
export class AppComponent {

    getRoute(outlet) {
	    return outlet.activatedRouteData.state;
	  }
}
