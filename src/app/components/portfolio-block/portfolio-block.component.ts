import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioBlock } from 'src/app/models/portfolioBlock';

@Component({
  selector: 'app-portfolio-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-block.component.html',
  styleUrls: ['./portfolio-block.component.css', '../../pages/home/home.component.css',
  '../../pages/home/home-res.css']
})
export class PortfolioBlockComponent implements AfterViewInit {
  @Input() data !: portfolioBlock;
  @ViewChild('cont') elem !: ElementRef<any>;
  @ViewChild('block') elem2 !: ElementRef<any>;
  num!: number | undefined;
  aboutCont: any;

  ngAfterViewInit(): void {
    this.aboutCont = this.elem.nativeElement
    if(this.data){
      this.num = this.data?.id;
      if (this.num && this.num % 2 == 0) {
        this.aboutCont.style.flexDirection = 'row-reverse';
        this.elem2.nativeElement.style.marginRight = '8px'  
      }
    }
  }
}
