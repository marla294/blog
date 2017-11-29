import { Component, OnInit }	from '@angular/core';
import { Router }  				from '@angular/router';
import { Observable }			from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PostService }			from './post.service';
import { Post }					from './post';



@Component({
	selector: 'home',
	template: `
	<mat-list class="post-list">
	  <a mat-list-item *ngFor="let post of posts$ | async" (click)=goToPost(post)>
	    <h2 mat-line>{{post.title}}</h2>
	    <p mat-line><i>{{post.date | date}}</i></p>
	  </a>
	  <a mat-list-item>Show More...</a>
	</mat-list>
	`,
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	posts$: Observable<Post[]>;

	defaultPostsPerPage: number = 1; //How many posts to show per page
	showMoreAmount: number = 1; //The amount of additional posts to show when button clicked

	constructor(
		private service: PostService,
		private router: Router) {}

	ngOnInit() {
		this.posts$ = this.service.sortPosts('idDesc');
	}

	goToPost(post: Post) {
		this.router.navigate(['/post', post.id]);
	}

}