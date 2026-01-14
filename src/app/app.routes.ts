import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { IfElseComponent } from './components/controlFlow/if-else/if-else.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { PipeComponent } from './components/pipe/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';
import { NgTemplateComponent } from './components/directives/ng-template/ng-template.component';
import { NgcontainerComponent } from './components/directives/ng-container/ng-container.component';
import { ViewchildComponent } from './components/decorator/view-child/view-child.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './service/auth.guard';
import { SignalComponent } from './components/signal/signal.component';


export const routes: Routes = [
     {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
    {
        path : 'add-employee',
        component : AddEmployeeComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent,
        canActivate: [authGuard]
    },
    {
        path: 'signal',
        component: SignalComponent,
        canActivate: [authGuard]
    },
    {
        path: 'emp-list',
        component: EmployeeListComponent,
        canActivate: [authGuard]
    },
    {
        path: 'Structural-dir',
        component: StructuralDirectiveComponent,
        canActivate: [authGuard]
    },
    {
        path: 'Attribute-dir',
        component: AttributeDirectiveComponent,
        canActivate: [authGuard]
    },
    {
        path: 'ng-template',
        component: NgTemplateComponent,
        canActivate: [authGuard]
    },
    {
        path: 'ng-container',
        component: NgcontainerComponent,
        canActivate: [authGuard]
    },
    {
        path: '@if',
        component: IfElseComponent,
        canActivate: [authGuard]
    },
    {
        path: '@for',
        component: ForComponent,
        canActivate: [authGuard]
    },
    {
        path: 'pipe',
        component: PipeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'template',
        component: TemplateComponent,
        canActivate: [authGuard]
    },
    {
        path: 'reactive',
        component: ReactiveComponent,
        canActivate: [authGuard]
    },
    {
        path: 'layout',
        component: LayoutComponent,
        canActivate: [authGuard]
    },
    {
        path: 'get-api',
        component: GetApiComponent,
        canActivate: [authGuard]
    },
    {
        path: 'post-api',
        component: PostApiComponent,
        canActivate: [authGuard]
    },
    {
        path: 'viewChild',
        component: ViewchildComponent
    },
        ]

    }
   
];
