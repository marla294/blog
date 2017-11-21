import { BrowserModule } 			        from '@angular/platform-browser';
import { NgModule } 				          from '@angular/core';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations'
import { RouterModule, Routes }       from '@angular/router';
import { MatListModule }			        from '@angular/material';

import { AppComponent } 			        from './app.component';
import { HomeComponent }              from './home.component';
import { HeaderComponent }			      from './header.component';
import { FooterComponent }			      from './footer.component';
import { PostContainerComponent }     from './post-container.component';

import { PostDirective }              from './post.directive';

import { PostService }                from './post.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'post', component: PostContainerComponent, data: { state: 'post' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostContainerComponent,
    PostDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
