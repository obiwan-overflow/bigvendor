import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-lists',
  templateUrl: './report-lists.component.html',
  styleUrls: ['./report-lists.component.scss']
})
export class ReportListsComponent {
  title:any;
  id:any;
  constructor (private route:ActivatedRoute){

  }
  ngOnInit () {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id == '1'){
      this.title = "Pr to Po (issue po within 5 working days)";  
    }else if(this.id == '2'){
      this.title = "PO ON-time delivery";
    }else if(this.id == '3'){
      this.title = "Quarterly top value/frequency vendors";
    }
  }
}
