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

  showModal = false;
  showRanking = false;
  loading = false;
  esperandoRespuesta = false;

  ranking = [];
  juego: Response;
  nombre: string;
  dificultad = '';

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

    this.crearTeclado();
  }

  crearTeclado(): void {
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
    if (this.juego.estadoPartida !== 'CURSO' || this.esperandoRespuesta) { return; }

    this.esperandoRespuesta = true;
    tecla.disabled = true;

    this.backService.enviarLetra(tecla.letra)
      .subscribe(res => {
        console.log(res);

        this.juego = res;
        if (!this.juego.letrasArriesgadas.includes(tecla.letra)) { tecla.disabled = false; }

        if (this.juego.estadoPartida !== 'CURSO') {
          this.finPartida();
        }
        this.esperandoRespuesta = false;
      });
  }

  verRanking(): void {
    this.ranking = [];
    this.loading = true;
    this.showRanking = true;
    this.showModal = false;

    this.backService.verRanking()
      .subscribe(res => {
        Object.keys(res).forEach(e =>
          this.ranking.push({nombre: res[e].nombre, puntaje: res[e].puntaje})
        );
        this.loading = false;
      });
  }

  volver(): void {
    this.reiniciar();
    this.showRanking = false;
  }

  finPartida(): void {
    this.showModal = true;
  }

  reiniciar(): void {
    this.juego = null;
    this.nombre = null;
    this.dificultad = '';
    this.showModal = false;
    this.crearTeclado();
  }

}
