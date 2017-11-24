import { Component, OnInit }	from '@angular/core';

import { PostService }			from './post.service';
import { Post }					from './post';

@Component({
	selector: 'home',
	template: `
	<mat-list class="post-list">
	  <a mat-list-item routerLink="/post" routerLinkActive="active" *ngFor="let post of posts">
	    <h2 mat-line>{{post.title}}</h2>
	    <p mat-line><i>{{post.date | date}}</i></p>
	  </a>
	</mat-list>
	`,
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	posts: Post[];

	constructor(private postService: PostService) {}

	ngOnInit() {
		this.posts = this.postService.getPosts();
	}
}