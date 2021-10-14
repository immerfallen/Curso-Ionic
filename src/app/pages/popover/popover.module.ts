import { ModalInternoComponent } from './../../componentes/modal-interno/modal-interno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
   
  ],
  declarations: [PopoverPage,  ModalInternoComponent],
  entryComponents: [ModalInternoComponent]
})
export class PopoverPageModule {}
