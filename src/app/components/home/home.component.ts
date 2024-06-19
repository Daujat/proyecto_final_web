import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  imageUrl: string | null = null;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.getImageUrl('https://firebasestorage.googleapis.com/v0/b/laboratorio-12-web-djvp.appspot.com/o/dancer.jpg?alt=media&token=389f8eb8-eac4-4dfb-8a96-f6bd78b01f5f').subscribe(
      url => {
        this.imageUrl = url;
      },
      error => {
        console.error('Error al obtener la URL de la imagen:', error);
      }
    );
  }
}
