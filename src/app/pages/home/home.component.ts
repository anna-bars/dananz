import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInformComponent } from 'src/app/components/company-inform/company-inform.component';
import { ProductThemeComponent } from 'src/app/components/product-theme/product-theme.component';
import { RequestService } from 'src/app/services/request.service';
import { ProductTheme } from 'src/app/models/productTheme';
import { environment } from 'src/environments/environment.prod';
import { portfolioBlock } from 'src/app/models/portfolioBlock';
import { PortfolioBlockComponent } from 'src/app/components/portfolio-block/portfolio-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CompanyInformComponent, ProductThemeComponent,
    PortfolioBlockComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-res.css']
})
export class HomeComponent implements OnInit{
  themeData!: ProductTheme[];
  aboutBlock!: portfolioBlock;

  constructor(private req: RequestService){}
  
  ngOnInit(): void {
    this.req.getData<ProductTheme[]>(environment.productTheme.get).subscribe((res)=> {
      this.themeData = res;
    })
    this.req.getData<portfolioBlock[]>(environment.aboutBlock.get).subscribe((res)=> {
      this.aboutBlock = res[0];
    })
  }
 
}
