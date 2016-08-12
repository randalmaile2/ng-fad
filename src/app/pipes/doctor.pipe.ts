import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctorPipe'
})
export class DoctorPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    function filterEducationType(value) {
      if (value.EducationTypeID == 2) {
        return value;
      }
    }

    return value.filter(filterEducationType);
  }

}
