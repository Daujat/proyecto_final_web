import { Injectable } from '@angular/core';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor(private storage: Storage) {}

  getImageUrl(path: string): Observable<string> {
    const imageRef = ref(this.storage, path);
    return new Observable<string>((observer) => {
      getDownloadURL(imageRef)
        .then(url => observer.next(url))
        .catch(error => observer.error(error));
    });
  }
}
