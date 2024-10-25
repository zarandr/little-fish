import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {

}
