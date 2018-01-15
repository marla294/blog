import { Component }								from '@angular/core';
import { FormBuilder, FormGroup, Validators }		from '@angular/forms';
import { HttpClient, HttpHeaders }					from '@angular/common/http';

@Component({
	selector: 'email',
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.css']
})
export class EmailComponent {
	emailForm: FormGroup;

	headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	data: any;
	dataPost = { 
		name: "",
		email: "",
		body: ""
	};


	constructor(private fb: FormBuilder, private http: HttpClient) {
		this.createForm();
	}

	ngOnInit() {
		/*this.onDataLoad();*/
	}

	createForm() {
		this.emailForm = this.fb.group({
			senderName: ['', Validators.required],
			senderEmail: ['', Validators.email],
			messageBody: ['', Validators.minLength(1)]
		})
	}

	onSubmit() {
		console.log('Submitted');
	}

	/* PHP */

	prepDataForPost() {
		this.dataPost.name = 'name=' + JSON.stringify(this.emailForm.controls.senderName.value);
		this.dataPost.email = 'email=' + JSON.stringify(this.emailForm.controls.senderEmail.value);
		this.dataPost.body = 'body=' + JSON.stringify(this.emailForm.controls.messageBody.value);
	}


	onDataSet() {
		this.prepDataForPost();

		this.http.post('http://localhost:7000', this.dataPost.name, {headers: this.headers})
			.subscribe(res => console.log(res));
		this.http.post('http://localhost:7000', this.dataPost.email, {headers: this.headers})
			.subscribe(res => console.log(res));
		this.http.post('http://localhost:7000', this.dataPost.body, {headers: this.headers})
			.subscribe(res => console.log(res));
	}

}