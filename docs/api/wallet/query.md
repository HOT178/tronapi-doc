# 账户查询

:::tip
商户可调用该接口，查询账户余额信息。
:::

## 接口地址

```shell:no-line-numbers
GET https://pro.tronapi.com/api/wallet/query
```

## 接口参数

参数名 | 含义 | 验证 | 类型 | 说明
:-|:-|:-|:-|:-
public_key | public key | 必填 | string(32) | 商户 public key。
signature | 签名串 | 必填 | string(32) | 安全校验签名串。

:::tip
`signature` 的生成规则为：`toLowerCase(md5(public key + private key))`。
:::

## 返回示例

```json:no-line-numbers
{   
    "success": true,
    "code": 200,
    "data": [{
        "coin_code": "FAU",
        "coin_amount": "1667.25"
    }, {
        "coin_code": "USDT",
        "coin_amount": "222.32"
    }]
}
```