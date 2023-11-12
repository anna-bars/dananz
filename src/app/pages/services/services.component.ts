import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from 'src/app/components/service/service.component';
import { RequestService } from 'src/app/services/request.service';
import { Service } from 'src/app/models/service';
import { environment } from 'src/environments/environment.prod';
import { ProductTheme } from 'src/app/models/productTheme';
import { ProductThemeComponent } from 'src/app/components/product-theme/product-theme.component';
import { Header } from 'src/app/models/header';
import { HeaderContComponent } from 'src/app/components/header-cont/header-cont.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceComponent, ProductThemeComponent, HeaderContComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  serviceData!: Service[];
  themeData!: ProductTheme[];
  dataHeader !: Header;
  
  constructor(private req: RequestService){}
  ngOnInit() {
    this.req.getData<Service[]>(environment.achievement.get).subscribe((res)=> {
      this.serviceData = res;
    })
    this.req.getData<ProductTheme[]>(environment.productTheme.get).subscribe((res)=> {
      this.themeData = res;
    })
    this.req.getData<Header[]>(environment.header.get).subscribe((res)=> {
      this.dataHeader = res[1];
    })
  }

}
