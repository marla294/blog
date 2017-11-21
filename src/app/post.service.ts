import { Injectable }		from '@angular/core';

import { Post }				from './post';

@Injectable()
export class PostService {
	getPosts() {
		return [
			new Post('I made a turkey', new Date(2017, 10, 23), './11.23.2017 - I made a turkey.html'),
			new Post('I made the router animations work', new Date(2017, 10, 21), './11.21.2017 - I made the router animations work.html'),
			new Post('I started a blog', new Date(2017, 10, 20), './11.20.2017 - I started a blog.html')
		];
	}
}