import { Component }			from '@angular/core';
import { PostService }			from '../post/post.service';
import { MonthYearService }     from '../shared/month-year.service';

/*
component Header
Header for all pages, displays logo and acts as a universal "home" button
Only located on the main app component HTML
*/
@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
	logo = './assets/images/header.png';

	constructor(
		private service: PostService,
		private myService: MonthYearService
	) {}

	/*
	fn headerClick
	When someone clicks the header, refreshes the MonthYear Groups, 
	as if they had "returned" to the home page.  Works like a "back" button.
	*/
	headerClick() {
		this.service.posts.subscribe(posts => {
			this.myService.getMonthYearGroups(posts);
		});
	}

}