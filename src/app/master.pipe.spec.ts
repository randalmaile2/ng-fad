/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MasterPipe } from './master.pipe';

describe('Pipe: Master', () => {
  it('create an instance', () => {
    let pipe = new MasterPipe();
    expect(pipe).toBeTruthy();
  });
});
