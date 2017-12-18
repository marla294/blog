import { Component, OnInit }	from '@angular/core';
import { Router }  				from '@angular/router';
import { Observable }			from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PostService }			from './post/post.service';
import { Post }					from './post/post';



@Component({
	selector: 'home',
	template: `
	<mat-list class="post-list container">
	  	<mat-list-item *ngFor="let post of posts$ | async">
	  		<a matLine (click)=goToPost(post)>{{post.title}}</a>
	  		<p matLine><i>{{post.date | date}}</i></p>
	  	</mat-list-item>
	  <div *ngIf="posts$ | async as posts">
	  	<a mat-list-item *ngIf="posts.length < postsLength" (click)="showMore(posts.length)">Show More...</a>
	  </div>
	</mat-list>
	`,
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	//List of posts to show on the page
	posts$: Observable<Post[]>;
	postsLength: number;

	/* -- Variables for arranging the array of posts on the home page -- */
	//Variable for sort order
	sortOrder: string = 'idDesc'; //What to sort posts by and what order

	//Variables for "show more" functionality
	defaultPostsPerPage: number = 10; //How many posts to show per page
	showMoreAmount: number = 10; //The amount of additional posts to show when button clicked
	constructor(
		private service: PostService,
		private router: Router
	) {}

	ngOnInit() {
		this.posts$ = this.service.getPostsWithOperators(this.sortOrder, this.defaultPostsPerPage);
		this.service.getPosts().subscribe(posts => this.postsLength = posts.length);
	}

	goToPost(post: Post) {
		this.router.navigate(['/post', post.id]);
	}

	showMore(currentLength: number) {
		this.posts$ = this.service.getPostsWithOperators(this.sortOrder, currentLength + this.showMoreAmount);
	}

}