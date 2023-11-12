import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from 'src/app/models/header';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { HeaderContComponent } from 'src/app/components/header-cont/header-cont.component';
import { AuthorComponent } from 'src/app/components/author/author.component';
import { Author } from 'src/app/models/author';
import { Choose, ChooseUs } from 'src/app/models/chooseUs';
import { ChooseComponent } from 'src/app/components/choose/choose.component';
import { ServiiceComponent } from 'src/app/components/serviice/serviice.component';

@Component({
  selector: 'app-our-teams',
  standalone: true,
  imports: [CommonModule, HeaderContComponent, AuthorComponent, ChooseComponent, ServiiceComponent],
  templateUrl: './our-teams.component.html',
  styleUrls: ['./our-teams.component.css']
})
export class OurTeamsComponent implements OnInit {
  dataHeader !: Header;
  authorData !: Author[];
  authorData2 !: Author[];
  chooseData!: Choose;
  chooseUsData!: ChooseUs[];
  constructor(private req: RequestService){}
  
  ngOnInit(): void {
    this.req.getData<Header[]>(environment.header.get).subscribe((res)=> {
      this.dataHeader = res[2];
    })
    this.req.getData<Author[]>(environment.author.get).subscribe((res)=> {
      this.authorData = res.slice(0, 4);
      this.authorData2 = res.slice(4, 8);
    })
    this.req.getData<Choose[]>(environment.choose.get).subscribe((res)=> {
      this.chooseData = res[0];
    })
    this.req.getData<ChooseUs[]>(environment.chooseUs.get).subscribe((res)=> {
      this.chooseUsData = res;
    })
  }
}
