function 画面消去 () {
    コマンド送信(1)
    コマンド送信(0)
}
function コマンド送信 (コマンド: number) {
    pins.i2cWriteNumber(
    62,
    0 + コマンド,
    NumberFormat.UInt16BE,
    false
    )
    basic.pause(20)
}
function テキスト表示 (テキスト: string, 行数: number) {
    if (行数 == 2) {
        コマンド送信(192)
    } else {
        コマンド送信(128)
    }
    for (let カウンター = 0; カウンター <= テキスト.length; カウンター++) {
        文字 = テキスト.charAt(カウンター)
        pins.i2cWriteNumber(
        62,
        16384 + 文字.charCodeAt(0),
        NumberFormat.UInt16BE,
        false
        )
    }
}
function LCD初期化 () {
    basic.pause(100)
    コマンド送信(56)
    コマンド送信(57)
    コマンド送信(20)
    コマンド送信(115)
    コマンド送信(86)
    コマンド送信(108)
    コマンド送信(56)
    コマンド送信(1)
    コマンド送信(12)
}
function キー入力 () {
    入力 = ""
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    while (入力 == "") {
        pins.digitalWritePin(DigitalPin.P16, 1)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            入力 = "1"
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            入力 = "2"
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            入力 = "3"
        } else {
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P15, 1)
            if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                入力 = "4"
            } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                入力 = "5"
            } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                入力 = "6"
            } else {
                pins.digitalWritePin(DigitalPin.P15, 0)
                pins.digitalWritePin(DigitalPin.P14, 1)
                if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                    入力 = "7"
                } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                    入力 = "8"
                } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                    入力 = "9"
                } else {
                    pins.digitalWritePin(DigitalPin.P14, 0)
                    pins.digitalWritePin(DigitalPin.P13, 1)
                    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                        入力 = "*"
                    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                        入力 = "0"
                    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                        入力 = "#"
                    } else {
                        pins.digitalWritePin(DigitalPin.P13, 0)
                    }
                }
            }
        }
        basic.pause(10)
    }
    return 入力
}
let 入力 = ""
let 文字 = ""
let 答え: string[] = []
let 問題: string[] = []
LCD初期化()
問題[0] = "1+1="
答え[0] = "2"
問題[1] = "2+2="
答え[1] = "4"
let 問題数 = 問題.length
basic.forever(function () {
    for (let 何問目 = 0; 何問目 <= 問題数 - 1; 何問目++) {
        画面消去()
        テキスト表示(問題[何問目], 1)
        入力 = キー入力()
        if (入力 == 答え[何問目]) {
            テキスト表示("" + 入力 + " SEIKAI!!", 2)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
        } else {
            テキスト表示("" + 入力 + " X Answer " + 答え[何問目], 2)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        }
        basic.pause(500)
    }
})
