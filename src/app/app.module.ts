/* --- Module Imports --- */
import { BrowserModule } 			        from '@angular/platform-browser';
import { NgModule } 				          from '@angular/core';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations'
import { HttpClientModule }           from '@angular/common/http';
import { AppRoutingModule }           from './app-routing.module';

/* Material Module Imports */
import { MatListModule }              from '@angular/material';

/* --- Component Imports --- */
import { AppComponent } 			        from './app.component';
import { HomeComponent }              from './home.component';
import { HeaderComponent }			      from './header.component';
import { FooterComponent }			      from './footer.component';
import { PostComponent }              from './post.component';
import { PostNavComponent }           from './post-nav.component';

/* --- Service Imports --- */
import { PostService }                from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    PostNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

