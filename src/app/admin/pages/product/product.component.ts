import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ChooseFormComponent } from '../../components/choose-form/choose-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { ProductTheme } from 'src/app/models/productTheme';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductFormComponent,  MatTableModule ,MatSortModule,
    MatButtonModule, MatIconModule, ChooseFormComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  array!: ProductTheme[];
  showForm: boolean = false;
  displayedColumns: string[] = ['id', 'title', 'text',  'edit', 'delete'];
  elem!: ProductTheme;
  value: boolean = false;

  constructor(private req: RequestService){}

  ngOnInit(){
    this.req.getData<ProductTheme[]>(environment.productTheme.get).subscribe((res) => {
      this.array = res
      
    })
  }
  editElement(elemm: ProductTheme){
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
      this.req.deleteData(environment.productTheme.get + '/' + id).subscribe();
      location.reload()
    }
  }
}
