import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Doctor } from '../shared/doctor-fragment';
import { DoctorProfile } from '../shared/doctor-profile';

@Injectable()
export class DoctorService {

  private baseUrl: string = 'http://websoaint.sharp.com/restApi/fad/index.cfm/physicians';
  constructor(private http: Http) { }

  getAllDoctors(): Observable<Doctor[]> {

    let docHeaders = new Headers(
      {
        'Access-Control-Request-Headers': '*',
        'Content-Type': 'application/json',
        'filters': '',
        'startrow': '1',
        'endrow': '25',
        'include': 'Locations,Schools,Specialties'
      });

    let options = new RequestOptions({ headers: docHeaders });

    let doctors$ = this.http.get(this.baseUrl, options)
      .map(mapDoctors);
    // .catch(this.handleError);

    return doctors$;
  }


  getDoctor(id: string): Observable<DoctorProfile> {
    let url = `http://websoaint.sharp.com/restApi/fad/index.cfm?action=physicians.show&PhysicianIDNumber=${id}`;

    let headersById = new Headers(
      {
        'Access-Control-Request-Headers': '*',
        'Content-Type': 'application/json',
        'include': 'Locations,Schools,Specialties'
      });

    let optionsById = new RequestOptions({ headers: headersById });

    let doctorById$ = this.http.get(url, optionsById)
      .map(mapDoctor);
    // .catch(this.handleError);

    return doctorById$;
  }

  // Private Methods

  // private handleError(error: Response) {
  //   console.log(error);
  //   return Observable.throw(error.json().error || "server error");
  // }

}

function mapDoctors(response: Response): Doctor[] {
  return response.json().Physicians.map(toDoctor)
}

function mapDoctor(response: Response): DoctorProfile {
  return toDoctorProfile(response.json());
}

function toDoctor(r: Doctor): Doctor {
  let doctor = <Doctor>({
    PhysicianIDNumber: r.PhysicianIDNumber,
    Photo: r.Photo,
    Salutation: r.Salutation,
    LastName: r.LastName,
    FirstName: r.FirstName,
    Specialties: r.Specialties,
    Schools: r.Schools,
    Locations: r.Locations
  });
  return doctor;
}

function toDoctorProfile(r: any): DoctorProfile {
  let doctorProfile = <DoctorProfile>({
    LastName: r.LastName,
    FirstName: r.FirstName,
    PhysicianIDNumber: r.PhysicianIDNumber,
    Photo: r.Photo
  });
  return doctorProfile;
}
