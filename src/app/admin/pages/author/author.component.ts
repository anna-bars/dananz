import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Author } from 'src/app/models/author';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthoFormComponent } from '../../components/autho-form/autho-form.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule, MatTableModule ,MatSortModule,
    MatButtonModule, MatIconModule, AuthoFormComponent],
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  array!: Author[];
  showForm: boolean = false;
  displayedColumns: string[] = ['id', 'name', 'text', 'img', 'edit', 'delete'];
  elem!: Author;
  value: boolean = false;

  constructor(private req: RequestService){}

  ngOnInit(){
    this.req.getData<Author[]>(environment.author.get).subscribe((res) => {
      this.array = res
      
    })
  }
  editElement(elemm: Author){
    this.value = false;
     this.elem = elemm;
    this.showForm = true;
  }
  closeForm(value: boolean){
    this.showForm = value;
  }
  add(){
    this.showForm = true;
    this.value = true;
  }
  vallue: any;
  delete(id: number){
    this.vallue = confirm("Do you want really to delete it?");
    if(this.vallue){
      this.req.deleteData(environment.author.get + '/' + id).subscribe();
      location.reload()
    }
  }
}
