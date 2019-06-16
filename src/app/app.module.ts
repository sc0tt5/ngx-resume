import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ResumeService } from './services/resume.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RatingComponent } from './sidebar/rating/rating.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        RatingComponent,
        SidebarComponent
    ],
    imports: [BrowserModule, HttpClientModule],
    providers: [ResumeService, Title],
    bootstrap: [AppComponent]
})
export class AppModule {}
