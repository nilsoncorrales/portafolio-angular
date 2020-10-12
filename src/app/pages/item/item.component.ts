import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcionInterface } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  producto: ProductoDescripcionInterface;
  id: string;

  constructor(private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(parametros => {
      console.log(parametros['id']);
      this.productosService.getProduct(parametros['id'])
      .subscribe( (producto: ProductoDescripcionInterface) => {
        this.id = parametros['id'];
        this.producto = producto;
      });
    })

  }

}
