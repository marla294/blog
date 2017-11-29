import { Component, OnInit } 						from '@angular/core';
import { NgSwitch, NgSwitchCase }					from '@angular/common';
import { Router, ActivatedRoute, ParamMap }			from '@angular/router';
import { Observable }								from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { PostService }								from './post.service';
import { Post }										from './post';

@Component({
	selector: 'post-component',
	templateUrl: 'post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	post$: Observable<Post>;
	post: Post;
	postID: number;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private service: PostService
	) {}

	ngOnInit() {
		this.post$ = this.route.paramMap
			.switchMap((params: ParamMap) => 
				this.service.getPost(params.get('id'))
			);
		let subscription = this.post$.subscribe(
			value => {
				this.post = value;
				this.postID = +value.id;
			}
		);
	}
}