# 订单查询

:::tip
该接口供商户主动查询订单状态。多用于商户自定义收银台的场景。
:::

## 接口地址

```shell:no-line-numbers
GET https://pro.tronapi.com/api/transaction/query
```

## 接口参数
参数名 | 含义 | 类型 | 说明
:-|:-|:-|:-
token | 官方 token | string(32) | 该参数可在订单创建接口的返回数据中获取。

## 接口返回

```json:no-line-numbers  
{
    "success": true,
    "code": 200,
    "data": {
        "status": "DONE",
        "message": "已完成"
    }
}
```

:::tip
完整的订单状态枚举列表，请参考：[订单状态](/api/intro/constant)
:::