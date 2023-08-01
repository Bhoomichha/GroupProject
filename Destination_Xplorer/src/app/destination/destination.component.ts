import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {
  rateDestination(stars: number, event: MouseEvent) {
    const clickedStar = event.target as HTMLElement;

    const destinationBox = clickedStar.closest('.destination-box');

    if (destinationBox) {
      const starsContainer = destinationBox.querySelector('.destination-rating') as HTMLElement | null;

      if (starsContainer) {
        const allStars = starsContainer.querySelectorAll('i');
        allStars.forEach(star => star.classList.remove('rated'));

        for (let i = 0; i < stars; i++) {
          (allStars[i] as HTMLElement).classList.add('rated');
        }
      }
    }
  }
}


