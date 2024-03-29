---
sidebarDepth: 1
---

# 常见问题

## 在吗？:raising_hand:

在的。只要这个页面可以访问，我们就在，服务就是稳定运行状态 :rocket:

## 如何收费？

我们不收取服务开通费用，不收取包月费用，不收取资金归集费用，仅收取 `5%` 的交易手续费，商户提现时一次性扣除。

## 手续费能否优惠？

不能。系统有资金归集的过程，且资金归集的 `trx` 成本会随着区块链行情浮动。目前收取的 `5%` 的交易手续费，基本上刚好抵消系统的运营成本。如果你发现有平台能提供 `1%` 的服务，请想一想为什么这么便宜 :face_with_rolling_eyes:

## 如何提现？

目前有三种提现方式：
1. 在商户后台手动操作提现。
2. 商户可配置 `自动提现`，当账号余额达到设置的 `阈值` 时，会自动向指定的 `地址` 进行提现转账。
3. 商户也可以通过调用 `提现接口`，更加灵活的进行提现操作。

## 是否支持批量提现？

不支持。这个功能其实没有什么鸟用 :dog:

## 你们跑路了怎么办 :angry:

如果担心我们跑路，你可以配置 `自动提现`。详情可参考：[自动提现](/api/wallet/withdrawal_auto)

## 为什么需要提现？

对于数字货币收款，涉及到收款地址和钱包的概念，同时为了保障收款的匿名性，每笔收款都会关联到不同的收款地址，因此系统还会有一个资金归集的过程。这些偏技术的复杂概念如果抛给商户，会造成商户的理解和操作成本直线上升，也必将造成极大的安全隐患。因此我们屏蔽了这些复杂性，由平台进行集中处理，后续再由商户操作提现即可。

## 用户付款了，为什么没有回调？

请参考文档：[部分付款](/api/intro/partial)。另外，请确保你接收回调的服务可 `公网访问`。

## 如何自定义收银台页面？

`订单创建` 接口会返回完整的支付数据，商户可根据自身业务诉求进行收银台的自定义。

## 如何测试？

请参考文档：[如何测试](/api/intro/test)

## 如何将 `USDT` 兑换为法币？

法币兑换涉及到银行卡或第三方支付软件的身份信息，为了保障平台的隐私安全，我们不提供法币兑换服务。你可以在平台操作提现后，到交易所进行法币兑换。

## 用户如何支付？

用户在商户端下单后进入收银台，可使用任意波场（Tron）钱包进行支付，或直接通过交易所转账功能进行转账。波场官方推荐钱包列表可参考：[https://tron.network/wallet](https://tron.network/wallet)。

## 用户支付是否要收取手续费？

我们不会收取。用户如果通过交易所或钱包进行转账付款，可能会收取 :hammer:

## 用户支付成功后，是实时回调吗？

是的。利益于波场网络无与伦比的运行效率，我们目前可以做到秒级回调。详情可参考波场官方针对 `USDT.TRC20` 的说明：[https://tron.network/usdt](https://tron.network/usdt)。
## 支付率和成功率怎么样？

所谓支付率，即用户进入支付页面，有支付行为的比率，鉴于目前数字货币的普及情况，支付率大概在 `30%` 左右。而成功率，即用户钱包余额充足，支付后平台成功处理并自动回调的比率，目前我们的成功率在 `99.32%`。

## 如何保障隐私安全？:diving_mask:

我们不会收集和存储任何可关联到商户的敏感数据，包括但不限于商户个人信息、银行卡账号、IP地址、访问时间、浏览器头信息等。

## 如何找回账户密码？

密码找回功能需要关联商户的手机号码或者电子邮箱地址，为了保障平台的匿名性和安全性，我们不提供密码找回服务。为了避免不必要的麻烦，请妥善保管你的账号信息。极端情况请联系官方客服人员。

## USDT.TRC20、USDT.ERC20、USDT.Omni 有什么区别，傻傻分不清楚？

`USDT.TRC20` 基于波场网络，`USDT.ERC20` 基于以太坊网络，`USDT.Omni` 基于比特币网络。三者在交易所内并没有差别，但在链上互不相通。另外，`USDT.ERC20`、`USDT.Omni` 目前转账速度比较慢（通过需要几分钟），同时需要的矿工费也比较高昂（通常需要几美刀），而 `USDT.TRC20` 可以实现秒级到账，且转账仅需要几毛钱的手续费。

## 有没有接入示例 Demo？

暂时没有。

## 有没有客服？:couple:

可通过页面 `右下角` 反馈入口和我们进行即时联系。

## 技术对接时遇到问题怎么办？

首先请优先阅读我们的接入文档。如果问题刁钻无法解决:skull:，可通过页面 `右下角` 反馈入口与我们进行联系。
