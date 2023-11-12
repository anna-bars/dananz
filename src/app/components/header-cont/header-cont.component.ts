import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from 'src/app/models/header';

@Component({
  selector: 'app-header-cont',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-cont.component.html',
  styleUrls: ['./header-cont.component.css'],
})
export class HeaderContComponent {
  @Input() headerData!: Header;
}
