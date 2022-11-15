import { parseFixText, fixMessagesFromText, parseFixMsg } from './parseFix.mjs'
import { promises as fs } from 'fs'

const text = await fs.readFile('./test/test.log').then(r => r.toString('ascii'))
const parsed = parseFixText(text)
const msgs = fixMessagesFromText(text)

const test = x => console.log(JSON.stringify(x, null, 2))

test(parsed)
test(msgs)
test(parseFixMsg(msgs[0]))
