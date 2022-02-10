# 提现通知

:::tip
商户的提现申请到账后，系统会自动向商户指定的回调地址（`notify_url`）发送通知信息，告知提现申请已处理完毕。
:::

## 通知地址

```shell:no-line-numbers
POST notify_url（商户在提现创建接口中指定）
```

## 通知参数

参数名 | 含义 | 类型 | 说明
:-|:-|:-|:-
token | 官方 token | string(32) | 商户可使用该字段，调用 `提现查询` 接口，核实提现操作是否完成。
hash | 交易 hash | string(128) | 提现操作的交易 `hash`。商户可打开区块链浏览器查询交易详情。
coin_code | 提现币种 | string(16) | 提现币种
address | 提现接收地址 | string(64) | 提现接收地址
amount_submit | 提现申请金额 | float | 提现申请金额。若为 `自动提现`，则为自动提现的触发 `阈值`。
amount_fee | 提现手续费金额 | float | 提现申请金额。`提现手续费金额` = `提现申请金额` * `提现费率`
amount_send | 提现接收金额 | float | 提现接收金额。`提现接收金额` = `提现申请金额` - `提现手续费金额`
rate | 商户费率 | float | 商户账户费率
signature | 签名串 | string(32) | 安全校验签名串。

:::tip
`signature` 的生成规则为：`toLowerCase(md5(token + hash + coin_code + address + amount_submit + amount_fee + amount_send + rate  + private key))`。
:::

## 通知示例

```json:no-line-numbers
{
  "token": "1aa8ab503e2349f08b13e9164bb9c24e",
  "hash": "af284c612703fa77165519adb88662254379288f45e54fefcab1d2a9a7857521",
  "coin_code": "FAU",
  "address": "TU7SKo3dKs4iBLgN9k6rjM7zxwxH2sx85U",
  "amount_submit": "125.60",
  "amount_fee": "6.28",
  "amount_send": "119.32",
  "rate": 0.05,
  "remark": "自动提现",
  "signature": "fe8ccbfa3ed6c16e7a8605b5a0e85223"
}
```
    
## 通知重试

系统向商户提现申请时指定的 `notify_url` 发送 `回调通知` 后，如该 `notify_url` 返回的 `http` 状态码不为 `200`，则系统会触发 `重试机制`。相关规则如下：

1. 间隔 `30秒` 会进行第1次重试。
2. 如第一次重试仍为失败，则间隔 `10分钟` 会进行第2次重试。

:::tip
商户也可在后台 `提现详情` 页面，动手触发 `回调通知`。
:::