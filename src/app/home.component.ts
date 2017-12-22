import { Component, OnInit }	from '@angular/core';
import { Router }  				from '@angular/router';
import { Observable }			from 'rxjs/Observable';

import { PostService }			from './post/post.service';
import { Post }					from './post/post';



@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	posts$: Observable<Post[]>;
	monthYear: string[];

	constructor(
		private service: PostService,
		private router: Router
	) {}

	ngOnInit() {
		this.posts$ = this.service.posts;
		this.service.loadAll();
		this.posts$.subscribe(posts => {
			this.monthYear = this.getMonthYearGroups(posts);
		});
	}

	goToPost(post: Post) {
		this.router.navigate(['/post', post.id]);
	}

	getMonthYearGroups(posts: Post[]): string[] {
		let newPosts = posts.map(post => post.monthYear);
		let newArr: string[] = [];
		newPosts.map((curr) => {
			if (newArr.findIndex(d => d == curr) == -1) {
				newArr.push(curr);
			}
		});
		return newArr;
	}

}