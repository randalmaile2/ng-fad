/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DdPipe } from './dd.pipe';

describe('Pipe: Dd', () => {
  it('create an instance', () => {
    let pipe = new DdPipe();
    expect(pipe).toBeTruthy();
  });
});
