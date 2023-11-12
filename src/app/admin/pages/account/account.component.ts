import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import {  RouterModule, Route } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule,  MatToolbarModule, MatIconModule, MatButtonModule, 
    MatSidenavModule, FormsModule, MatSelectModule, MatRadioModule,
    MatListModule, RouterModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  opened: boolean = false;
  logOut(){
    localStorage.removeItem('token');
    location.reload()
  }
}
