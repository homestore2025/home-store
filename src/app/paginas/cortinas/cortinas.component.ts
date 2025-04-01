import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cortina } from '../../interfaces/corina.interface';

@Component({
  selector: 'app-cortinas',
  imports: [CommonModule],
  templateUrl: './cortinas.component.html',
  styleUrl: './cortinas.component.css'
})
export class CortinasComponent {

cortina: cortina[] =[
  {nombre:'Onda Serena', descripcion:'La elegancia de la cortina tradicional, se une con el diseño y movimiento de las ondas.',imagen:'onda-s.jpg'},
  {nombre:'Sheer', descripcion:'Franjas de tejidos opacos y traslúcidos, los cuales se intercambian horizontalmente y permiten un perfecto control del paso de luz para tus espacios.', imagen:'sheer-c.jpg'},
  {nombre:'Panel Japones', descripcion:'Mecanismos corredizos que se caracteriza porque permite el cubrimiento de grandes ventanales.', imagen:'panel-j.jpg'},
  {nombre:'Enrrollable Blackout', descripcion:'Cortina blackout: bloquea completamente la luz, brinda privacidad total y mejora la eficiencia térmica y acústica en cualquier espacio. Ideal para dormitorios y salas de entretenimiento.',imagen:'blackout.jpg'},
  {nombre:'Enrrollable Decorativo', descripcion:'Cortina blackout: bloquea completamente la luz, brinda privacidad total y mejora la eficiencia térmica y acústica en cualquier espacio. Ideal para dormitorios y salas de entretenimiento.',imagen:'decorativa.jpg'}
]

}
