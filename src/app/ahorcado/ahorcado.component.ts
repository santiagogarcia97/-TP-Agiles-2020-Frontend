import { Component, OnInit } from '@angular/core';
import { BackService, Response } from 'src/app/ahorcado/services/back.service';

interface Tecla {
  letra: string;
  disabled: boolean;
}

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  ranking = [];
  juego: Response;
  nombre: string;
  dificultad = '';
  loading: boolean;

  teclado: Tecla[][];

  letrasQwerty = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', ],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', ],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ],
  ];

  constructor( private backService: BackService) { }

  ngOnInit(): void {
    this.backService.backendTest()
      .subscribe(res => console.log('Mensaje backend: ' + res.message));

    this.teclado = [];
    this.letrasQwerty.forEach( row => {
      this.teclado.push(row.map(letra => ({letra, disabled: false}) ));
    });

  }

  iniciarPartida(): void {
    this.loading = true;

    this.backService.iniciar(this.nombre, this.dificultad)
      .subscribe( res => {
        this.juego = res;
        this.loading = false;
    });
  }

  enviarLetra(tecla: Tecla): void {
    tecla.disabled = true;
    this.backService.enviarLetra(tecla.letra)
      .subscribe(res => {
        this.juego = res;
        if (!this.juego.letrasArriesgadas.includes(tecla.letra)) { tecla.disabled = false; }
      });
  }

  verRanking(): void {
    this.backService.verRanking()
      .subscribe(res => {
        console.log(res)
      });
  }



}
