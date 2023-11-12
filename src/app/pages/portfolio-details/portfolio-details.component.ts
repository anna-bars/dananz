import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from 'src/app/models/header';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { HeaderContComponent } from 'src/app/components/header-cont/header-cont.component';

@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [CommonModule, HeaderContComponent],
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  dataHeader !: Header;

  constructor(private req: RequestService){}

  ngOnInit(): void {
    this.req.getData<Header[]>(environment.header.get).subscribe((res)=> {
      this.dataHeader = res[4];
    })
  }
}
 