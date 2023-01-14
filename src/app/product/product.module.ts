import { NgModule } from '@angular/core';
import { DbAnalyzeComponent } from './db-analyze/db-analyze.component';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';
import { Routes, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { TbdComponent } from './tbd/tbd.component';

const routes: Routes =[
  {
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: InitialScreenComponent },
      { path: 'db-analyze', component: DbAnalyzeComponent },
      { path: 'data-transfer', component: DataTransferComponent },          
      { path: 'tbd', component: TbdComponent }       
    ]
   }
];

@NgModule({
  declarations: [
    DbAnalyzeComponent,
    InitialScreenComponent,
    DataTransferComponent,
    TbdComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: []
})
export class ProductModule { }
