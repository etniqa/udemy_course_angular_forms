import {animate, group, keyframes, query, sequence, state, style, transition, trigger} from '@angular/animations';

export const boxAnimation =
// in HTML: <div [@box]="'start'" ></div>
  trigger('box', [
    state('start', style({background: 'blue'})),
    state('end', style({
      background: 'red',
      transform: 'scale(1.2)'
    })),
    state('special', style({
      background: 'orange',
      transform: 'scale(0.5)',
      borderRadius: '50%'
    })),
    // stateChangeExpr === from 'state' to 'state'
    // animate(number | string)
    transition('start <=> end', animate('800ms ease-in-out')),
    // * => special === from any state to special
    transition('special <=> *', [
        // set in group for simultaneously performing
        group([
          // set animation for posterity (нащадки) (<h1>) in query
          query('h4',
            // change fontSize to 1.5rem for 1500ms
            animate(1500, style({
            fontSize: '1.5rem'
          }))),
          // "one by one performing" === sequence()
          sequence([
            // time for step1:
            animate(1500,
              // style for step1
              style({
                background: 'green'
              })),
            // time for step2
            animate(1000,
              // step2:
              style({
                background: 'pink'
              })),
            // time for step3
            animate(600,
              // style3:
              style({
                opacity: '0.3'
              })
            ),
            // time for set state end with it's style
            animate(1000)
          ])
        ])
      ]
    ),
    // void = state for objects, for which *ngIf=true (vanishing)
    // :enter === void => *
    transition('void => *', [
      // in group all animations perform simultaneously
      group([
        style({
          opacity: '0',
          transform: 'scale(1.3)'
        }),
        animate('850ms ease-out')
      ])
    ]),
    // :leave === * => void
    transition('* => void', [
      animate(4000,
        // divide all times among all styles if there is NO OFFSET
        keyframes([
          // animate(5000/5, style({background: 'red'}))
          style({background: 'red', offset: 0.2}),
          // animate(5000/5, style({background: 'orange'}))
          style({background: 'orange', offset: 0.4}),
          // animate(5000/5, style({background: 'black'}))
          style({background: 'black', offset: 0.6}),
          //
          style({background: 'blue', offset: 0.8}),
          //
          style({
            transform: 'scale(0.1)',
            opacity: '0',
            offset: 1
          })
        ]))
    ])
  ]);
