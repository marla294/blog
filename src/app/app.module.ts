/* --- Module Imports --- */
import { BrowserModule } 			        from '@angular/platform-browser';
import { NgModule } 				          from '@angular/core';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations'
import { HttpClientModule }           from '@angular/common/http';
import { ReactiveFormsModule }        from '@angular/forms';
import { AppRoutingModule }           from './app-routing.module';
import { PostModule }                 from './post/post.module';
import { CoreModule }                 from './core/core.module';

/* --- Component Imports --- */
import { AppComponent } 			        from './app.component';
import { HomeComponent }              from './home.component';
import { PageNotFoundComponent }      from './page-not-found.component';
import { EmailComponent }             from './email.component';

/* --- Service Imports --- */
import { PostService }                from './post/post.service';
import { MonthYearService }           from './shared/month-year.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PostModule,
    CoreModule
  ],
  providers: [
    PostService,
    MonthYearService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

