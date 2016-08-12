import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from '../shared/doctor.service';
import { DoctorProfile } from '../shared/doctor-profile';

@Component({
  moduleId: module.id,
  selector: 'app-doctor-profile',
  templateUrl: 'doctor-profile.component.html',
  styleUrls: ['doctor-profile.component.css'],
  providers: [DoctorService]
})

export class DoctorProfileComponent implements OnInit {

  id: string;
  doctor: DoctorProfile;
  constructor(private route: ActivatedRoute, private doctorService : DoctorService) {
      route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.doctorService.getDoctor(this.id).subscribe(doctor => this.doctor = doctor);
  }
}