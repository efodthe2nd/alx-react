#!/usr/bin/node

export default function areMapsEqual(map1, map2) {
  const { is } = require('immutable');

  return is(map1, map2);
}
