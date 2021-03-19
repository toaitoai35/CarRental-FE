import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public fb: FormBuilder) { }
  BookingForm = this.fb.group({
    districtsName: ['', [Validators.required]]
  })

  District: any = ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6', 
                    'District 7', 'District 8', 'District 9', 'District 10', 'District 11', 'District 12',
                    'District Bình Tân', 'District Bình Thạnh', 'District Gò Vấp' ,'District Phú Nhuận',
                    'District  Tân Bình', 'District Tân Phú']
  changeCity(e) {
    console.log(e.value)
    this.districtsName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get districtsName() {
    return this.BookingForm.get('districtsName');
  }
  ngOnInit() {
  }

}
