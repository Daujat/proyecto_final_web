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

  // Método para obtener testimonios desde Firebase Realtime Database
  getTestimonials(): Observable<Testimonial[]> {
    const testimonialsRef = ref(this.db, 'testimonials'); // Crea una referencia a la ubicación 'testimonials' en la base de datos

    // Retorna un observable que emite una lista de testimonios
    return new Observable<Testimonial[]>(observer => {
      get(testimonialsRef).then(snapshot => {
        const testimonials: Testimonial[] = [];

        snapshot.forEach(childSnapshot => { // Obtiene los datos de la referencia
          testimonials.push(childSnapshot.val() as Testimonial); // Inicializa un arreglo para almacenar los testimonios
        }); //Una snapshot es una representación de los datos,  contiene una copia de los datos en la ubicación de la base de datos 

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
