import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseUs } from 'src/app/models/chooseUs';

@Component({
  selector: 'app-choose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {
  @Input() choose!: ChooseUs;
}
