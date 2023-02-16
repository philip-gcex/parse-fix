import { parseFixText, fixMessagesFromText, parseFixMsg } from '../parseFix.mjs'
import { promises as fs } from 'fs'
import assert from 'node:assert/strict'
//import { expected } from './expected.mjs'

const text = `8=FIX.4.4|848=20003=3|10=084|`

const expected = {
  parsed: [
    { fieldNo: '8', value: 'FIX.4.4', fieldName: 'BeginString' },
    {
      fieldNo: '848',
      value: '20003=3',
      fieldName: 'TargetStrategyParameters'
    },
    { fieldNo: '10', value: '084', fieldName: 'CheckSum' }
  ]
};
//const msgs = fixMessagesFromText(text)
const testItems = {
  parsed: parseFixText(text)[0].parsed,
}

Object.entries(testItems).forEach(([key, val]) => {
  assert.deepEqual(val, expected[key])
})

//console.log(JSON.stringify(testItems, null, 2))
