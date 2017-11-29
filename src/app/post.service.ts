import { Injectable }		from '@angular/core';
import { HttpClient }		from '@angular/common/http';
import { Observable }		from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Post }				from './post';

/* The following class and interface tell what to expect from the JSON response data */
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

	sortPosts(sortBy: string): Observable<Post[]> {
		switch(sortBy) {
			case 'idAsc': // 1->3
				return this.getPosts()
						.map(posts => posts
						.sort((a, b) => +a.id - +b.id));
				break;
			case 'idDesc': //3->1
				return this.getPosts()
						.map(posts => posts
						.sort((a, b) => +b.id - +a.id));
				break;
			case 'dateAsc': //earlier->later
				return this.getPosts()
						.map(posts => posts
						.sort((a, b) => +a.date - +b.date));
				break;
			case 'dateDesc': //later->earlier
				return this.getPosts()
						.map(posts => posts
						.sort((a, b) => +b.date - +a.date));
				break;
			default:
				return this.getPosts();
		}
	}
}