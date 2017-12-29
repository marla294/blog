import { Component, OnInit }	from '@angular/core';
import { Router }  				from '@angular/router';
import { Observable }			from 'rxjs/Observable';

import { PostService }			from './post/post.service';
import { MonthYearService }     from './shared/month-year.service';
import { Post }					from './post/post';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	posts$: Observable<Post[]>;

	constructor(
		private service: PostService,
		public myService: MonthYearService,
		private router: Router
	) {}

	ngOnInit() {
		this.posts$ = this.service.posts;
		this.service.loadAll();
		this.posts$.subscribe(posts => {
			this.myService.getMonthYearGroups(posts);
		});
	}

	goToPost(post: Post) {
		this.router.navigate(['/post', post.id]);
	}
}