# 提现查询

:::tip
该接口供商户主动查询提现状态。
:::

## 接口地址

```shell:no-line-numbers
GET https://pro.tronapi.com/api/wallet/withdrawal/query
```

## 接口参数
参数名 | 含义 | 类型 | 说明
:-|:-|:-|:-
token | 官方 token | string(32) | 该参数可在提现申请接口的返回数据中获取。

## 接口返回

```json:no-line-numbers  
{
    "success": true,
    "code": 200,
    "data": true
}
```

:::tip
1. 当 `data == true` 时，代表提现操作已处理完成。
2. 当 `data == false` 时，代表提现操作正在处理中。
:::
