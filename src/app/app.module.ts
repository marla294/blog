/* --- Module Imports --- */
import { BrowserModule } 			        from '@angular/platform-browser';
import { NgModule } 				          from '@angular/core';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations'
import { HttpClientModule }           from '@angular/common/http';
import { AppRoutingModule }           from './app-routing.module';
import { PostModule }                 from './post/post.module';
import { CoreModule }                 from './core/core.module';

/* Material Module Imports */
import { MatListModule }              from '@angular/material';

/* --- Component Imports --- */
import { AppComponent } 			        from './app.component';
import { HomeComponent }              from './home.component';
import { PageNotFoundComponent }      from './page-not-found.component';

/* --- Service Imports --- */
import { PostService }                from './post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    PostModule,
    CoreModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

