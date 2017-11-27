export class Post {
	date: Date;
	constructor(public id: string, public title: string, public dateStr: string) {
		this.date = new Date(dateStr);
	}
}