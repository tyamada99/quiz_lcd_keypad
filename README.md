# ＬＣＤと４×３キーパッド作成キットを使ったクイズのサンプリ
秋月の16X2の液晶ディスプレイ」[AE-AQM1602A(KIT)](https://akizukidenshi.com/catalog/g/gK-08896/)と４×３キーパッド作成キット：[AE-KIT45-KEYPAD4X3](https://akizukidenshi.com/catalog/g/gK-12229/)を使ってクイズを出題するサンプルプログラムです。Micro:bitとの接続には、秋月のブレイクアウトボード：[AE-MBIT-BREAKOUT-V](https://akizukidenshi.com/catalog/g/gK-14191/)を使いました。
ＬＣＤ、キーパッドともに[MakeCode](https://makecode.microbit.org/)の拡張機能を見つけられなかったので、関数でゴリゴリに書いています。
また、キーパッドから２文字目を取得しようとすると、同じキーのリピートみたいになってしまうので、キーを離したことを検知する必要があり、大変なので、ここではあきらめて１文字だけ取得するようにしています。

## 接続
### 液晶ディスプレイの接続
液晶ディスプレイとの接続は、以下の通りです。

|micro:bit|LCD   |
|---------|------|
|3V|V+|
|P19|SCL|
|P20|SDA|
|GND|GND|

### キーパッドとの接続
キーパッドとの接続は、以下の通りにしました。

|micro:bit|キーパッド|
|---------|------|
|P0|X|
|P1|Y|
|P2|Z|
|P13|A|
|P14|B|
|P15|C|
|P16|D|

### 接続図
上記の通り接続すると、以下のようなイメージになります。
![接続図](/.github/images/connection.png)

## 使い方
電源を入れると問題が出題されるので、ボタンを押すと、正解か間違いかを画面と音で知らせます。

「最初だけ」のブロックの中の「問題」と「答え」の配列を変更したり増やしたりして見てください。


## このプロジェクトを編集します

MakeCode でこのリポジトリを編集します。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **読み込む** をクリックし、 **URLから読み込む...** をクリックしてください
* **https://github.com/tyamada99/quiz_lcd_keypad** を貼り付けてインポートをクリックしてください

## ブロックのプレビュー

この画像はマスター内の最後のコミットからのブロックコードを示しています。
このイメージは更新に数分かかる場合があります。

![生成されたブロック](https://github.com/tyamada99/quiz_lcd_keypad/raw/master/.github/makecode/blocks.png)

