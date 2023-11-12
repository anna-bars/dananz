import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { Contact } from 'src/app/models/contact';
import { environment } from 'src/environments/environment.prod';
import { ILocation } from 'src/app/models/location';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css', './contact-us-res.css']
})
export class ContactUsComponent implements OnInit{
  contactId: number = 1;
  showCont: boolean = false;
  locationData1 !: ILocation[];
  locationData2 !: ILocation[];
  locationData3 !: ILocation[];
  contactData: Contact = {
    f_name: '',
    l_name: '',
    email: '',
    tel: '',
    message: '',
    id: 0,
    telTtpe: '',
  } 
  form: FormGroup = this.fb.group({
    f_name: ['', Validators.required],
    l_name: ['', Validators.required],
    email: ['', Validators.required],
    tel: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(13)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(4000)]],
  });

  constructor(public fb: FormBuilder,
    private req: RequestService) {}
  
  ngOnInit(): void {
    this.req.getData<ILocation[]>(environment.location.get).subscribe((res)=>{
      this.locationData1 = res.slice(0, 2);
      this.locationData2 = res.slice(2, 4);
  
      if(res.length > 4){
        this.showCont = true;
        this.locationData3 = res.slice(4);
      }
      
    })
  }
  id: any;
  sendMessage(phoneSelect: HTMLSelectElement){
    this.contactData.f_name = this.form.get('f_name')?.value;
    this.contactData.l_name = this.form.get('l_name')?.value;
    this.contactData.email = this.form.get('email')?.value;
    this.contactData.tel = this.form.get('tel')?.value;
    this.contactData.message = this.form.get('message')?.value;
    this.contactData.id = this.contactId;
    this.contactData.telTtpe = phoneSelect.value;

    this.req.getData<Contact[]>(environment.contact.get).subscribe((res) => {
      console.log('RES');
      console.log(res);
      
      if (res.length > 0) {
        this.contactData.id = res.length + 1;
      }
    }); 
    console.log(this.contactData);
    
    this.req.postContact(environment.contact.get, this.contactData).subscribe();
  }
}
