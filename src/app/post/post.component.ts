import { Component, OnInit } 						from '@angular/core';
import { NgSwitch, NgSwitchCase }					from '@angular/common';
import { Router, ActivatedRoute, ParamMap }			from '@angular/router';
import { Observable }								from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
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
		this.posts$ = this.service.posts;
		this.service.loadAll();
		this.posts$.subscribe(posts => {
			this.postsLength = posts.length;
		});
		this.post$ = this.route.paramMap
			.switchMap((params: ParamMap) =>
				this.service.getPost(params.get('id'))
			);
		/*
		this.service.getPosts().subscribe(posts => this.postsLength = posts.length);
		*/
	}
}