import { animate, query, style, transition, trigger, group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, Observable, timer } from 'rxjs';

const baseStyles = style({
  // display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
})

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
      ]),

      transition('* => secondary', [
        style({
          position: 'relative',
          // overflow: 'hidden'
        }),

        query(':enter, :leave', [
          baseStyles
        ], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'scale(0.8)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({
              transform: 'scale(1.2)',
              opacity: 0
            }),
            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'scale(1)'
            }))
          ], { optional: true })
        ])
      ]),

      transition('secondary => *', [
        style({
          position: 'relative',
          // overflow: 'hidden'
        }),

        query(':enter, :leave', [
          baseStyles
        ], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'scale(1.25)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({
              transform: 'scale(0.8)',
              opacity: 0
            }),
            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'scale(1)'
            }))
          ], { optional: true })
        ])
      ])

    ]),
    trigger('bgAnim', [
      transition(':leave', [
        animate(1000, style({
          opacity: 0
        }))
      ])
    ]),

    trigger('fadeAnim', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(250, style({
          opacity: 1
        }))
      ]),

      transition(':leave', [
        animate(250, style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {


  backgrounds: string[] = ["https://images.unsplash.com/photo-1649796895480-d1294bc82c02?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDYwNTY2MA&ixlib=rb-1.2.1&q=80&w=1920"]

  loadingBgImage: boolean
  dateTime: Observable<Date>

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const tab = outlet.activatedRouteData['tabNumber']

      if (!tab)
        return 'secondary'
      return tab
    }
    else
      return 0;
  }

  ngOnInit(): void {
    this.dateTime = timer(0, 100).pipe(
      map(() => {
        return new Date()
      })
    )
  }

  async changeBgImg() {
    this.loadingBgImage = true
    const result = await fetch('https://source.unsplash.com/random/1920x1080', {
      method: 'HEAD'
    })

    const isSame = this.backgrounds.includes(result.url)
    if (isSame) {
      this.changeBgImg()
    }

    this.backgrounds.push(result.url)
  }

  onBgImgLoad(imgEvent: Event) {
    const imgElement = imgEvent.target as HTMLImageElement
    const source = imgElement.src
    this.backgrounds = this.backgrounds.filter(b => b === source)

    this.loadingBgImage = false
  }
}
