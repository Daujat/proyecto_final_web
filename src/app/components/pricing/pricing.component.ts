import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Pricing } from '../../models/pricing.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})

export class PricingComponent implements OnInit {
  pricingOptions: Pricing[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.databaseService.getPricing().subscribe({
      next: data => {
        this.pricingOptions = data;
      },
      error: error => {
        console.error('Error al obtener los precios:', error);
      }
    });
  }
}
