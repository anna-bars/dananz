import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { ProductTheme } from 'src/app/models/productTheme';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule,MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Output() sendShow = new EventEmitter<boolean>;
  @Input() data !: ProductTheme;
  @Input() sendingData: boolean = false;

  
  close(){
    this.sendShow.emit(false);
    this.sendingData = false;
  }
  authorData: ProductTheme = {
    arrow: '/assets/img/home/arrow-right.png',
    title: '',
    description: '',
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
        name: this.data?.title,
        text: this.data?.description
      })
    } 
    
  }
  create(name: HTMLInputElement, prof: HTMLTextAreaElement){
    this.authorData.title = name.value;
    this.authorData.description = prof.value;
    console.log(this.authorData);
    console.log('CREATE');
    this.req.post<ProductTheme>(environment.productTheme.get, this.authorData).subscribe((res) => {
      console.log(res);
      
    })
    location.reload();
  }
  saveChanges(name: HTMLInputElement, prof: HTMLTextAreaElement) {
    this.authorData.title = name.value;
    this.authorData.description = prof.value;
    console.log(this.authorData);
    this.req.putData(environment.productTheme.get+ '/' + this.data.id, this.authorData).subscribe();
    location.reload()
  }
}
