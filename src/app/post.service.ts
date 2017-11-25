import { Injectable }		from '@angular/core';
import { Observable }		from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Post }				from './post';

const POSTS = [
			new Post('3', 'I made a turkey', new Date(2017, 10, 23), './11.23.2017 - I made a turkey.html'),
			new Post('2', 'I made the router animations work', new Date(2017, 10, 21), './11.21.2017 - I made the router animations work.html'),
			new Post('1', 'I started a blog', new Date(2017, 10, 20), './11.20.2017 - I started a blog.html')
		];

@Injectable()
export class PostService {
	getPosts() {
		return Observable.of(POSTS);
	}

	getPost(id: string) {
		return this.getPosts()
			.map(posts => posts.find(post => post.id === id));
	}
}