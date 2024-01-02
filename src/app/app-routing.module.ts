import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { TestComponent } from './test/test.component';
import { PBindingComponent } from './p-binding/p-binding.component';
const routesNew: Routes = [
  // { path: '', redirectTo: '/contact', pathMatch: 'full' },
{path: '', component: TestComponent},
  { path: 'contact', component: SampleComponent },
  { path: 'about', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routesNew)],
  exports: [RouterModule]
})


export class AppRoutingModule {

 }
