/* --- Module Imports --- */
import { BrowserModule } 			        from '@angular/platform-browser';
import { NgModule } 				          from '@angular/core';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations'
import { HttpClientModule }           from '@angular/common/http';
import { AppRoutingModule }           from './app-routing.module';
import { PostModule }                 from './post/post.module';

/* Material Module Imports */
import { MatListModule }              from '@angular/material';

/* --- Component Imports --- */
import { AppComponent } 			        from './app.component';
import { HomeComponent }              from './home.component';
import { HeaderComponent }			      from './header.component';
import { FooterComponent }			      from './footer.component';
import { PageNotFoundComponent }      from './page-not-found.component';

/* --- Service Imports --- */
import { PostService }                from './post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    PostModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

