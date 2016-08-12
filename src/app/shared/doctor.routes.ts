import { provideRouter, RouterConfig} from '@angular/router';
import { DoctorListComponent } from '../+doctor-list/doctor-list.component';
import { DoctorProfileComponent } from '../doctor-profile/doctor-profile.component';

export const DoctorRoutes: RouterConfig = [
    { path: 'doctors', component: DoctorListComponent },
    { path: 'doctors/:id', component: DoctorProfileComponent }
];