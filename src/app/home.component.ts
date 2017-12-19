import { Component, OnInit }	from '@angular/core';
import { Router }  				from '@angular/router';
import { Observable }			from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PostService }			from './post/post.service';
import { Post }					from './post/post';



@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	//List of posts to show on the page
	posts$: Observable<Post[]>;
	postsLength: number;
	monthYear: string[];

	//Variables for "show more" functionality
	defaultPostsPerPage: number = 10; //How many posts to show per page
	showMoreAmount: number = 10; //The amount of additional posts to show when button clicked

	constructor(
		private service: PostService,
		private router: Router
	) {}

	ngOnInit() {
		this.posts$ = this.service.getPostsWithOperators(this.defaultPostsPerPage);
		this.service.getPosts().subscribe(posts => {
			this.postsLength = posts.length;
			this.monthYear = this.getMonthYearGroups(posts);
		});
	}

	goToPost(post: Post) {
		this.router.navigate(['/post', post.id]);
	}

	showMore(currentLength: number) {
		this.posts$ = this.service.getPostsWithOperators(currentLength + this.showMoreAmount);
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