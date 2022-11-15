import { parseFixText } from './parseFix.mjs'
import { promises as fs } from 'fs'

const text = await fs.readFile('./test/test.log').then(r => r.toString('ascii'))
console.log(text)
const res = parseFixText(text)

console.log(JSON.stringify(res, null, 2))
