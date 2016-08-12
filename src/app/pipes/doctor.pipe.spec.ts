/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DoctorPipe } from './doctor.pipe';

describe('Pipe: DoctorPipe', () => {
  it('create an instance', () => {
    let pipe = new DoctorPipe();
    expect(pipe).toBeTruthy();
  });
});
