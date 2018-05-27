/* global describe, it, before */

import * as testmy from './context.js';

import chai from 'chai';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Cat library', () => {
  before(() => {
    lib = new testmy.Cat();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Cat');
    });
  });
});

describe('Given an instance of my Dog library', () => {
  before(() => {
    lib = new testmy.Dog();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Dog');
    });
  });
});

describe('Given an instance of my Welcome library', () => {
  before(() => {
    lib = new testmy.Welcome('Paul');
  });
  describe('when I need a welcome message with the name "Paul"', () => {
    it('should return message', () => {
      expect(lib.GetWelcomeMessage('Paul')).to.be.equal("<h2>Hello there Paul, Let's learn TypeScript</h2>");
    });
  });
});
