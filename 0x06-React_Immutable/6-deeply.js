#!/usr/bin/node

export default function mergeDeeplyElements(page1, page2) {
  const { Map } = require('immutable');

  return Map(page1).mergeDeep(Map(page2));
}
