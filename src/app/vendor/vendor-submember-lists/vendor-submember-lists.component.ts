import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-submember-lists',
  templateUrl: './vendor-submember-lists.component.html',
  styleUrls: ['./vendor-submember-lists.component.scss']
})
export class VendorSubmemberListsComponent {
  fakeArray = new Array(4);
  today:any;
  ngOnInit() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = mm + '/' + dd + '/' + yyyy;
  }
}
