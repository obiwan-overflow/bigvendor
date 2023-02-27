import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListsComponent } from './admin/user-lists/user-lists.component';
import { UserAddComponent } from './admin/user-add/user-add.component';
import { NewsListsComponent } from './admin/news-lists/news-lists.component';
import { NewsAddComponent } from './admin/news-add/news-add.component';
import { NewsComponent } from './news/news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { EvaluationDetailComponent } from './evaluation/evaluation-detail/evaluation-detail.component';
import { VendorListsComponent } from './vendor/vendor-lists/vendor-lists.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorComponent } from './vendor/vendor/vendor.component';
import { EvaluationShowComponent } from './evaluation/evaluation-show/evaluation-show.component';
import { AnalysisComponent } from './analysis/analysis/analysis.component';
import { EvaluationListsComponent } from './evaluation/evaluation-lists/evaluation-lists.component';
import { EvaluationAddComponent } from './evaluation/evaluation-add/evaluation-add.component';
import { EvaluationQuestionComponent } from './evaluation/evaluation-question/evaluation-question.component';
import { EvaluationPreviewComponent } from './evaluation/evaluation-preview/evaluation-preview.component';
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { ReportComponent } from './procurement/report/report.component';
import { ReportListsComponent } from './procurement/report-lists/report-lists.component';
import { TypeComponent } from './question/type/type.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionPreviewComponent } from './question/question-preview/question-preview.component';
import { QuestionListsComponent } from './question/question-lists/question-lists.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Add child routes for the other pages here
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'admin/vendor/:id', component: VendorListsComponent },
      { path: 'admin/vendor/detail', component: VendorDetailComponent },
      { path: 'admin/vendor/detail/evaluation', component: EvaluationShowComponent },
      { path: 'admin/vendor/:id/add', component: VendorAddComponent },
      { path: 'admin/vendor/:id/add/form', component: VendorDetailComponent },
      { path: 'admin/user', component: UserListsComponent },
      { path: 'admin/user/add', component: UserAddComponent },
      { path: 'admin/news', component: NewsListsComponent },
      { path: 'admin/news/add', component: NewsAddComponent },
      { path: 'admin/analysis', component: AnalysisComponent },
      { path: 'admin/analysis/evaluation', component: EvaluationListsComponent },
      { path: 'admin/analysis/evaluation/add', component: EvaluationAddComponent },
      { path: 'admin/analysis/evaluation/add/question', component: EvaluationQuestionComponent },
      { path: 'admin/analysis/evaluation/add/question/preview', component: EvaluationPreviewComponent },
      { path: 'admin/analysis/question', component: TypeComponent },
      { path: 'admin/analysis/question/detail', component: QuestionDetailComponent },
      { path: 'admin/analysis/question/detail/preview', component: QuestionPreviewComponent },
      { path: 'admin/analysis/question/detail/preview/lists', component: QuestionListsComponent },
      { path: 'admin/analysis/report', component: ReportComponent },
      { path: 'admin/analysis/report/lists/:id', component: ReportListsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/detail', component: NewsDetailComponent },
      { path: 'evaluation', component: EvaluationShowComponent },
      { path: 'vendor', component: VendorComponent },
      { path: 'vendor/detail', component: VendorDetailComponent },
      { path: 'vendor/detail/evaluation', component: EvaluationShowComponent },
    ]
  },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
