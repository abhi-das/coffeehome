import { NgModule } from '@angular/core';
import { MatIconModule, MatInputModule, MatSelectModule,
  MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule, MatButtonModule} from '@angular/material';

@NgModule({
    imports: [ MatIconModule, MatInputModule, MatSelectModule,
                  MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule, MatButtonModule],
    exports: [ MatIconModule, MatInputModule, MatSelectModule,
                  MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule, MatButtonModule]
})

export class AppMaterialModules {}
