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
	POSTS2 = [];
	constructor(private http: HttpClient) {}

	getJSONPosts(): void {
		/* Call this to load the posts into POSTS2 array */
		console.log('getJSONPosts() from post service');
		this.http.get<PostJSONResponse>('./assets/data/api/posts.json').subscribe(data => {
			for (let i = 0; i < data.posts.length; i++) {
				this.POSTS2[i] = new Post(data.posts[i].id, data.posts[i].title, data.posts[i].date.toString());
			}
		});
	}

	getPosts() {
		/* Call this to return an observable of the POST2 array */
		this.getJSONPosts();
		return Observable.of(this.POSTS2);
	}

	getPost(id: string) {
		/* Call this to return an observable of a single post found by id */
		console.log('getPost(id) from post service');
		return Observable.of(this.POSTS2.find(post => post.id === id));
	}
}