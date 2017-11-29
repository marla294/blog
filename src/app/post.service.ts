import { Injectable }		from '@angular/core';
import { HttpClient }		from '@angular/common/http';
import { Observable }		from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Post }				from './post';

/* The following class and interface need to be around to tell what to expect from the JSON response data */
class PostJSON {
	constructor(public id: string, public title: string, public date: string) {}
}
interface PostJSONResponse {
	posts: PostJSON[];
}

/* Please only return Observables from functions in this class */
@Injectable()
export class PostService {
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