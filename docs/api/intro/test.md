# 如何测试？

## 说明

1. 商户可将 `FAU` 理解为测试环境（`shasta`）的 `USDT`。
2. 商户使用 `FAU` 开发联调通过后，上线时直接切换为 `USDT` 即可。
3. 测试流程可能需要 `翻墙软件` 的支持 :confounded:

## 准备工作

1. 使用 `chrome 浏览器`，并安装 `波宝钱包 tronlink` 浏览器插件。
2. 通过 `波宝钱包 tronlink` 浏览器插件，创建一个钱包账号。注意切换网络为 `shasta`。示例如下：

<img src="/images/tronlink.png" alt="" width="360"/>

3. 申请我们免费提供的测试 `FAU` 及 `TRX`。详情可参考：[水龙头](/api/intro/faucet)

## 测试流程

1. 调用接口创建一笔 `支付币种` 为 `FAU` 的订单。

:::tip
商户也可以直接使用我们提供的测试页面：[订单测试](https://pro.tronapi.com/tool/test)
:::

2. 订单创建成功后跳转至 `官方收银台` 或者商户自己的 `自定义收银台`，显示 `付款地址` & `付款金额`：

<img src="/images/cashier.png" alt="" width="360"/>

3. 浏览器打开 [https://shasta.tronscan.org](https://shasta.tronscan.org)。
4. 页面会自动连接钱包。连接成功后页面 `右上角` 会显示 `钱包地址`。

:::tip
如没有自动连接，请手动点击 `连接钱包`。
::: 

5. 选择 `转账`：

<img src="/images/tronlink-link.png" alt="" width="360"/>

6. 在转账弹出框中，输入步骤2中 `收银台` 显示的 `付款地址` & `付款金额`。同时 `通证` 下拉框中，选择 `FAU`：

<img src="/images/tronlink-send.png" alt="" width="360"/>

:::tip
1. 如 `通证` 下拉列表中没有 `FAU` 选项，请首先申请我们免费提供的测试 `FAU`。
2. 如提示账号余额不足，请首先申请我们免费提供的测试 `TRX`。
::: 

7. 转账成功后，等待几秒，系统会检测到相关交易并发送回调通知，`收银台` 也会自动跳转至指定的订单结果页。

8. 商户可通过交易 `hash`，查询交易对应的链上状态。查询地址：`https://shasta.tronscan.org/#/transaction/交易hash`：

<img src="/images/tronlink-result.png" alt="" width="720"/>




