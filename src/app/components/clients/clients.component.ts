import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})

export class ClientsComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      data => {
        this.clients = data;
      },
      error => {
        console.error('Error al obtener los clientes:', error);
      }
    );
  }
}
