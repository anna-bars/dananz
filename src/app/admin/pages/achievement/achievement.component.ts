import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcFormComponent } from '../../components/ac-form/ac-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ChooseFormComponent } from '../../components/choose-form/choose-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChooseUs } from 'src/app/models/chooseUs';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [CommonModule, AcFormComponent, MatTableModule ,MatSortModule,
    MatButtonModule, MatIconModule, ChooseFormComponent, TableComponent],
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
  array!: ChooseUs[];
  showForm: boolean = false;
  displayedColumns: string[] = ['id', 'title', 'text', 'img', 'edit', 'delete'];
  elem!: ChooseUs;
  value: boolean = false;

  constructor(private req: RequestService){}

  ngOnInit(){
    this.req.getData<ChooseUs[]>(environment.achievement.get).subscribe((res) => {
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
      this.req.deleteData(environment.achievement.get + '/' + id).subscribe();
      location.reload()
    }
  }
}
