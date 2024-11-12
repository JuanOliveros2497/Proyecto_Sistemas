import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
autor:any= {nombres:'Daniel Stiven', apellidos:'Poveda Cante'}
coautor:any= {nombres:'Juan Esteban', apellidos:'Oliveros Duran'}
}
