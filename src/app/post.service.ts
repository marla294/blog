import { Injectable }		from '@angular/core';
import { Observable }		from 'rxjs/Observable';
import { HttpClient }		from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Post }				from './post';

const POSTS = [
			new Post('3', 'I made a turkey', '11/23/2017'),
			new Post('2', 'I made the router animations work', '11/21/2017'),
			new Post('1', 'I started a blog', '11/20/2017')
		];

@Injectable()
export class PostService {
	constructor(private http: HttpClient) {}
	getPosts() {
		return Observable.of(POSTS);
	}

	getPost(id: string) {
		return this.getPosts()
			.map(posts => posts.find(post => post.id === id));
	}
}