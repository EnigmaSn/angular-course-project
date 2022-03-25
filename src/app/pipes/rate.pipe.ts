import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  public transform(rating: number | undefined): number | undefined {

	if (typeof rating === 'undefined') {
		return;
	}
	const ratingAfterDot = rating % 1;

	if (ratingAfterDot < 0.25) {
		return Math.trunc(rating);
	} 

    if (ratingAfterDot >= 0.25 && ratingAfterDot < 0.75) {
			return Math.trunc(rating) + 0.5;
		} 
		
    return Math.trunc(rating) + 1;
	}

}
