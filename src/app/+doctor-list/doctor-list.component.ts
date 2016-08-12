import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Doctor } from '../shared/doctor-fragment';
import { DoctorService } from '../shared/doctor.service';
import { DoctorPipe } from '../pipes/doctor.pipe';

@Component({
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'doctor-list.component.html',
  styleUrls: ['doctor-list.component.css'],
  providers: [DoctorService],
  pipes: [DoctorPipe]
})
export class DoctorListComponent implements OnInit{
  doctors: any;
  doctorsSelected: Doctor[] = [];

  constructor(
    private router: Router,
    private doctorService : DoctorService){ }

  ngOnInit(){
    this.doctorService.getAllDoctors().subscribe(doctors => {
      console.log(doctors);
      this.doctors = doctors}
      );
  }
  
  onSelect(id: Doctor) {
    this.doctorsSelected.push(id);
    this.router.navigate(['/doctor/', id]);
  }
}



