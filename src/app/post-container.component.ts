import { Component, Input, ViewChild, ComponentFactoryResolver, AfterViewInit }	from '@angular/core';

import { Post }				from './post';
import { PostDirective }	from './post.directive';
import { PostComponent }	from './post.component';

@Component({
	selector: 'post-container',
	template: '<ng-template post-host></ng-template>'
})
export class PostContainerComponent implements AfterViewInit {
	//@Input() post: Post;
	post = new Post('This is a brand new post', new Date(2017, 10, 23), './11.29.2017 - Brand new.html');
	@ViewChild(PostDirective) postHost: PostDirective;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

	ngAfterViewInit(): any {
		setTimeout(() => {this.loadComponent(), 1};
	}

	loadComponent() {
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(PostComponent);

		let viewContainerRef = this.postHost.viewContainerRef;
		viewContainerRef.clear();

		let componentRef = viewContainerRef.createComponent(componentFactory);
		(componentRef.instance).post = this.post;
	}
}