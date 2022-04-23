import { animate, query, style, transition, trigger, group } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [

        query(':enter ,:leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'translateX(-50px)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(50px)'
            }),
            animate('250ms 100ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ], { optional: true })
        ])
      ]),
      transition(':decrement', [

        query(':enter ,:leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'translateX(50px)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(-50px)'
            }),
            animate('250ms 100ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      return outlet.activatedRouteData['tabNumber']
    }
    else
      return 0;
  }
}
