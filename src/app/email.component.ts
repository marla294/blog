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
	dataPost = { data: "hola" };
	body = 'data='+ JSON.stringify(this.dataPost);

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

	onDataLoad() {
		this.http.get('http://localhost:7000')
				.subscribe(res => console.log(res));
	}

	onDataSet() {
		this.http.post('http://localhost:7000', this.body, {headers: this.headers})
				.subscribe(res => console.log(res));
	}

}