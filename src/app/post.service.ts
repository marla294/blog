import { Injectable }		from '@angular/core';
import { Observable }		from 'rxjs/Observable';
import { HttpClient }		from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Post }				from './post';

interface PostJSONResponse {
	posts: Post[];
}

@Injectable()
export class PostService {
	POSTS: Post[] = [];
	constructor(private http: HttpClient) {}

	getJSONPosts(): void {
		/* Call this to load the posts into POSTS array */
		this.http.get<PostJSONResponse>('./assets/data/api/posts.json').subscribe(data => {
			
			Object.assign(this.POSTS, data.posts.map(post => new Post(post.id, post.title, post.date.toString())))

		});
	}

	getPosts() {
		/* Call this to return an observable of the POSTS array */
		this.getJSONPosts();
		return Observable.of(this.POSTS);
	}

	getPost(id: string) {
		/* Call this to return an observable of a single post found by id */
		return Observable.of(this.POSTS.find(post => post.id === id));
	}
}