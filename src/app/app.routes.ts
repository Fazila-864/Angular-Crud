import { Routes } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { ProdForm } from './prod-form/prod-form';
import { ProdEdit } from './prod-edit/prod-edit';
import { Prodlist } from './prodlist/prodlist';
import { Dashboard } from './dashboard/dashboard';




export const routes: Routes = [
    {
        path:"",
        component:Dashboard,
        pathMatch:'full'
    },
    {
        path:"form",
        component:ProdForm,
        pathMatch:'full'
    },
    {
        path:"list",
        component:Prodlist,
        pathMatch:"full"
    },
    {
        path:"edit/:id",
        component:ProdEdit,
        pathMatch:"full"
    }
   
];
