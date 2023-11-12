import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChooseUs } from 'src/app/models/chooseUs';
import { ChooseFormComponent } from '../../components/choose-form/choose-form.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule, MatTableModule ,MatSortModule,
    MatButtonModule, MatIconModule, ChooseFormComponent],
  templateUrl: './admin-choose.component.html',
  styleUrls: ['./admin-choose.component.css']
})
export class AdminChooseComponent implements OnInit {
  array!: ChooseUs[];
  showForm: boolean = false;
  displayedColumns: string[] = ['id', 'title', 'text', 'img', 'edit', 'delete'];
  elem!: ChooseUs;
  value: boolean = false;

  constructor(private req: RequestService){}

  ngOnInit(){
    this.req.getData<ChooseUs[]>(environment.chooseUs.get).subscribe((res) => {
      this.array = res
      
    })
  }
  editElement(elemm: ChooseUs){
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
      this.req.deleteData(environment.chooseUs.get + '/' + id).subscribe();
      location.reload()
    }
  }
}
