import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../models/testimonial.model';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.databaseService.getTestimonials().subscribe(
      data => {
        this.testimonials = data;
      },
      error => {
        console.error('Error al obtener testimonios:', error);
      }
    );
  }
}
