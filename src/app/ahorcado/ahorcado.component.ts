import { Component, OnInit } from '@angular/core';
import { BackService, Response } from 'src/app/ahorcado/services/back.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  juego: Response;
  nombre: string;

  letras = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', ],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', ],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ],
  ];

  constructor( private backService: BackService) { }

  ngOnInit(): void {

  }

  iniciarPartida(): void {
    this.backService.iniciar(this.nombre)
      .subscribe(res => {console.log(res); this.juego = res; });
  }

  enviarLetra(letra): void {
    this.backService.enviarLetra(letra)
      .subscribe(res => this.juego = res);
  }

}
