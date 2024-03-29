# 接口约定

## 编码
数据编码统一为 `utf-8`。

## 密钥
接口文档中提到的 `public key` & `private key`，都是指商户 `public key` & `private key`，可在商户后台密钥信息栏查看。

## 字段选填
对于接口参数标记为 `选填` 的字段，可传入具体的值或者空字符串。

## signature
为保障接口安全，系统端会对接收到的所有数据，使用 `signature` 匹配校验，防止数据被非法篡改。

对于 `signature` 的拼接规则，举个例子：如某个接口需要提交数据 `public key` 和 `coin_code` 两个字段，且 `public key` 值为 `123456`，`coin_code` 值为 `FAU`。根据 `signature` 的生成规则：`toLowerCase(md5(public key + coin_code))`，则最终提交的 `signature` 数据为：`toLowerCase(md5('123456FAU')) = 23032450e6d86f359819f017a94253a9`。

## 数据提交
对于有数据提交的接口，统一使用 `POST` 的方式（查询接口除外）。相关请求头的 `content-type` 字段为：
```shell:no-line-numbers
application/x-www-form-urlencoded
```

## 交易查询

如接口有返回 `hash` 字段，商户可前往以下波场区块链浏览器，查询交易详细信息。

### TRON 主网络
[https://tronscan.org](https://tronscan.org)

### TRON 测试网
[https://shasta.tronscan.org](https://shasta.tronscan.org)
