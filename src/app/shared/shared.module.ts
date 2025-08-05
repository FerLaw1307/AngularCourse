import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [], //modulos disponibles que potencialmente se quieran compartir
})
export class SharedModule {}
