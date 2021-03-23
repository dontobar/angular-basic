import { NgModule } from '@angular/core';
import { ContradorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContradorComponent
    ],

    exports:[
        ContradorComponent
    ]
})

export class ContadorModule{}