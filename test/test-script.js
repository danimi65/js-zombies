const chai = require ('chai');

chai.expect();
chai.should();

const Zombies = require('../zombies.js');

describe('Item', () =>{

  let item = new Zombies.item;


  it('should be a class', () => {
    item.should.be.a.function;  
  });
  it('should have a name', () =>{
      item.should.have.property('name');
  });


});

describe('Weapon', () => {
  let weapon = new Zombies.weapon;

  it('should be a class', () =>{
    weapon.should.be.a.function;
  });
  it('should have a name', () =>{
    weapon.should.have.property('name');
  });
  it('should have damage', () => {
    weapon.should.have.property('damage');
  });
  it('should extend from Item', () => {
    weapon.should.be.an.instanceof(Zombies.item);
  });
});


describe('Food', ()=>{
  let food = new Zombies.food;

  it('should be a class', ()=>{
    food.should.be.a.function;
  });
  it('should have name', ()=>{
    food.should.have.property('name');
  });
  it('should have energy', ()=>{
    food.should.have.property('energy');
  });
  it('should extend from Item', ()=>{
    food.should.be.an.instanceof(Zombies.item);
  });
});