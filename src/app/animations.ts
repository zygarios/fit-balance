import { trigger, transition, query, state, style, animate } from "@angular/animations";

export const animations = [
  trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    state('*', style({
      opacity: 1
    })),
    transition('* => void', animate('200ms ease-out')),
    transition('void => *', animate('200ms ease-in'))
  ])
]
