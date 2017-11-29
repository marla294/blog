import { Injectable }		from '@angular/core';
import { Observable }		from 'rxjs/Observable';
import { HttpClient }		from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Post }				from './post';

class PostJSON {
	constructor(public id: string, public title: string, public date: string) {}
}

interface PostJSONResponse {
	posts: PostJSON[];
}

@Injectable()
export class PostService {
	POSTS: Post[] = [];
	constructor(private http: HttpClient) {}

	getPosts(): Observable<Post[]> {
		return this.http.get<PostJSONResponse>('./assets/data/api/posts.json')
						.map(res => res.posts
						.map(post => new Post(post.id, post.title, post.date)));
	}

	getPost(id: string): Observable<Post> {
		return this.getPosts()
						.map(posts => posts
						.find(post => post.id === id));
	}
}