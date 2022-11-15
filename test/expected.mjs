
export const expected = {
  parsed: [
    {
      short: {
        BeginString: 'FIX.4.4',
        BodyLength: '99',
        MsgType: 'LOGON',
        MsgSeqNum: '1',
        SenderCompID: 'MY_ORDERS',
        SendingTime: '20221112-00:57:16.862',
        TargetCompID: 'RECEIPIENT_SYSTEM',
        EncryptMethod: 'NONE_OTHER',
        HeartBtInt: '20',
        ResetSeqNumFlag: 'Y',
        Password: 'password',
        CheckSum: '150',
        _raw: '8=FIX.4.4\u00019=99\u000135=A\u000134=1\u000149=MY_ORDERS\u000152=20221112-00:57:16.862\u000156=RECEIPIENT_SYSTEM\u000198=0\u0001108=20\u0001141=Y\u0001554=password\u000110=150\u0001'
      },
      parsed: [
        {
          fieldNo: '8',
          value: 'FIX.4.4',
          fieldName: 'BeginString'
        },
        {
          fieldNo: '9',
          value: '99',
          fieldName: 'BodyLength'
        },
        {
          fieldNo: '35',
          value: 'A',
          fieldName: 'MsgType',
          lookup: 'LOGON'
        },
        {
          fieldNo: '34',
          value: '1',
          fieldName: 'MsgSeqNum'
        },
        {
          fieldNo: '49',
          value: 'MY_ORDERS',
          fieldName: 'SenderCompID'
        },
        {
          fieldNo: '52',
          value: '20221112-00:57:16.862',
          fieldName: 'SendingTime'
        },
        {
          fieldNo: '56',
          value: 'RECEIPIENT_SYSTEM',
          fieldName: 'TargetCompID'
        },
        {
          fieldNo: '98',
          value: '0',
          fieldName: 'EncryptMethod',
          lookup: 'NONE_OTHER'
        },
        {
          fieldNo: '108',
          value: '20',
          fieldName: 'HeartBtInt'
        },
        {
          fieldNo: '141',
          value: 'Y',
          fieldName: 'ResetSeqNumFlag'
        },
        {
          fieldNo: '554',
          value: 'password',
          fieldName: 'Password'
        },
        {
          fieldNo: '10',
          value: '150',
          fieldName: 'CheckSum'
        }
      ],
      byFieldName: {
        BeginString: {
          fieldNo: '8',
          value: 'FIX.4.4',
          fieldName: 'BeginString'
        },
        BodyLength: {
          fieldNo: '9',
          value: '99',
          fieldName: 'BodyLength'
        },
        MsgType: {
          fieldNo: '35',
          value: 'A',
          fieldName: 'MsgType',
          lookup: 'LOGON'
        },
        MsgSeqNum: {
          fieldNo: '34',
          value: '1',
          fieldName: 'MsgSeqNum'
        },
        SenderCompID: {
          fieldNo: '49',
          value: 'MY_ORDERS',
          fieldName: 'SenderCompID'
        },
        SendingTime: {
          fieldNo: '52',
          value: '20221112-00:57:16.862',
          fieldName: 'SendingTime'
        },
        TargetCompID: {
          fieldNo: '56',
          value: 'RECEIPIENT_SYSTEM',
          fieldName: 'TargetCompID'
        },
        EncryptMethod: {
          fieldNo: '98',
          value: '0',
          fieldName: 'EncryptMethod',
          lookup: 'NONE_OTHER'
        },
        HeartBtInt: {
          fieldNo: '108',
          value: '20',
          fieldName: 'HeartBtInt'
        },
        ResetSeqNumFlag: {
          fieldNo: '141',
          value: 'Y',
          fieldName: 'ResetSeqNumFlag'
        },
        Password: {
          fieldNo: '554',
          value: 'password',
          fieldName: 'Password'
        },
        CheckSum: {
          fieldNo: '10',
          value: '150',
          fieldName: 'CheckSum'
        }
      },
      byFieldNo: {
        8: {
          fieldNo: '8',
          value: 'FIX.4.4',
          fieldName: 'BeginString'
        },
        9: {
          fieldNo: '9',
          value: '99',
          fieldName: 'BodyLength'
        },
        10: {
          fieldNo: '10',
          value: '150',
          fieldName: 'CheckSum'
        },
        34: {
          fieldNo: '34',
          value: '1',
          fieldName: 'MsgSeqNum'
        },
        35: {
          fieldNo: '35',
          value: 'A',
          fieldName: 'MsgType',
          lookup: 'LOGON'
        },
        49: {
          fieldNo: '49',
          value: 'MY_ORDERS',
          fieldName: 'SenderCompID'
        },
        52: {
          fieldNo: '52',
          value: '20221112-00:57:16.862',
          fieldName: 'SendingTime'
        },
        56: {
          fieldNo: '56',
          value: 'RECEIPIENT_SYSTEM',
          fieldName: 'TargetCompID'
        },
        98: {
          fieldNo: '98',
          value: '0',
          fieldName: 'EncryptMethod',
          lookup: 'NONE_OTHER'
        },
        108: {
          fieldNo: '108',
          value: '20',
          fieldName: 'HeartBtInt'
        },
        141: {
          fieldNo: '141',
          value: 'Y',
          fieldName: 'ResetSeqNumFlag'
        },
        554: {
          fieldNo: '554',
          value: 'password',
          fieldName: 'Password'
        }
      },
      _raw: '8=FIX.4.4\u00019=99\u000135=A\u000134=1\u000149=MY_ORDERS\u000152=20221112-00:57:16.862\u000156=RECEIPIENT_SYSTEM\u000198=0\u0001108=20\u0001141=Y\u0001554=password\u000110=150\u0001'
    },
    {
      short: {
        BeginString: 'FIX.4.4',
        BodyLength: '00086',
        MsgType: 'LOGON',
        SenderCompID: 'RECEIPIENT_SYSTEM',
        TargetCompID: 'MY_ORDERS',
        MsgSeqNum: '1',
        SendingTime: '20221112-00:57:17.090',
        EncryptMethod: 'NONE_OTHER',
        HeartBtInt: '20',
        ResetSeqNumFlag: 'Y',
        CheckSum: '045',
        _raw: '8=FIX.4.4\\x019=00086\\x0135=A\\x0149=RECEIPIENT_SYSTEM\\x0156=MY_ORDERS\\x0134=1\\x0152=20221112-00:57:17.090\\x0198=0\\x01108=20\\x01141=Y\\x0110=045\\x01'
      },
      parsed: [
        {
          fieldNo: '8',
          value: 'FIX.4.4',
          fieldName: 'BeginString'
        },
        {
          fieldNo: '9',
          value: '00086',
          fieldName: 'BodyLength'
        },
        {
          fieldNo: '35',
          value: 'A',
          fieldName: 'MsgType',
          lookup: 'LOGON'
        },
        {
          fieldNo: '49',
          value: 'RECEIPIENT_SYSTEM',
          fieldName: 'SenderCompID'
        },
        {
          fieldNo: '56',
          value: 'MY_ORDERS',
          fieldName: 'TargetCompID'
        },
        {
          fieldNo: '34',
          value: '1',
          fieldName: 'MsgSeqNum'
        },
        {
          fieldNo: '52',
          value: '20221112-00:57:17.090',
          fieldName: 'SendingTime'
        },
        {
          fieldNo: '98',
          value: '0',
          fieldName: 'EncryptMethod',
          lookup: 'NONE_OTHER'
        },
        {
          fieldNo: '108',
          value: '20',
          fieldName: 'HeartBtInt'
        },
        {
          fieldNo: '141',
          value: 'Y',
          fieldName: 'ResetSeqNumFlag'
        },
        {
          fieldNo: '10',
          value: '045',
          fieldName: 'CheckSum'
        }
      ],
      byFieldName: {
        BeginString: {
          fieldNo: '8',
          value: 'FIX.4.4',
          fieldName: 'BeginString'
        },
        BodyLength: {
          fieldNo: '9',
          value: '00086',
          fieldName: 'BodyLength'
        },
        MsgType: {
          fieldNo: '35',
          value: 'A',
          fieldName: 'MsgType',
          lookup: 'LOGON'
        },
        SenderCompID: {
          fieldNo: '49',
          value: 'RECEIPIENT_SYSTEM',
          fieldName: 'SenderCompID'
        },
        TargetCompID: {
          fieldNo: '56',
          value: 'MY_ORDERS',
          fieldName: 'TargetCompID'
        },
        MsgSeqNum: {
          fieldNo: '34',
          value: '1',
          fieldName: 'MsgSeqNum'
        },
        SendingTime: {
          fieldNo: '52',
          value: '20221112-00:57:17.090',
          fieldName: 'SendingTime'
        },
        EncryptMethod: {
          fieldNo: '98',
          value: '0',
          fieldName: 'EncryptMethod',
          lookup: 'NONE_OTHER'
        },
        HeartBtInt: {
          fieldNo: '108',
          value: '20',
          fieldName: 'HeartBtInt'
        },
        ResetSeqNumFlag: {
          fieldNo: '141',
          value: 'Y',
          fieldName: 'ResetSeqNumFlag'
        },
        CheckSum: {
          fieldNo: '10',
          value: '045',
          fieldName: 'CheckSum'
        }
      },
      byFieldNo: {
        8: {
          fieldNo: '8',
          value: 'FIX.4.4',
          fieldName: 'BeginString'
        },
        9: {
          fieldNo: '9',
          value: '00086',
          fieldName: 'BodyLength'
        },
        10: {
          fieldNo: '10',
          value: '045',
          fieldName: 'CheckSum'
        },
        34: {
          fieldNo: '34',
          value: '1',
          fieldName: 'MsgSeqNum'
        },
        35: {
          fieldNo: '35',
          value: 'A',
          fieldName: 'MsgType',
          lookup: 'LOGON'
        },
        49: {
          fieldNo: '49',
          value: 'RECEIPIENT_SYSTEM',
          fieldName: 'SenderCompID'
        },
        52: {
          fieldNo: '52',
          value: '20221112-00:57:17.090',
          fieldName: 'SendingTime'
        },
        56: {
          fieldNo: '56',
          value: 'MY_ORDERS',
          fieldName: 'TargetCompID'
        },
        98: {
          fieldNo: '98',
          value: '0',
          fieldName: 'EncryptMethod',
          lookup: 'NONE_OTHER'
        },
        108: {
          fieldNo: '108',
          value: '20',
          fieldName: 'HeartBtInt'
        },
        141: {
          fieldNo: '141',
          value: 'Y',
          fieldName: 'ResetSeqNumFlag'
        }
      },
      _raw: '8=FIX.4.4\\x019=00086\\x0135=A\\x0149=RECEIPIENT_SYSTEM\\x0156=MY_ORDERS\\x0134=1\\x0152=20221112-00:57:17.090\\x0198=0\\x01108=20\\x01141=Y\\x0110=045\\x01'
    },
    {
      short: {
        BeginString: 'FIX.4.4',
        BodyLength: '68',
        MsgType: 'LOGOUT',
        MsgSeqNum: '2',
        SenderCompID: 'MY_ORDERS',
        SendingTime: '20221112-00:57:17.862',
        TargetCompID: 'RECEIPIENT_SYSTEM',
        CheckSum: '084',
        _raw: '8=FIX.4.4|9=68\\x0135=5|34=2|49=MY_ORDERS|52=20221112-00:57:17.862|56=RECEIPIENT_SYSTEM|10=084|'
      },
      parsed: [
        {
          fieldNo: '8',
          value: 'FIX.4.4',
          fieldName: 'BeginString'
        },
        {
          fieldNo: '9',
          value: '68',
          fieldName: 'BodyLength'
        },
        {
          fieldNo: '35',
          value: '5',
          fieldName: 'MsgType',
          lookup: 'LOGOUT'
        },
        {
          fieldNo: '34',
          value: '2',
          fieldName: 'MsgSeqNum'
        },
        {
          fieldNo: '49',
          value: 'MY_ORDERS',
          fieldName: 'SenderCompID'
        },
        {
          fieldNo: '52',
          value: '20221112-00:57:17.862',
          fieldName: 'SendingTime'
        },
        {
          fieldNo: '56',
          value: 'RECEIPIENT_SYSTEM',
          fieldName: 'TargetCompID'
        },
        {
          fieldNo: '10',
          value: '084',
          fieldName: 'CheckSum'
        }
      ],
      byFieldName: {
        BeginString: {
          fieldNo: '8',
          value: 'FIX.4.4',
          fieldName: 'BeginString'
        },
        BodyLength: {
          fieldNo: '9',
          value: '68',
          fieldName: 'BodyLength'
        },
        MsgType: {
          fieldNo: '35',
          value: '5',
          fieldName: 'MsgType',
          lookup: 'LOGOUT'
        },
        MsgSeqNum: {
          fieldNo: '34',
          value: '2',
          fieldName: 'MsgSeqNum'
        },
        SenderCompID: {
          fieldNo: '49',
          value: 'MY_ORDERS',
          fieldName: 'SenderCompID'
        },
        SendingTime: {
          fieldNo: '52',
          value: '20221112-00:57:17.862',
          fieldName: 'SendingTime'
        },
        TargetCompID: {
          fieldNo: '56',
          value: 'RECEIPIENT_SYSTEM',
          fieldName: 'TargetCompID'
        },
        CheckSum: {
          fieldNo: '10',
          value: '084',
          fieldName: 'CheckSum'
        }
      },
      byFieldNo: {
        8: {
          fieldNo: '8',
          value: 'FIX.4.4',
          fieldName: 'BeginString'
        },
        9: {
          fieldNo: '9',
          value: '68',
          fieldName: 'BodyLength'
        },
        10: {
          fieldNo: '10',
          value: '084',
          fieldName: 'CheckSum'
        },
        34: {
          fieldNo: '34',
          value: '2',
          fieldName: 'MsgSeqNum'
        },
        35: {
          fieldNo: '35',
          value: '5',
          fieldName: 'MsgType',
          lookup: 'LOGOUT'
        },
        49: {
          fieldNo: '49',
          value: 'MY_ORDERS',
          fieldName: 'SenderCompID'
        },
        52: {
          fieldNo: '52',
          value: '20221112-00:57:17.862',
          fieldName: 'SendingTime'
        },
        56: {
          fieldNo: '56',
          value: 'RECEIPIENT_SYSTEM',
          fieldName: 'TargetCompID'
        }
      },
      _raw: '8=FIX.4.4|9=68\\x0135=5|34=2|49=MY_ORDERS|52=20221112-00:57:17.862|56=RECEIPIENT_SYSTEM|10=084|'
    }
  ],
  msgs:
    [
      '8=FIX.4.4\u00019=99\u000135=A\u000134=1\u000149=MY_ORDERS\u000152=20221112-00:57:16.862\u000156=RECEIPIENT_SYSTEM\u000198=0\u0001108=20\u0001141=Y\u0001554=password\u000110=150\u0001',
      '8=FIX.4.4\\x019=00086\\x0135=A\\x0149=RECEIPIENT_SYSTEM\\x0156=MY_ORDERS\\x0134=1\\x0152=20221112-00:57:17.090\\x0198=0\\x01108=20\\x01141=Y\\x0110=045\\x01',
      '8=FIX.4.4|9=68\\x0135=5|34=2|49=MY_ORDERS|52=20221112-00:57:17.862|56=RECEIPIENT_SYSTEM|10=084|'
    ],
  msg: [
    {
      fieldNo: '8',
      value: 'FIX.4.4',
      fieldName: 'BeginString'
    },
    {
      fieldNo: '9',
      value: '99',
      fieldName: 'BodyLength'
    },
    {
      fieldNo: '35',
      value: 'A',
      fieldName: 'MsgType',
      lookup: 'LOGON'
    },
    {
      fieldNo: '34',
      value: '1',
      fieldName: 'MsgSeqNum'
    },
    {
      fieldNo: '49',
      value: 'MY_ORDERS',
      fieldName: 'SenderCompID'
    },
    {
      fieldNo: '52',
      value: '20221112-00:57:16.862',
      fieldName: 'SendingTime'
    },
    {
      fieldNo: '56',
      value: 'RECEIPIENT_SYSTEM',
      fieldName: 'TargetCompID'
    },
    {
      fieldNo: '98',
      value: '0',
      fieldName: 'EncryptMethod',
      lookup: 'NONE_OTHER'
    },
    {
      fieldNo: '108',
      value: '20',
      fieldName: 'HeartBtInt'
    },
    {
      fieldNo: '141',
      value: 'Y',
      fieldName: 'ResetSeqNumFlag'
    },
    {
      fieldNo: '554',
      value: 'password',
      fieldName: 'Password'
    },
    {
      fieldNo: '10',
      value: '150',
      fieldName: 'CheckSum'
    }
  ]
}
