import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInformComponent } from 'src/app/components/company-inform/company-inform.component';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { HeaderContComponent } from 'src/app/components/header-cont/header-cont.component';
import { Header } from 'src/app/models/header';
import { ServiiceComponent } from 'src/app/components/serviice/serviice.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CompanyInformComponent,  HeaderContComponent, ServiiceComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css',  './about-res.css']
})
export class AboutComponent implements OnInit{
  dataHeader !: Header;
  constructor(private req: RequestService){}
  ngOnInit(): void {
    this.req.getData<Header[]>(environment.header.get).subscribe((res)=> {
      this.dataHeader = res[0];
    })
  }
}
