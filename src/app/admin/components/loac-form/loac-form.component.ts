import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILocation } from 'src/app/models/location';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-loac-form',
  standalone: true,
  imports: [CommonModule,MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './loac-form.component.html',
  styleUrls: ['./loac-form.component.css']
})
export class LoacFormComponent {
  @Output() sendShow = new EventEmitter<boolean>;
  @Input() data !: ILocation;
  @Input() sendingData: boolean = false;

  close(){
    this.sendShow.emit(false);
    this.sendingData = false;
  }
  authorData: ILocation = {
    name: '',
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
      this.form3.setValue({
        name: this.data?.name,
        text: this.data?.text
      })
    } 
    
  }
  create(name: HTMLInputElement, prof: HTMLTextAreaElement){
    this.authorData.name = name.value;
    this.authorData.text = prof.value;
    console.log(this.authorData);
    console.log('CREATE');
    this.req.post<ILocation>(environment.location.get, this.authorData).subscribe((res) => {
      console.log(res);
      
    })
    location.reload();
  }
  saveChanges(name: HTMLInputElement, prof: HTMLTextAreaElement) {
    this.authorData.name = name.value;
    this.authorData.text = prof.value;
    console.log(this.authorData);
    this.req.putData(environment.location.get+ '/' + this.data.id, this.authorData).subscribe();
    location.reload()
  }
}
