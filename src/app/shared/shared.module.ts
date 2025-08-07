import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent], //modulos disponibles que potencialmente se quieran compartir con cualquier componente importado en el modulo donde se importe.
})
export class SharedModule {}
