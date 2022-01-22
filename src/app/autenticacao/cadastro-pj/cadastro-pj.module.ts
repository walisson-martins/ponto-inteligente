import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPjComponent, CadastroPjComponent } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CadastrarPjComponent, CadastroPjComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule],
})
export class CadastroPjModule {}
