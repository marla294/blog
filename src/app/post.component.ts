import { Component, Input }		from '@angular/core';
import { Post }					from './post';

@Component({
	selector: 'post-component',
	template: '{{post.html}}'
})
export class PostComponent {
	@Input() post: Post;

	//post = new Post('This is a brand new post', new Date(2017, 10, 23), './11.29.2017 - Brand new.html');
}