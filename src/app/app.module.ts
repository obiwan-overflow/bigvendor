import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSummernoteModule } from 'ngx-summernote';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { StarRatingModule } from 'angular-star-rating';

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
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { ReportComponent } from './procurement/report/report.component';
import { ReportListsComponent } from './procurement/report-lists/report-lists.component';
import { TypeComponent } from './question/type/type.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionPreviewComponent } from './question/question-preview/question-preview.component';
import { QuestionListsComponent } from './question/question-lists/question-lists.component';
import { AvlForEquipmentComponent } from './vendor/avl-for-equipment/avl-for-equipment.component';
import { AvlForServiceComponent } from './vendor/avl-for-service/avl-for-service.component';
import { VendorFormComponent } from './vendor/vendor-form/vendor-form.component';
import { QuestionnaireComponent } from './question/questionnaire/questionnaire.component';
import { QuestionEditComponent } from './question/question-edit/question-edit.component';
import { QuestionAddComponent } from './question/question-add/question-add.component';
import { VendorSubmemberListsComponent } from './vendor/vendor-submember-lists/vendor-submember-lists.component';
import { VendorSubmemberAddComponent } from './vendor/vendor-submember-add/vendor-submember-add.component';
import { ProjectListsComponent } from './projects/project-lists/project-lists.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectAddComponent } from './projects/project-add/project-add.component';

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
    VendorAddComponent,
    ReportComponent,
    ReportListsComponent,
    TypeComponent,
    QuestionDetailComponent,
    QuestionPreviewComponent,
    QuestionListsComponent,
    AvlForEquipmentComponent,
    AvlForServiceComponent,
    VendorFormComponent,
    QuestionnaireComponent,
    QuestionEditComponent,
    QuestionAddComponent,
    VendorSubmemberListsComponent,
    VendorSubmemberAddComponent,
    ProjectListsComponent,
    ProjectDetailComponent,
    ProjectAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSummernoteModule,
    AngularEditorModule,
    StarRatingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
