import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ChooseFormComponent } from '../../components/choose-form/choose-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ILocation } from 'src/app/models/location';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { ChooseUs } from 'src/app/models/chooseUs';
import { LoacFormComponent } from '../../components/loac-form/loac-form.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule,  MatTableModule ,MatSortModule,
    MatButtonModule, MatIconModule, ChooseFormComponent, LoacFormComponent],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  array!: ILocation[];
  showForm: boolean = false;
  displayedColumns: string[] = ['id', 'title', 'text', 'edit', 'delete'];
  elem!: ILocation;
  value: boolean = false;

  constructor(private req: RequestService){}

  ngOnInit(){
    this.req.getData<ILocation[]>(environment.location.get).subscribe((res) => {
      this.array = res
    })
  }
  editElement(elemm: ILocation){
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
      this.req.deleteData(environment.location.get + '/' + id).subscribe();
      location.reload()
    }
  }
}
