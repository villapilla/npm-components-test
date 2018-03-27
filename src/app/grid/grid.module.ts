import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './component/grid.component';
import { PaginationComponent } from './component/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GridComponent,
    PaginationComponent
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule {
}
