import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
        TranslateModule,
        CommonModule
    ],
    declarations: []
})
export class SharedModule { }
