import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements AfterViewInit {
  @Input() data!: Author;
  @ViewChild('author') element!: ElementRef<any>

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.element.nativeElement);
    console.log(4);

    if (this.data) {
      this.element.nativeElement.style.backgroundImage = `url('${this.data.img}')`;
    }
  }
}
