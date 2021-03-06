import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveUsageComponent } from './Examples/L07-Directives/directive-usage/directive-usage.component';
import { BasicHighlightDirective } from './Examples/L07-Directives/directive-usage/CustomDirectives/basic-highlight.directive';
import { BetterHighlightDirective } from './Examples/L07-Directives/directive-usage/CustomDirectives/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveUsageComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
