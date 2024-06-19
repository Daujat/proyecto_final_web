import { Injectable } from '@angular/core';
import { Database, ref, get, child } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Testimonial } from '../models/testimonial.model';
import { Pricing } from '../models/pricing.model';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  constructor(private db: Database) {}

  getTestimonials(): Observable<Testimonial[]> {
    const testimonialsRef = ref(this.db, 'testimonials');

    return new Observable<Testimonial[]>(observer => {
      get(testimonialsRef).then(snapshot => {
        const testimonials: Testimonial[] = [];

        snapshot.forEach(childSnapshot => {
          testimonials.push(childSnapshot.val() as Testimonial);
        });

        observer.next(testimonials);

      }).catch(error => observer.error(error));

    });
  }

  getPricing(): Observable<Pricing[]> {
    const pricingRef = ref(this.db, 'pricing');

    return new Observable<Pricing[]>(observer => {
      get(pricingRef).then(snapshot => {
        const pricing: Pricing[] = [];

        snapshot.forEach(childSnapshot => {
          pricing.push(childSnapshot.val() as Pricing);
        });

        observer.next(pricing);

      }).catch(error => observer.error(error));
    });
  }
}
