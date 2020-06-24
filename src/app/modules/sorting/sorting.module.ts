import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SortingComponent } from './components/sorting/sorting.component';
import { ColorPipe } from './color.pipe';

@NgModule({
  declarations: [SortingComponent, ColorPipe],
  imports: [CommonModule],
  exports: [SortingComponent]
})
export class SortingModule {}
