import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LayoutComponent } from './layout/layout.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './admin/pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthoFormComponent } from './admin/components/autho-form/autho-form.component';
import { accountGuard } from './guards/account.guard';
import { loginGuard } from './guards/login.guard';

const routes: Route[] = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
       loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: "about",
       loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
      },
      {
        path: "services",
        loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
      },
      {
        path: "our-teams",
        loadComponent: () => import('./pages/our-teams/our-teams.component').then(m => m.OurTeamsComponent)
      },
      {
        path: "contact-us",
        loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent)
      },
      {
        path: "portofolio",
        loadComponent: () => import('./pages/portofolio/portofolio.component').then(m => m.PortofolioComponent)
      },
      {
        path: "portofolio-details",
        loadComponent: () => import('./pages/portfolio-details/portfolio-details.component').then(m => m.PortfolioDetailsComponent)
      }
    ]
  },
  {
    path: "admin",
    loadComponent: () => import('./admin/admin/admin.component').then(m => m.AdminComponent),
    children: [
      {
        path: "",
        loadComponent: () => import('./admin/pages/login/login.component').then(m => m.LoginComponent),
        canActivate: [accountGuard]
      },
      {
        path: "account",
        loadComponent: () => import('./admin/pages/account/account.component').then(m => m.AccountComponent),
        canActivateChild: [loginGuard],
        children: [
          {
            path: "",
            loadComponent: () => import('./admin/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
          },
          {
            path: "author",
            loadComponent: () => import('./admin/pages/author/author.component').then(m => m.AuthorComponent)
          },
          {
            path: "choose",
            loadComponent: () => import('./admin/pages/admin-choose/admin-choose.component').then(m => m.AdminChooseComponent)
          },
          {
            path: "achievement",
            loadComponent: () => import('./admin/pages/achievement/achievement.component').then(m => m.AchievementComponent)
          },
          {
            path: "product",
            loadComponent: () => import('./admin/pages/product/product.component').then(m => m.ProductComponent)
          },
          {
            path: "contact",
            loadComponent: () => import('./admin/pages/admin-contact/admin-contact.component').then(m => m.AdminContactComponent)
          },
          {
            path: "location",
            loadComponent: () => import('./admin/pages/location/location.component').then(m => m.LocationComponent)
          },
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top' }),
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthoFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
