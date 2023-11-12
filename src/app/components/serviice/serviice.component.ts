import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Choose, ChooseUs } from 'src/app/models/chooseUs';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-serviice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serviice.component.html',
  styleUrls: ['./serviice.component.css', '../../pages/about/about-res.css']
})
export class ServiiceComponent implements OnInit {
  chooseData!: Choose;
  chooseUsData!: ChooseUs[];

  constructor(private req: RequestService){}

  ngOnInit(): void {
    this.req.getData<Choose[]>(environment.choose.get).subscribe((res)=> {
      this.chooseData = res[0];
    })
    this.req.getData<ChooseUs[]>(environment.chooseUs.get).subscribe((res)=> {
      this.chooseUsData = res;
    })
  }
}
 