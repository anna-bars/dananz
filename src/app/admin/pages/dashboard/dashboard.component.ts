import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment.prod';
import { ChooseUs } from 'src/app/models/chooseUs';
import { MatIconModule } from '@angular/material/icon';
import { ProductTheme } from 'src/app/models/productTheme';
import { Author } from 'src/app/models/author';
import { Contact } from 'src/app/models/contact';
import { ILocation } from 'src/app/models/location';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chooseNum: number = 0;
  productTheme: number = 0;
  authorNum: number = 0;
  contactNum: number = 0;
  stores: number = 0;
  constructor(private req: RequestService){}
  ngOnInit(): void {
    this.req.getData<ChooseUs[]>(environment.chooseUs.get).subscribe((res) => {
      this.chooseNum = res.length;
    })
    this.req.getData<ProductTheme[]>(environment.productTheme.get).subscribe((res) => {
      this.productTheme = res.length;
    })
    this.req.getData<Author[]>(environment.author.get).subscribe((res) => {
      this.authorNum = res.length;
    })
    this.req.getData<Contact[]>(environment.contact.get).subscribe((res) => {
      this.contactNum = res.length;
    })
    this.req.getData<ILocation[]>(environment.location.get).subscribe((res) => {
      this.stores = res.length;
    })
  }
}
