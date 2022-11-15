// A basic fix message parser
import {
  reduce, pipe, split, map, filter,
  head, groupBy, prop, assoc, path, isNil
} from 'ramda'
import { fixLookup } from './fixLookup.mjs'

// should be config object
const delim = '(?:\\||\\x01|\\\\x01)'
const fixMsgRe = new RegExp(`8=FIX\\..*?${delim}10=\\d+${delim}`, 'g')
const getFieldName = ({ fieldNo }) => path([fieldNo,'desc'],fixLookup)
const getValueLookup = ({ fieldNo, value }) => path([fieldNo,'enum',value],fixLookup)

const asSingle = arr => arr.length === 1 ? arr[0] : arr
const groupByProp = field => obj => map(asSingle, groupBy(prop(field), obj))

const addParsedToRawMsg = _raw => ({ _raw, parsed: parseFixMsg(_raw) })
const structureParsedMsg = ({ _raw, parsed }) => ({
  short: pipe(
    reduce((acc, { fieldName, lookup, value }) => {
      acc[fieldName] = isNil(lookup) ? lookup : value
      return acc
    }, {}),
    assoc('_raw', _raw)   // _raw as last property
  )(parsed),
  parsed,
  byFieldName: groupByProp('fieldName')(parsed),
  byFieldNo: groupByProp('fieldNo')(parsed),
  _raw,
})

export const parseFixMsg = pipe(
  split(new RegExp(delim, 'g')),
  filter(x => x !== ''),
  map(pipe(
    split('='),
    ([fieldNo, value]) => ({
      fieldNo,
      value,
      fieldName: getFieldName({ fieldNo }),
      lookup: getValueLookup({ fieldNo, value })
    })
  ))
)

export const fixMessagesFromText = pipe(
  x => x.matchAll(fixMsgRe),
  Array.from,
  map(head)
)

export const parseFixText = pipe(
  fixMessagesFromText,
  map(pipe(
    addParsedToRawMsg,
    structureParsedMsg
  ))
)
