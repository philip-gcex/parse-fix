A basic FIX message parser

## Install

```sh
npm install parse-fix
```

## Example

```js
import { parseFixText, fixMessagesFromText, parseFixMsg } from 'parse-fix';
const fixText = `
127.0.0.1:55220 -> tcp -> some.server.com:8289
    8=FIX.4.49=9935=A34=149=MY_ORDERS52=20221112-00:57:16.86256=RECEIPIENT_SYSTEM98=0108=20141=Y554=password10=150
127.0.0.1:55220 <- tcp <- some.server.com:8289
    8=FIX.4.4\x019=00086\x0135=A\x0149=RECEIPIENT_SYSTEM\x0156=MY_ORDERS\x0134=1\x0152=20221112-00:57:17.090\x0198=0\x01108=20\x01141=Y\x0110=045\x01
127.0.0.1:55220 -> tcp -> some.server.com:8289
    8=FIX.4.4|9=68\x0135=5|34=2|49=MY_ORDERS|52=20221112-00:57:17.862|56=RECEIPIENT_SYSTEM|10=084|
`;

const parsed = parseFixText(fixText)
const msgsFromText = fixMessagesFromText(fixText)
const oneParsedMsg = parseFixMsg(msgsFromText[0])
```

`parseFixText` returns an array of objects with fix keys:
* `short` is a summary
* `parsed` is an array of field objects
* `byFieldName` is an object of field objects, by field name
* `byFieldNo` is an object of field objects, by field number
* `_raw` is the original FIX message

```json
[
  {
    "short": {
      "BeginString": "FIX.4.4",
      "BodyLength": "99",
      "MsgType": "LOGON",
      "MsgSeqNum": "1",
      "SenderCompID": "MY_ORDERS",
      "SendingTime": "20221112-00:57:16.862",
      "TargetCompID": "RECEIPIENT_SYSTEM",
      "EncryptMethod": "NONE_OTHER",
      "HeartBtInt": "20",
      "ResetSeqNumFlag": "Y",
      "Password": "password",
      "CheckSum": "150",
      "_raw": "8=FIX.4.4\u00019=99\u000135=A\u000134=1\u000149=MY_ORDERS\u000152=20221112-00:57:16.862\u000156=RECEIPIENT_SYSTEM\u000198=0\u0001108=20\u0001141=Y\u0001554=password\u000110=150\u0001"
    },
    "parsed": [
      {
        "fieldNo": "56",
        "value": "RECEIPIENT_SYSTEM",
        "fieldName": "TargetCompID"
      },
      {
        "fieldNo": "98",
        "value": "0",
        "fieldName": "EncryptMethod",
        "lookup": "NONE_OTHER"
      }
    ],
    "byFieldName": {
      "SenderCompID": {
        "fieldNo": "49",
        "value": "MY_ORDERS",
        "fieldName": "SenderCompID"
      },
      "EncryptMethod": {
        "fieldNo": "98",
        "value": "0",
        "fieldName": "EncryptMethod",
        "lookup": "NONE_OTHER"
      }
    },
    "byFieldNo": {
      "8": {
        "fieldNo": "8",
        "value": "FIX.4.4",
        "fieldName": "BeginString"
      },
      "35": {
        "fieldNo": "35",
        "value": "A",
        "fieldName": "MsgType",
        "lookup": "LOGON"
      }
    },
    "_raw": "8=FIX.4.4\u00019=99\u000135=A\u000134=1\u000149=MY_ORDERS\u000152=20221112-00:57:16.862\u000156=RECEIPIENT_SYSTEM\u000198=0\u0001108=20\u0001141=Y\u0001554=password\u000110=150\u0001"
  },
  // etc
]
```

`fixMessagesFromText` produces an array of unparsed FIX messages

```json
[
  "8=FIX.4.4\u00019=99\u000135=A\u000134=1\u000149=MY_ORDERS\u000152=20221112-00:57:16.862\u000156=RECEIPIENT_SYSTEM\u000198=0\u0001108=20\u0001141=Y\u0001554=password\u000110=150\u0001",
  "8=FIX.4.4\\x019=00086\\x0135=A\\x0149=RECEIPIENT_SYSTEM\\x0156=MY_ORDERS\\x0134=1\\x0152=20221112-00:57:17.090\\x0198=0\\x01108=20\\x01141=Y\\x0110=045\\x01",
  "8=FIX.4.4|9=68\\x0135=5|34=2|49=MY_ORDERS|52=20221112-00:57:17.862|56=RECEIPIENT_SYSTEM|10=084|"
]
```

`parseFixMsg` produces an array of field objects from one message string:

```json
[
  {
    "fieldNo": "8",
    "value": "FIX.4.4",
    "fieldName": "BeginString"
  },
  {
    "fieldNo": "9",
    "value": "99",
    "fieldName": "BodyLength"
  },
  {
    "fieldNo": "35",
    "value": "A",
    "fieldName": "MsgType",
    "lookup": "LOGON"
  },
  {
    "fieldNo": "34",
    "value": "1",
    "fieldName": "MsgSeqNum"
  },
  {
    "fieldNo": "49",
    "value": "MY_ORDERS",
    "fieldName": "SenderCompID"
  },
  {
    "fieldNo": "52",
    "value": "20221112-00:57:16.862",
    "fieldName": "SendingTime"
  },
  {
    "fieldNo": "56",
    "value": "RECEIPIENT_SYSTEM",
    "fieldName": "TargetCompID"
  },
  {
    "fieldNo": "98",
    "value": "0",
    "fieldName": "EncryptMethod",
    "lookup": "NONE_OTHER"
  },
  {
    "fieldNo": "108",
    "value": "20",
    "fieldName": "HeartBtInt"
  },
  {
    "fieldNo": "141",
    "value": "Y",
    "fieldName": "ResetSeqNumFlag"
  },
  {
    "fieldNo": "554",
    "value": "password",
    "fieldName": "Password"
  },
  {
    "fieldNo": "10",
    "value": "150",
    "fieldName": "CheckSum"
  }
]
```

## TODO

* Config object for settings
* Limitation of output fields for parseFixText
* Allow lookup override
* Error handling

## References

* [What is FIX?](https://www.fixtrading.org/what-is-fix/)
* NPM: https://www.npmjs.com/package/parse-fix