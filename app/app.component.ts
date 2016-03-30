import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoggedInRouterOutlet} from "./LoggedInOutlet";
import {Home} from "./home/home";
import {Login} from "./login/login";
import {Signup} from "./signup/signup";

@Component({
    selector: 'my-app',
    template: `<div>Test
               <router-outlet></router-outlet>
               </div>`,
    directives: [LoggedInRouterOutlet]
})
@RouteConfig([
    {path: '/', redirectTo: ['/Home']},
    {path: '/home', component: Home, as: 'Home'},
    {path: '/login', component: Login, as: 'Login'},
    {path: '/signup', component: Signup, as: 'Signup'}
])
export class AppComponent {
}
