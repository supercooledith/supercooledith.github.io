---
title: 基于Gemini的多Agent自主crypto交易系统
date: 2025-11-25 22:13:15
categories: 人工智能杂谈
---
# Gemini3引爆网络

最近大家有没有被Gemini3爆炸好的性能刷屏？比如我就刷到有用gemini 0代码24小时内开发了一个十分惊艳的粒子效果语音交互日记APP：🔗：25小时没睡，一句代码不会写，做了个语音交互应用 http://xhslink.com/o/262wmkVh2Wj 

这样的产品，简直就是视听的双重享受！紧随这位博主的步伐，我也准备开发类似的APP，请期待我的后续文章！！

![](https://cdn.jsdelivr.net/gh/supercooledith/website_picture@main/%E6%88%AA%E5%B1%8F2025-11-25%2012.07.18.png)

# 基于Gemini的多Agent自主crypto交易系统
话归题目，说到本文标题里写到的基于Gemini的多Agent自主crypto交易系统。这个项目其实我从今年5月就开始接触了，那是一次参加北大举办的ETH 黑客松线下活动，当时我报名参与的小组就是想做一个**基于大模型的crypto自动分析交易AI agent**。

当时参赛队伍里有几位正在加密交易所工作的前后端程序员，还有一位线上未到现场的负责串联agent部分的个人开发者，还有浙大和香港理工大学的在读硕士生，还有我这个新手小白。当时我们一起开了很多次会议，从agent协议到模型选型，从web3交易链条到trading bot选型，当时我负责trading bot，也就是得到策略后执行交易步骤机器人这个部分的工作。

比赛时间比较短，当时我们只做了原形demo出来没有完成全部功能的实现，后续大家也四散东西，回归工作和生活，直到...昨晚我刷到了[cryptomind](https://github.com/164149043/cryptomind)
这个项目！惊为天人，这不就是当时我们想做的吗！！然后这样还在5月份需要多环节多人合作的项目，竟然在11月就完全可以通过大模型0代码的方式来实现了！我再一次被大模型进化的速度震惊。

接下来让我们一起看看这个项目吧！

![](https://cdn.jsdelivr.net/gh/supercooledith/website_picture@main/%E6%88%AA%E5%B1%8F2025-11-25%2011.36.04.png)

## 核心功能

*   **多智能体分层架构** : 
    *   **第1层 (分析师)** : 短线、趋势、量化、链上、宏观分析师并行工作，从不同维度解析市场。
    *   **第2层 (经理)** : 技术经理和基本面经理汇总下属报告，解决观点冲突。
    *   **第3层 (风控)** : 风控经理计算盈亏比 (R:R)，拥有“一票否决权”，确保交易安全。
    *   **第4层 (CEO)** : 综合所有信息，输出最终的 JSON 交易指令（开多/开空/观望）。
*   **实时数据集成**: 
    *   集成 **Binance API** 获取实时 K 线、订单簿深度（Order Book）和资金费率。
    *   集成 **Etherscan API** 获取实时 ETH Gas 价格，辅助判断链上热度。
*   **双模型切换**: 用户可以在界面上一键切换使用 Google Gemini 或 DeepSeek 模型。
*   **交互式 UI**: 
    *   包含技术指标（SMA, Bollinger Bands）的实时 K 线图表。
    *   可视化的智能体思维链（Chain of Thought）展示。
    *   持仓管理模拟: 输入你的持仓成本，AI 会给出针对性的建议。

## 技术栈

*   **前端框架** : React 19, TypeScript
*   **样式库** : Tailwind CSS
*   **图表库** : Recharts
*   **AI SDK** : Google GenAI SDK (`@google/genai`), Fetch API (DeepSeek)
*   **数据源** : Binance API (Market Data), Etherscan API (On-Chain Data)

## 部署与运行

### 1. 环境准备

确保你的本地环境已安装: 
*   [Node.js](https://nodejs.org/) (推荐 v16 或更高版本)
*   npm 或 yarn

### 2. 获取代码

```bash
git clone <repository-url>
cd cryptomind-ai
```

### 3. 安装依赖

```bash
npm install
```

### 4. 配置 API Key

```bash
npm run dev
# 本地启动命令
```

启动成功后，打开浏览器访问 `http://localhost:3000`（具体端口请查看控制台输出）。

## 使用指南

1.  **选择语言与模型**：点击右上角的语言按钮切换中/英，点击“Gemini”或“DeepSeek”切换底层模型。
2.  **输入标的**：在顶部输入框输入交易对（如 `BTCUSDT`, `ETHUSDT`, `SOLUSDT`）。
3.  **设置持仓（可选）**：点击控制面板中的“设置持仓”，输入你当前的开仓价格和方向。AI 会在分析时考虑到你的持仓风险。
4.  **开始运行**：点击右侧的 **"开始市场分析"** 按钮。
5.  **查看结果**：
    *   观察右侧的智能体节点依次亮起，它们会实时打字输出分析逻辑。
    *   等待 CEO 输出最终决策弹窗。
    *   点击右上角的设置图标，可以填入 **Etherscan Key** 以启用链上数据分析，或调整每个智能体的“随机性”（Temperature）。

## 目录结构说明

```
/
├── components/      # UI 组件 (Header, Chart, AgentNode, Modals 等)
├── hooks/           # 核心业务逻辑 Hooks (useAgentWorkflow)
├── services/        # API 服务层
│   ├── binanceService.ts  # 币安行情数据
│   ├── etherscanService.ts # 链上 Gas 数据
│   ├── geminiService.ts    # Google Gemini 调用封装
│   ├── deepseekService.ts  # DeepSeek 调用封装
│   └── prompts.ts          # AI 提示词工程与技术指标计算
├── types.ts         # TypeScript 类型定义
├── locales.ts       # 多语言翻译文件
├── constants.ts     # 智能体角色定义与默认配置
├── App.tsx          # 主应用入口组件
└── index.tsx        # React 挂载点
```
## 使用效果

输入当前交易持仓

![](https://cdn.jsdelivr.net/gh/supercooledith/website_picture@main/%E6%88%AA%E5%B1%8F2025-11-25%2011.35.39.png)

接下来就是等待专业团队为你生成买入/观望/卖出的交易策略建议

### 第一层：专项分析
#### 短期分析师：
【看跌】价格在[T-0]暴跌至2910.2，伴随巨量90945和RSI=9.6极度超卖，确认卖方主导。流动性扫荡下破近期支撑，无明确看涨形态。当前价位（2910）远离多头入场点4577，头寸已深度亏损，但清算价1000无即时风险。若价格反弹突破3000（前支撑转阻力），则看跌观点失效。建议立即减仓或平仓止损，避免进一步亏损。

#### 趋势分析师：
【硬核分析】市场结构明确下降：价格形成更低高点（3360）和更低低点（2910），且持续低于SMA(20)=3321，确认熊市。关键阻力在3350-3360供应区，当前2910逼近2900支撑但无反转信号。路径最小阻力向下，RSI超卖但趋势压倒性看跌。

**紧急警告**：您的多头仓位（入场4577）与趋势严重背离，建议立即平仓止损。

#### 量化分析师：
基于技术指标分析：当前价格2910.2远低于布林带下轨（3132.44），RSI为9.6（极端超卖），显示强烈均值回归信号。历史数据中RSI低于30常伴随反弹。价格趋势虽下行，但统计概率支持短期反弹。

**概率评分**：当前下降趋势继续概率仅20%，反弹概率高。  
**建议**：持有仓位，可考虑逢低加仓，严格止损于2800以下。

#### 链上分析师：
基于数据，ETHUSDT在[T-0]出现异常高成交量（90945）伴随价格下跌至2910.2，RSI极度超卖（9.6），符合“高成交量+小蜡烛体”分布特征，表明鲸鱼正恐慌性抛售。整体趋势向下，未见积累迹象。用户LONG仓位入场价4577.19远高于当前价，风险极高，建议立即减仓或平仓以避免进一步亏损。

#### 宏观分析师：
当前市场环境为**Risk-Off**（风险规避）。ETHUSDT在最后一小时从3350暴跌至2910，跌幅超12%，RSI跌至9.6的极端超卖区间，价格远低于布林带下轨和SMA(20)。这种崩盘式下跌表明加密货币出现独立恐慌性抛售，与潜在流动性收紧相关。

**仓位警告**：你的多头入场价4577.19远高于当前价2910，趋势完全反向。立即平仓止损，避免进一步亏损。反弹皆是离场机会。

### 第二层：策略管理
#### 技术分析经理：
【综合技术计划】主要偏见：空头。关键区域：2900支撑与3000阻力。价格超卖可能引发短期反弹至3000，但趋势结构明确向下，且仓位深度亏损。建议利用反弹至3000附近果断平仓多头，严格止损于2800以下，避免趋势延续风险。量化反弹概率虽高，但趋势压倒性，需优先止损保本。

#### 基本面分析经理：
综合链上与宏观数据：市场处于风险规避模式，鲸鱼恐慌性抛售导致ETH价格暴跌至2910，RSI极端超卖（9.6），趋势明确向下。你的多头仓位入场价4577.19远高于现价，且无积累迹象，风险极高。立即平仓止损，避免扩大亏损。

**交易质量：低**

### 第三层：风控审计
#### 风控总监
风险报告：基于当前价2910，止损设于2800，止盈目标3000，计算R:R比率为0.8（90点收益/110点风险）。该比率低于最低要求1.5，且现有多头仓位入场价4577.19远高于现价，趋势向下，深度亏损。清算价1000虽未逼近，但风险极高。  
结论: REJECTED - BAD R:R。建议立即平仓止损。

### 第四层：执行决策
#### 总经理 (CEO)
决策: WAIT
置信度: 20%
理由: 风险经理裁决为REJECTED，因R:R比率0.8低于最低要求1.5。基本面经理指出贸易质量低，市场处于风险规避模式且趋势向下。权衡分析显示，尽管技术面有超卖反弹可能，但宏观风险和差R:R比率使得持有现有多头头寸风险极高，建议利用反弹至3000附近果断平仓止损。确认关键水平：入场价4577.19、止损2800、止盈3000。

![](https://cdn.jsdelivr.net/gh/supercooledith/website_picture@main/%E6%88%AA%E5%B1%8F2025-11-25%2011.44.06.png)


这简直就是**专业团队**！

![](https://cdn.jsdelivr.net/gh/supercooledith/website_picture@main/3631764056228_.pic_hd.jpg)


## 执行交易机器人
有了交易策略该怎做，下一步你需要一个机器人来帮你执行交易。

当时我在黑客松队伍里负责的就是执行交易机器人这个部分，我们做了几个横向交易机器人调研，如Freqtrade, Jesse, Hummingbot，VectorBT, Backtrader，Trading Strategy等等。

hummingbot完全免费开源，代码透明，完全可控；本地运行，API 更安全，还具有深度定制可能，并且专门为交易所设计
Hummingbot 对 Binance 的支持最完善，与 Binance API 深度集成，连接稳定，特别适合在 Binance 这种高流动性交易所运行做市策略，如跨市套利 (Cross-exchange Market Making)、纯做市 (Pure Market Making) 、现货-期货套利 (Spot-Futures Arbitrage)等等。


总结来说，Hummingbot 的优势：
```bash
cost = "免费"
transparency = "完全开源"
security = "本地运行"
customization = "无限可能"
```

hummingbot：https://hummingbot.org
https://hummingbot.org/docs/#strategies

### 生成BINANCE API 密钥
https://hummingbot.org/exchanges/binance/#generate-api-keys

SHIFT + RMB（鼠标右键）

### 将 API 密钥连接到 Hummingbot
在 Hummingbot 中，运行我们要连接的交易所的 connect 命令。在这种情况下，对于 Binance，请使用以下命令 -
```bash
connect binance
```

进一步会输入密钥：
```bash
>>> connect binance

Enter your binance API key >>>
Enter your binance secret key >>>
```

如果连接成功会显示：You are now connected to binance

### 创建交易策略脚本配置 
首先，我们创建一个定义关键策略参数的脚本配置文件。

启动 Hummingbot 并执行以下命令以生成您的脚本配置：
```bash
create --script-config v2_directional_rsi
```
此命令使用本地 /scripts 目录中的可配置脚本子集自动完成。

系统将提示您指定策略参数，然后将其保存在 conf/scripts 目录下的 YAML 文件中：
```bash
Exchange where the bot will trade >> hyperliquid_perpetual
Trading pair where the bot will trade >> ETH-USD
Candles exchange used to calculate RSI >> binance_perpetual
Candles trading pair used to calculate RSI >> ETH-USDT
Candle interval (e.g. 1m for 1 minute) >> 1m
Number of candles used to calculate RSI (e.g. 60) >> 60
RSI lower bound to enter long position (e.g. 30) >> 30
RSI upper bound to enter short position (e.g. 70) >> 70
Order amount in quote asset >> 30
Leverage (e.g. 10 for 10x) >> 10
Position mode (HEDGE/ONEWAY) >> ONEWAY
Enter a new file name for your configuration >> conf_v2_directional_rsi_1.yml
```
#### 参数介绍
```bash
Enter the total amount in quote asset to use for trading (e.g., 1000): >>> 100
Enter the connector name (e.g..binance perpetual): >>> binance perpetual
Enter the trading pair to trade on(e.g., WLD-USDT): >>> ETH-USDT 
Enter a comma-separated list of buy spreads (e.g., '0.01, 0.02'): >>> 0.01,0.02
Enter a comma-separated list of sell spreads (e.g., '0.01, 0.02'): >>> 0.01,0.02
Enter a comma-separated list of buy amounts as percentages (e.g., '58, 50'), or leave blank to distribute equally: >>> 20,80
Enter a comma-separated list of sell amounts as percentages (e.g., '50, 50'), or leave blank to distribute equally: >>> 30,7
Enter the refresh time in seconds for executors (e.g., 300 for 5 minutes): >>> 60
Enter the cooldown time in seconds between replacing an executor that traded (e.g., 15): >>> 15
Enter the leverage to use for trading (e.g., 20 for 20x leverage). Set it to 1 for spot trading: >>> 20
Enter the stop loss （as a decimal ,e.g.,0.03 for 3%): >>> 0.03
Enter the take profit （as a decimal ,e.g.,0.02 for 2%): >>> 0.02
Enter the limit in seconds (e.g., 2700 for 45 minutes): >>> 2700
Enter the order type for take profit (LIMIT/MARKET): >>> OrderType.LIMIT
Enter the trailing stop as activation_price,trailing_delta (e.g., 0.015,0.003): >>> 0.013, 0.003
```

1. 总报价资产金额
```bash
Enter the total amount in quote asset to use for trading (e.g., 1000): >>> 100
```
含义：用于交易的报价资产总量（如USDT）。此处输入100表示使用100 USDT作为交易本金。
用途：控制整体交易规模。

2. 交易所名称
```bash
Enter the connector name (e.g., binance perpetual): >>> binance perpetual
```
含义：交易平台名称（如币安永续合约）。
用途：指定策略运行的交易所类型（如现货、永续合约等）。

3. 交易对
```bash
Enter the trading pair to trade on (e.g., WLD-USDT): >>> ETH-USDT
```
含义：交易标的的货币对。此处输入ETH-USDT表示交易以太坊对USDT。
用途：确定策略操作的资产组合。

4. 买入价差列表
```bash
Enter buy spreads (e.g., '0.01, 0.02'): >>> 0.01,0.02
```
含义：相对于当前市场价的挂单买入价差（如0.01表示低于市价1%挂单）。
用途：设置多档买入订单的价差，实现分批建仓。

5. 卖出价差列表
```bash
Enter sell spreads (e.g., '0.01, 0.02'): >>> 0.01,0.02
```
含义：相对于当前市场价的挂单卖出价差（如0.01表示高于市价1%挂单）。
用途：设置多档卖出订单的价差，实现分批止盈。

6. 买入资金分配比例
```bash
Enter buy amounts as percentages (e.g.Enter sell spreads (e.g., '0.01, 0.02'): >>> 0.01,0.02
```
含义：分配给每档买入订单的资金比例。输入20,80表示第一档分配20%资金，第二档分配80%。
注意：若留空则等分资金。

7. 卖出资金分配比例
```bash
Enter sell amounts as percentages (e.g., '50,50'): >>> 30,70
```
含义：分配给每档卖出订单的持仓比例。输入30,7表示第一档卖出30%持仓，第二档卖出70%。
注意：若总和超过100%可能导致多次卖出同一仓位。

8. 策略刷新时间
```bash
Enter refresh time in seconds (e.g., 300): >>> 60
```
含义：策略检查市场状态和订单的间隔时间（秒）。此处60秒刷新一次。
用途：控制策略的响应频率。

9. 交易冷却时间
```bash
Enter cooldown time in seconds (e.g., 15): >>> 15
```
含义：同一执行器（如订单组）完成交易后的冷却时间（秒）。
用途：防止因频繁撤单/下单触发交易所风控。

10. 杠杆倍数
```bash
Enter leverage (e.g., 20): >>> 20
```
含义：交易使用的杠杆倍数。输入20表示20倍杠杆。
注意：设置为1时为现货交易（无杠杆）。

11. 止损比例
```bash
Enter stop loss (e.g., 0.03 for 3%): >>> 0.03
```
含义：触发止损的亏损比例（如0.03表示亏损3%时止损）。
用途：控制单笔交易的最大亏损。

12. 止盈比例
```bash
Enter take profit (e.g., 0.02 for 2%): >>> 0.02
```
含义：触发止盈的盈利比例（如0.02表示盈利2%时止盈）。
用途：锁定单笔交易的预期利润。

13. 时间限制
```bash
Enter limit in seconds (e.g., 2700): >>> 2700
```
含义：订单或策略的有效时间（秒）。此处2700秒（45分钟）后自动取消未成交订单。
用途：防止挂单长期未成交占用资金。

14. 止盈订单类型
```bash
Enter order type for take profit (LIMIT/MARKET): >>> OrderType.LIMIT
```
含义：止盈订单类型。LIMIT为限价单（按设定价格成交），MARKET为市价单（即时成交）。
区别：限价单可能不成交，但价格确定；市价单保证成交，但价格不确定。

15. 追踪止损参数
```bash
Enter trailing stop (e.g., 0.015,0.003): >>> 0.013, 0.003
```
含义：追踪止损的激活价格和追踪步长。输入格式为activation_price,trailing_delta。
0.013：当价格从最高点回撤1.3%时激活追踪止损。
0.003：激活后，止损线会跟随价格最高点保持0.3%的距离。
用途：在趋势行情中保护利润。


### 运行脚本 
执行以下命令以启动脚本：
```bash
start --script v2_directional_rsi.py --conf conf_v2_directional_rsi_1.yml
```

该策略进行一系列市场检查并初始化市场数据提供商。之后，它应该开始为两对下订单。

### 检查状态和性能
运行 Status 命令来查看正在运行的策略的状态 （资产余额、活动订单和持仓）：
有交易后，您可以使用 History 来查看您的机器人的表现。


### 下一步 

更进一步，让自动分析交易AI agent根据交易决策生成按照上述15个参数设置的yaml文件，再定时替换笔记本本地指定文件目录原yaml文件，即可实现多Agent自主crypto交易系统。

以上，欢迎各位大佬交流讨论！！！
