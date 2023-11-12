import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContComponent } from 'src/app/components/header-cont/header-cont.component';
import { Header } from 'src/app/models/header';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { PortfolioBlockComponent } from 'src/app/components/portfolio-block/portfolio-block.component';
import { portfolioBlock } from 'src/app/models/portfolioBlock';
import { ServiiceComponent } from 'src/app/components/serviice/serviice.component';
 
@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [CommonModule, HeaderContComponent, PortfolioBlockComponent, ServiiceComponent],
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {
  dataHeader !: Header;
  aboutBlock!: portfolioBlock[];

  constructor(private req: RequestService){}
  ngOnInit(): void {
    this.req.getData<Header[]>(environment.header.get).subscribe((res)=> {
      this.dataHeader = res[3];
    })
    this.req.getData<portfolioBlock[]>(environment.portfolioBlock.get).subscribe((res)=>{
      this.aboutBlock = res;
    })
  }
}
