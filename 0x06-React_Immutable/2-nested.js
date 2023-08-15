#!/usr/bin/node

export default function accessImmutableObject(object, array) {
  const { fromJS } = require('immutable');

  const map = fromJS(object);

  return map.getIn(array, undefined);
}

//console.log(accessImmutableObject({ name: { first: "guillame", last: "salva" } }, ['name', 'first']));
