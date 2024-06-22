import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent implements OnInit {

  vehicleRegForm: FormGroup;
  stops = ['stop1', 'stop2', 'stop3', 'stop4 ', 'stop5'];

  constructor(
    private fb: FormBuilder,
    // private dialogRef: MatDialogRef<VehicleRegistrationComponent>, // Correctly imported MatDialogRef
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.vehicleRegForm = this.fb.group({
      vehicleName: ['', Validators.required],
      vehicleType: ['', Validators.required],
      vehicleSeatNo: ['', Validators.required],
      // subCategory: [this.data?.subCategory || '', Validators.required],
      stop:['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.email], 
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

  submit(): void {
    if (this.vehicleRegForm.valid) {
      console.log(this.vehicleRegForm.value); 
   
    } else {
      console.log('Form is invalid');
    
    }
  }
}
