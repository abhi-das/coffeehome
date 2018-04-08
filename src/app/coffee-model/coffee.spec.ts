import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coffee } from './coffee';

describe('Coffee class testcase', () => {
    let coffe: Coffee;

    beforeEach(() => {
        coffe = new Coffee();
    });

    it('should create coffee class', () => {
        expect(coffe).toBeTruthy();
    });
});
