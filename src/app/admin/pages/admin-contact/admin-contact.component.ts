import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChooseFormComponent } from '../../components/choose-form/choose-form.component';
import { Contact } from 'src/app/models/contact';
import { environment } from 'src/environments/environment.prod';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-admin-contact',
  standalone: true,
  imports: [CommonModule, MatTableModule ,MatSortModule,
    MatButtonModule, MatIconModule, ChooseFormComponent],
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent {
  array!: Contact[];
  showForm: boolean = false;
  displayedColumns: string[] = ['id', 'f_name', 'l_name', 'email', 'telTtpe','tel', 'message', 'delete'];
  elem!: Contact;
  value: boolean = false;

  constructor(private req: RequestService){}

  ngOnInit(){
    this.req.getData<Contact[]>(environment.contact.get).subscribe((res) => {
      this.array = res
      
    })
  }
  editElement(elemm: Contact){
     this.elem = elemm;
    this.showForm = true;
    this.value =  true;
    
  }
  closeForm(value: boolean){
    this.showForm = value;
  }
  add(){
    this.showForm = true;
    this.value = false;
  }
  vallue: any;
  delete(id: number){
    this.vallue = confirm("Do you want really to delete it?");
    if(this.vallue){
      this.req.deleteData(environment.contact.get + '/' + id).subscribe();
      location.reload()
    }
  }
}
