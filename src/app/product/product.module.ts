import { NgModule } from '@angular/core';
import { DbAnalyzeComponent } from './db-analyze/db-analyze.component';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';
import { Routes, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { DataUpdateComponent } from './data-update/data-update.component';
import { ProductDataComponent } from './db-analyze/product-data/product-data.component';
import { BillingDataComponent } from './db-analyze/billing-data/billing-data.component';
import { DebtDataComponent } from './db-analyze/debt-data/debt-data.component';

const routes: Routes =[
  {
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: InitialScreenComponent },
      { path: 'db-analyze', component: DbAnalyzeComponent },
      { path: 'data-transfer', component: DataTransferComponent },          
      { path: 'data-update', component: DataUpdateComponent },
      { path: 'db-analyze/product-data', component: ProductDataComponent },
      { path: 'db-analyze/billing-data', component: BillingDataComponent },
      { path: 'db-analyze/debt-data', component: DebtDataComponent }
    ]
   }
];

@NgModule({
  declarations: [
    DbAnalyzeComponent,
    InitialScreenComponent,
    DataTransferComponent,
    DataUpdateComponent,
    ProductDataComponent,
    BillingDataComponent,
    DebtDataComponent
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
