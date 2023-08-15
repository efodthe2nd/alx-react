#!/usr/bin/node

function getImmutableObject(obj){
  const { Map } = require('immutable');
  
  return Map(obj);
}

//const newObj = { fear: true, smell: -1033565343.56343, wall: false, thing: -91233435 };

//console.log(getImmutableObject(newObj));
