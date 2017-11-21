import { Directive, ViewContainerRef }		from '@angular/core';

@Directive({
	selector: '[post-host]',
})
export class PostDirective {
	constructor(public viewContainerRef: ViewContainerRef) { }
}