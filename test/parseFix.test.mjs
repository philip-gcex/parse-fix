import { parseFixText, fixMessagesFromText, parseFixMsg } from '../parseFix.mjs'
import { promises as fs } from 'fs'
import assert from 'node:assert/strict'
import { expected } from './expected.mjs'

const text = await fs.readFile('./test/test.log').then(r => r.toString('ascii'))
const msgs = fixMessagesFromText(text)
const testItems = {
  parsed: parseFixText(text),
  msg: parseFixMsg(msgs[0]),
  msgs
}

Object.entries(testItems).forEach(([key, val]) => {
  assert.deepEqual(val, expected[key])
})

//console.log(JSON.stringify(testItems, null, 2))
