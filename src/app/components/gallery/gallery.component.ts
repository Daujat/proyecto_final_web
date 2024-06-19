import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent implements OnInit {
  imageUrls: string[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    const imagePaths = [
      'https://firebasestorage.googleapis.com/v0/b/laboratorio-12-web-djvp.appspot.com/o/gallery-image-1.jpg?alt=media&token=44547c2d-f511-4226-9d9d-ad74f8d525b9',
      'https://firebasestorage.googleapis.com/v0/b/laboratorio-12-web-djvp.appspot.com/o/gallery-image-2.jpg?alt=media&token=bec27dba-6038-4648-9f16-ca8bc3b4d087',
      'https://firebasestorage.googleapis.com/v0/b/laboratorio-12-web-djvp.appspot.com/o/gallery-image-3.jpg?alt=media&token=69235348-6dd3-41c8-960f-ff5bb3384825',
      'https://firebasestorage.googleapis.com/v0/b/laboratorio-12-web-djvp.appspot.com/o/gallery-image-4.jpg?alt=media&token=aed6af1e-02d3-4b72-bbe8-8e0ef2923f64',
      'https://firebasestorage.googleapis.com/v0/b/laboratorio-12-web-djvp.appspot.com/o/gallery-image-5.jpg?alt=media&token=0094a028-13c5-423a-91fe-2d53d4510bf7',
      'https://firebasestorage.googleapis.com/v0/b/laboratorio-12-web-djvp.appspot.com/o/gallery-image-6.jpg?alt=media&token=fafa6b9a-30c1-47e6-a82e-3dc7e7675994'
    ];

    imagePaths.forEach((path, index) => {
      this.storageService.getImageUrl(path).subscribe(
        url => {
          this.imageUrls[index] = url;
        },
        error => {
          console.error('Error al obtener la URL de la imagen:', error);
        }
      );
    });
  }
}
