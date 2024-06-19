import { Injectable } from '@angular/core';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor(private storage: Storage) {}

  getImageUrl(path: string): Observable<string> {
    // Crea una referencia al archivo en Firebase Storage
    const imageRef = ref(this.storage, path);

    // Retorna un observable que emite la URL de descarga de la imagen
    return new Observable<string>((observer) => {
      getDownloadURL(imageRef) // Obtiene la URL de descarga del archivo
        .then(url => observer.next(url))
        .catch(error => observer.error(error));
    });
  }
}
