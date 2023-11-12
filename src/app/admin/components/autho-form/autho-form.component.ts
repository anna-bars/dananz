import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.prod';
import { Author } from 'src/app/models/author';
import { RequestService } from 'src/app/services/request.service';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ThisReceiver } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-autho-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './autho-form.component.html',
  styleUrls: ['./autho-form.component.css']
})
export class AuthoFormComponent implements OnDestroy{
  @Output() sendShow = new EventEmitter<boolean>;
  @Input() data !: Author;
  @Input() sendingData: boolean = false;

  imgSrc!: string;

  close() {
    console.log('Before closing:', this.form3.value);
    this.form3.setValue({
      'name': "875",
      'text': "5686"
    });
    console.log('After closing:', this.form3.value);
    this.sendShow.emit(false);
  }
  authorData: Author = {
    img: '',
    name: '',
    text: '',
    id: 0
  };
  constructor(public req: RequestService,
    public fbg: FormBuilder){}
    ngOnDestroy(): void {
      this.form3.setValue({
        'name': "875",
        'text': "5686"
      });
    }
    
  form3: FormGroup = this.fbg.group({
    name: ["", Validators.required],
    text: ["", Validators.required],
  });
  ngOnInit() {
    if(this.sendingData){
      this.form3.setValue({
        'name': "875",
        'text': "5686"
      });
    } else {
      this.imgSrc = this.data.img;
      this.form3.setValue({
        name: this.data?.name,
        text: this.data?.text
      })
    }
  }
  create(name: HTMLInputElement, prof: HTMLInputElement){
    this.authorData.img = '';
    this.authorData.name = name.value;
    this.authorData.text = prof.value;
    console.log(this.authorData);
    console.log('CREATE');
    this.req.post<Author>(environment.author.get, this.authorData).subscribe((res) => {
      console.log(res);
      
    })
    location.reload();
    
  }
  saveChanges(name: HTMLInputElement, prof: HTMLInputElement) {
    this.authorData.img = this.data.img;
    this.authorData.name = name.value;
    this.authorData.text = prof.value;
    console.log(this.authorData);
    this.req.putData(environment.author.get + '/' + this.data.id, this.authorData).subscribe();
    location.reload()
  }

}
