import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MenuBarComponent,
    TypefilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    HttpClientModule
    
  ],
  exports:[MenuBarComponent,TypefilterPipe
  ]
})
export class SharedModule { }
