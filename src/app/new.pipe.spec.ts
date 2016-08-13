/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { NewPipe } from './new.pipe';

describe('Pipe: New', () => {
  it('create an instance', () => {
    let pipe = new NewPipe();
    expect(pipe).toBeTruthy();
  });
});
