import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componentes importados
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component'; // Si tienes un componente Carrito
import { FormComponentProducto } from './producto/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InventarioComponent, ProductoComponent, CarritoComponent, FormComponentProducto],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
