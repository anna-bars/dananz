import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @Input() data!: Service;
}
 