import { CoffeeLocation } from './coffeeLocation';
import { TestingRating } from './TestingRating';

export class Coffee {

    type: string;
    rating: number;
    notes: string;
    testingRating: TestingRating;

    // Receiving args is making args mandatory to initialize any class.
    // No default values are being set.

    constructor(public name: string = '',
        public cafeName: string = '',
        public location: CoffeeLocation = null) {

            this.location = new CoffeeLocation();
            this.testingRating = new TestingRating();

    }
}
