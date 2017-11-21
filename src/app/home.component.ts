import { Component, OnInit }	from '@angular/core';

import { PostService }			from './post.service';
import { Post }					from './post';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	posts: Post[];

	constructor(private postService: PostService) {}

	ngOnInit() {
		this.posts = this.postService.getPosts();
	}
}