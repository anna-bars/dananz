import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseUs } from 'src/app/models/chooseUs';
import { environment } from 'src/environments/environment.prod';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ac-form',
  standalone: true,
  imports: [CommonModule,MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './ac-form.component.html',
  styleUrls: ['./ac-form.component.css']
})
export class AcFormComponent {
  @Output() sendShow = new EventEmitter<boolean>;
  @Input() data !: ChooseUs;
  @Input() sendingData: boolean = false;

  imgSrc!: string;

  
  close(){
    this.sendShow.emit(false);
    this.sendingData = false;
  }
  authorData: ChooseUs = {
    img: '',
    title: '',
    text: '',
    id: 0
  };
  constructor  (public req: RequestService,
    public fbg: FormBuilder){}
  ngOnDestroy(): void {
    if (this.sendingData) {
      this.sendingData = false;
    } else {
      this.sendingData = true
    }
    this.form3.reset()
  }
  form3: FormGroup = this.fbg.group({
    name: ["", Validators.required],
    text: ["", Validators.required],
  });
  ngOnInit() {
    if (this.sendingData){
      this.imgSrc = this.data.img;
      this.form3.setValue({
        name: this.data?.title,
        text: this.data?.text
      })
    } 
    console.log(this.imgSrc + 'img');
    console.log(this.data);
    
    
    
  }
  create(name: HTMLInputElement, prof: HTMLTextAreaElement){
    this.authorData.img = '';
    this.authorData.title = name.value;
    this.authorData.text = prof.value;
    console.log(this.authorData);
    console.log('CREATE');
    this.req.post<ChooseUs>(environment.achievement.get, this.authorData).subscribe((res) => {
      console.log(res);
      
    })
    location.reload();
  }
  saveChanges(name: HTMLInputElement, prof: HTMLTextAreaElement) {
    this.authorData.img = this.data.img;
    this.authorData.title = name.value;
    this.authorData.text = prof.value;
    console.log(this.authorData);
    this.req.putData(environment.achievement.get+ '/' + this.data.id, this.authorData).subscribe();
    location.reload()
  }

}
