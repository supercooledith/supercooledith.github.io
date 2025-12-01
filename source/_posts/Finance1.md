---
title: 布莱克-舒尔斯模型
date: 2025-11-11 22:13:15
categories: 人工智能杂谈
---
# 布莱克-舒尔斯模型（英语：Black-Scholes Model）

布莱克-舒尔斯模型（英语：Black-Scholes Model），简称BS模型，是一种数学模型，用来为金融衍生工具中的期权定价，由美国经济学家迈伦·舒尔斯与费希尔·布莱克首先提出。此模型适用于没有派发股息的欧式期权。罗伯特·C·墨顿其后修改了数学模型，使其于有派发股息时亦可使用，新模型被称为布莱克-舒尔斯-墨顿模型（英语：Black–Scholes–Merton model）。

此模型的应用是透过买卖价格过高或是过低的期权，并同时与持有的资产对冲，来消除可能潜在的风险，并因此而套利。此方法也被称为“动态 Delta中性”。此公式问世后带来了期权市场的繁荣，并且也是在投资银行与对冲基金中被广为使用的基础模型。

虽然在很多情况下被使用者进行一定的改动和修正。很多经验测试表明这个公式足够贴近市场价格，然而也有会出现差异的时候，如著名的“波动率的微笑”。然而它假设价格的变动，会符合正态分配（即俗称的钟形曲线），但在金融市场上经常出现符合统计学厚尾现象的事件，这影响此公式的有效性。

1997年，迈伦·舒尔斯和罗伯特·C·墨顿借该模型获得诺贝尔经济学奖。费希尔·布莱克不幸在1995年离世，因此未能获奖。

# 重要假设
BS模型假设金融市场存在最少一种风险资产（如股票）及一种无风险资产（现金或债券）。

假设金融资产是：
* 无风险资产的投资回报是不变的，此回报率称作无风险利率
* 股票价格遵从几何布朗运动（随机游走）
* 股票在期权有效期内不分派红利
* 股票价格服从对数正态分配，即金融资产的对数收益率服从正态分配

假设金融市场是：

* 不存在套利机会
* 能以无风险利率借出或借入任意数量的金钱
* 能买入及卖出（沽空）任意数量的股票
* 市场无摩擦，即不存在交易税收和交易成本

此外，假设期权是欧式期权，即只可在特定日期行权。

# 数学模型

## 符号

V(S,t)：欧式期权的理论价格

C(S,t)：认购期权的价格

P(S,t)：认沽期权的价格

ln()：自然对数

K：交割价格

S：即期价格（Spot）

τ：有效期

T：到期日

t：时间，以年为单位，例如0.5代表6个月

$${\displaystyle \tau =T-t}$$

r：连续复利计无风险利率

$${\displaystyle \sigma ^{2}}：年度化方差$$

$$N()：正态分布变量的累积分布函数$$

$${\displaystyle N(x)={\frac {1}{\sqrt {2\pi }}}\int _{-\infty }^{x}e^{-z^{2}/2}\,dz}$$

## 布莱克-舒尔斯方程
对于有效期内不派发红利的欧式期权，其价格遵从以下偏微分方程：

$${\displaystyle {\frac {\partial V}{\partial t}}+{\frac {1}{2}}\sigma ^{2}S^{2}{\frac {\partial ^{2}V}{\partial S^{2}}}+rS{\frac {\partial V}{\partial S}}-rV=0}$$

把方程重写成左右两边：

$${\displaystyle {\frac {\partial V}{\partial t}}+{\frac {1}{2}}\sigma ^{2}S^{2}{\frac {\partial ^{2}V}{\partial S^{2}}}=rV-rS{\frac {\partial V}{\partial S}}}$$

左方代表期权的时间值及与即期价格的凸性。右方代表期权长仓的无风险回报及
$${\displaystyle {\frac {\partial V}{\partial S}}}$$
股标的物短仓。

求解过程会变换成为一个热传导方程式。

## 公式
利用以下约束条件，可解认购期权（Call Option）的理论值。
$${\displaystyle {\begin{aligned}C(0,t)&=0{\text{ for all }}t\\C(S,t)&\rightarrow S{\text{ as }}S\rightarrow \infty \\C(S,T)&=\max\{S-K,0\}\end{aligned}}}$$
认购期权的理论价格是：

