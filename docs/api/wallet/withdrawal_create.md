# 提现申请

:::tip
商户可调用该接口，发起账户提现申请。
:::

## 接口地址

```shell:no-line-numbers
POST https://pro.tronapi.com/api/wallet/withdrawal
```

## 接口参数

参数名 | 含义 | 验证 | 类型 | 说明
:-|:-|:-|:-|:-
public_key | public key | 必填 | string(32) | 商户 `public key`。
coin_code | 提现币种 | 必填 | string(16) | 提现币种。支持 `USDT`、`FAU`。
amount | 提现金额 | 必填 | string(16) | 提现金额。精确到小数点后2位。
address | 提现地址 | 必填 | string(64) | 提现接收地址。以字母 `T` 开头。
notify_url | 提现成功后通知地址 | 选填 | string(256) | 1. 提现处理成功后，系统会发送一个 `post` 消息到这个地址。<br/>2. 该参数不需要 `urlencode`。例如：https://www.xxx.com/withdrawal_notify。<br/> 3. 商户也可统一在后台对该参数进行配置。
signature | 签名串 | 必填 | string(32) | 安全校验签名串。

:::tip
`signature` 的生成规则为：`toLowerCase(md5(coin_code + amount + address + notify_url + public key + private key))`。
:::

## 接口返回

参数名 | 含义 | 类型 | 说明
:-|:-|:-|:-
token | 官方 token | string(32) | 商户可使用该字段，调用 `提现查询` 接口，核实提现操作是否完成。
coin_code | 提现币种 | string(16) | 提现币种。`USDT` 或 `FAU`。
amount_submit | 提现申请金额 | string(16) | 提现申请金额。若为 `自动提现`，则为自动提现的触发 `阈值`。
amount_fee | 提现手续费金额 | string(16) | `提现手续费金额` = `提现申请金额` * `提现费率`
amount_send | 提现发送金额 | string(16) | `提现发送金额` = `提现申请金额` - `提现手续费金额`
address | 提现接收地址 | string(34) | 提现接收地址。以字母 `T` 开头。
rate | 提现费率 | float | 提现费率。
signature | 签名串 | string(32) | 安全校验签名串。

:::tip
`signature` 的生成规则为：`toLowerCase(md5(token + coin_code + amount_submit + amount_fee + amount_send + address + rate + private key))`。
:::

## 返回示例

```javascript:no-line-numbers
{
    "code": 200,
    "data": {
        "address": "TH5PbdUmU6k2XsunYy3TmqR6foo9BjCtax",
        "amount_fee": "10",
        "amount_send": "190",
        "amount_submit": "200",
        "coin_code": "FAU",
        "rate": 0.05,
        "signature": "59aa55a896c02166d47b331b3fed5ebc",
        "token": "28dbcc761e624ed89e7fbe9c5bf5c9b9"
    },
    "success": true
}
```