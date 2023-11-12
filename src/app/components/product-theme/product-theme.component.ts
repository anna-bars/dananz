import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTheme } from 'src/app/models/productTheme';

@Component({
  selector: 'app-product-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-theme.component.html',
  styleUrls: ['./product-theme.component.css', '../../pages/home/home-res.css']
})
export class ProductThemeComponent implements OnInit {
  @Input() themeData !: ProductTheme;

  ngOnInit(): void {
    if(this.themeData){
      if( this.themeData.id < 10){
        this.themeData.num = '0' + this.themeData.id;
        return;
      }
      this.themeData.num = `${this.themeData.id}`;
    }
  }
}
