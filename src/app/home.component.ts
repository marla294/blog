import { Component, OnInit }	from '@angular/core';
import { Observable }			from 'rxjs/Observable';
import { Router }  				from '@angular/router';

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
	</mat-list>
	`,
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	posts$: Observable<Post[]>;

	constructor(
		private service: PostService,
		private router: Router) {}

	ngOnInit() {
		this.posts$ = this.service.getPosts();
	}

	goToPost(post: Post) {
		this.router.navigate(['/post', post.id]);
	}
}