import { Component, OnInit } 						from '@angular/core';
import { NgSwitch, NgSwitchCase }					from '@angular/common';
import { Router, ActivatedRoute, ParamMap }			from '@angular/router';
import { Observable }								from 'rxjs/Observable';
import { trigger, style, animate, transition }		from '@angular/animations';

import { PostService }								from './post.service';
import { Post }										from './post';
import { PostNavComponent }							from './post-nav.component';

@Component({
	selector: 'post-component',
	templateUrl: 'post.component.html',
	styleUrls: ['./post.component.css'],
	animations: [
  	trigger('postChangeAnimation', [
  		transition('* <=> *', [
  			style({opacity: 0}), animate(500)
  		])
  	])
  	]
})
export class PostComponent implements OnInit {
	post$: Observable<Post>;
	posts$: Observable<Post[]>;
	postsLength: number;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private service: PostService
	) {}

	ngOnInit() {
		/* Get the Observables from the service */
		this.posts$ = this.service.posts;
		this.post$ = this.service.currentPost;

		/* Get the id of the current post and load data */
		this.route.paramMap
			.subscribe((params: ParamMap) => {
				this.service.loadAll(params.get('id'));
			});

		/* Subscribe to the posts$ and post$ Observables */
		this.posts$.subscribe(posts => {
			this.postsLength = posts.length;
		});
	}
}