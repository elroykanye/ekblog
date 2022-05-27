import {animate, style, transition, trigger} from "@angular/animations";

export const slideAnimation = trigger('slideAnimation', [
  // end state styles for route container (host)
  transition('* => *', [
    // styles at start of transition
    style({
      // start with route container at top/left
      transform: 'translateX(0)',
      opacity: 1
    }),
    // animation and styles at end of transition
    animate('0.5s ease-in-out', style({
      // route container should now be translated by -50%
      transform: 'translateX(-50%)',
      opacity: 0
    }))
  ])
]);
