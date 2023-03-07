import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-lists',
  templateUrl: './vendor-lists.component.html',
  styleUrls: ['./vendor-lists.component.scss']
})
export class VendorListsComponent {
  dataVendor = [
    {name:"test company",status:"pending",date:"2"},
    {name:"test company",status:"pending",date:"3"},
    {name:"test company",status:"Updated By Vendor",date:""},
    {name:"test company",status:"pending",date:"1"},
    {name:"test company",status:"Updated By Vendor",date:""},
    {name:"test company",status:"Updated By Vendor",date:""},
    {name:"test company",status:"pending",date:"1"},
    {name:"test company",status:"pending",date:"1"},
    {name:"test company",status:"Updated By Vendor",date:""},
    {name:"test company",status:"Updated By Vendor",date:""},
  ]
  ngOnInit() {

  }
}
