import { provideRouter, RouterConfig} from '@angular/router';
import { DoctorRoutes } from './shared/doctor.routes';


export const routes: RouterConfig = [
    // {
    // path: '',
    // redirectTo: 'doctors'
    // },
    ...DoctorRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];