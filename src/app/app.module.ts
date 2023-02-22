import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { UserListsComponent } from './admin/user-lists/user-lists.component';
import { UserAddComponent } from './admin/user-add/user-add.component';
import { NewsListsComponent } from './admin/news-lists/news-lists.component';
import { NewsAddComponent } from './admin/news-add/news-add.component';
import { NewsComponent } from './news/news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { EvaluationDetailComponent } from './evaluation/evaluation-detail/evaluation-detail.component';
import { VendorComponent } from './vendor/vendor/vendor.component';
import { VendorListsComponent } from './vendor/vendor-lists/vendor-lists.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { AnalysisComponent } from './analysis/analysis/analysis.component';
import { EvaluationShowComponent } from './evaluation/evaluation-show/evaluation-show.component';
import { EvaluationListsComponent } from './evaluation/evaluation-lists/evaluation-lists.component';
import { EvaluationAddComponent } from './evaluation/evaluation-add/evaluation-add.component';
import { EvaluationPreviewComponent } from './evaluation/evaluation-preview/evaluation-preview.component';
import { EvaluationQuestionComponent } from './evaluation/evaluation-question/evaluation-question.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UserListsComponent,
    UserAddComponent,
    NewsListsComponent,
    NewsAddComponent,
    NewsComponent,
    NewsDetailComponent,
    EvaluationDetailComponent,
    VendorComponent,
    VendorListsComponent,
    VendorDetailComponent,
    AnalysisComponent,
    EvaluationShowComponent,
    EvaluationListsComponent,
    EvaluationAddComponent,
    EvaluationPreviewComponent,
    EvaluationQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
