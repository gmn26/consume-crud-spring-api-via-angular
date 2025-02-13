import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../../types/housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../../services/housing/housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