$${\displaystyle \displaystyle C(S,t)=N(d_{1})S-N(d_{2})Ke^{-r\tau }}$$
其中：

$${\displaystyle d_{1}={\begin{smallmatrix}\displaystyle {\frac {\ln \displaystyle {\frac {S}{K}}+\left(r+{\frac {\sigma ^{2}}{2}}\right){\tau }}{\sigma {\sqrt {\tau }}}}\end{smallmatrix}}}$$

 
$${\displaystyle d_{2}={\begin{smallmatrix}\displaystyle d_{1}-\sigma {\sqrt {\tau }}\end{smallmatrix}}}$$
利用相同的方法，也可解认沽期权的理论价格：

$${\displaystyle \displaystyle P(S,t)=N(-d_{2})Ke^{-r\tau }-N(-d_{1})S}$$
认购期权及认沽期权的理论价格都包含 

$${\displaystyle e^{-r\tau }}$$

，把交割价格K以连续复利折算为现值。

$${\displaystyle \displaystyle PV(K,t)=Ke^{-r\tau }}$$

## 派发股息的期权定价模型
布莱克-舒尔斯模型假定在期权有效期内标的股票不派发股息。若派发股息需改用布莱克-舒尔斯-墨顿模型，其公式如下：

$${\displaystyle \displaystyle C=S\times e^{-k\times t}\times N(d_{1})-e^{-r\times T}\times L\times N(d_{2})}$$

其中：
 
$${\displaystyle d_{1}={\begin{smallmatrix}\displaystyle {\frac {\ln \displaystyle {\frac {S}{L}}+\left(r-k+0.5\times \sigma ^{2}\right)\times {T}}{\sigma \times {\sqrt {T}}}}\end{smallmatrix}}}$$

 
$${\displaystyle d_{2}={\begin{smallmatrix}\displaystyle d_{1}-\sigma \times {\sqrt {T}}\end{smallmatrix}}}$$

k：表示标的股票的年股息收益率（假设股息连续支付，而不是离散分期支付）

Ln：自然对数；

C：期权初始合理价格；

L：期权交割价格；

S：交易所金融资产现价；

T：期权有效期；

r：连续复利计无风险利率Ｈ；

$${\displaystyle \sigma ^{2}}：年度化方差；$$

$$N()：正态分布变量的累积分布函数。$$



遵循 [《算法和高频交易》(Algorithmic and High-Frequency Trading) ](https://www.cambridge.org/us/universitypress/subjects/mathematics/mathematical-finance/algorithmic-and-high-frequency-trading?format=HB&isbn=9781107091146)一书中的算法和高频交易模拟方法，并使用来自 [Market Making at the Touch with Short-Term Alpha](https://gist.github.com/sebjai/c6ff3850dea37d28d3fa7d3aef59722b) 的代码样本，可以选择一组随机过程并为用户提高及时性，如定时图表中报告的那样。 [Buy Low, Sell High: A High Frequency Trading Perspective](https://dl.acm.org/doi/abs/10.1137/130911196) 是一个从量化角度来看，高频交易视角对于这些高频市场已解决的整体问题而言，是一个非常易于理解的替代方案。 

对于过去的中价流程，高频限价订单和市价订单流程的新最佳实践模拟遵循《金融随机微积分 II》(Stochastic Calculus for Finance II) 一书中所述的方法。在检查订单记录时，流程的数量要多得多，并且与高频交易对手参与者的复杂程度有关。如需了解正态分布和对数收益对蒙特卡罗模拟市场实际价格行为的建模效果，请参阅《使用 R 进行金融分析》(Financial Analytics with R) 一书。
算法和高频交易 提供的深入分析详细说明了动态编程优化目标。将这种更复杂的模拟以亚秒级粒度扩展到交易日，即使在多核 CPU 上也难以计算，根据本文中提供的结果，最好使用 GPU 提供的加速来完成。

https://www.berkshirehathaway.com/news/nov1025.pdf