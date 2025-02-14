import { Component } from '@angular/core';
import { mueble } from '../../interfaces/muebles.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-centrosentrenimientotv',
  imports: [CommonModule],
  templateUrl: './centrosentrenimientotv.component.html',
  styleUrl: './centrosentrenimientotv.component.css'
})
export class CentrosentrenimientotvComponent {

  muebles : mueble[] = [
    {nombre:'Paris', descripcion: 'fabriacado en aglomerado rh de 15mm,enchapado con cantos flexibles y rigidos, estructuralmente ensamblados con tormillos drywall, bisagras tipo parche, gatos neumaticos o tipo tijera, con apliques en vidrios y/o espejo.ambientado con iluminacion led, con cintas indirectas en difumadores y ojos de buey directos.',imagen:'Paris.jpeg'},
    {nombre:'Praga', descripcion: 'fabriacado en aglomerado rh de 15mm,enchapado con cantos flexibles y rigidos, estructuralmente ensamblados con tormillos drywall, bisagras tipo parche, gatos neumaticos o tipo tijera, con apliques en vidrios y/o espejo.ambientado con iluminacion led, con cintas indirectas en difumadores y ojos de buey directos.',imagen:'Praga.jpeg'},
    {nombre:'Buenos Aire', descripcion: 'fabriacado en aglomerado rh de 15mm,enchapado con cantos flexibles y rigidos, estructuralmente ensamblados con tormillos drywall, bisagras tipo parche, gatos neumaticos o tipo tijera, con apliques en vidrios y/o espejo.ambientado con iluminacion led, con cintas indirectas en difumadores y ojos de buey directos.',imagen:'Bnos.jpg'},
    {nombre:'Dubai', descripcion: 'fabriacado en aglomerado rh de 15mm,enchapado con cantos flexibles y rigidos, estructuralmente ensamblados con tormillos drywall, bisagras tipo parche, gatos neumaticos o tipo tijera, con apliques en vidrios y/o espejo.ambientado con iluminacion led, con cintas indirectas en difumadores y ojos de buey directos.',imagen:'Dubai.jpg'},
    {nombre:'Rio', descripcion: 'fabriacado en aglomerado rh de 15mm,enchapado con cantos flexibles y rigidos, estructuralmente ensamblados con tormillos drywall, bisagras tipo parche, gatos neumaticos o tipo tijera, con apliques en vidrios y/o espejo.ambientado con iluminacion led, con cintas indirectas en difumadores y ojos de buey directos.',imagen:'Rio.jpg'},
    {nombre:'New York', descripcion: 'fabriacado en aglomerado rh de 15mm,enchapado con cantos flexibles y rigidos, estructuralmente ensamblados con tormillos drywall, bisagras tipo parche, gatos neumaticos o tipo tijera, con apliques en vidrios y/o espejo.ambientado con iluminacion led, con cintas indirectas en difumadores y ojos de buey directos.',imagen:'NY.jpeg'}

  ]

}
