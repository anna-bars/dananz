import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

export interface Mail {
  id: number,
  mail: string
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  id!: number;
  mailData: Mail = {
    id: 0,
    mail: ''
  };
  constructor(private req: RequestService){}

  sendMail(e: any){
    console.log(e);
    console.log(typeof e);
    this.req.getData<Mail[]>(environment.mail.get).subscribe((res)=> {
      if(res.length == 0){
        this.id = 0;
        return;
      } 
      this.id = ++res.length
    })
    this.mailData.id = this.id;
    this.mailData.mail = e;
    this.req.post<Mail>(environment.mail.get, this.mailData).subscribe((res)=> {
      console.log(res);
      console.log("Action have succesfully done");
      
      
    })
  }
}
