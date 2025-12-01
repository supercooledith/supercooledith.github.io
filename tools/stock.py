import yfinance as yf
import plotly.graph_objs as go
import os
import time
import pandas as pd
import requests

CACHE_PATH = "source/images/aapl_kline_cache.csv"
HTML_PATH = "source/images/aapl_kline_interactive.html"
ALPHA_VANTAGE_API_KEY = os.getenv("ALPHA_VANTAGE_API_KEY")

os.environ['ALPHA_VANTAGE_API_KEY'] = 'IJ6XI85W0SBKPB2L'

# Alpha Vantage下载函数
def download_alpha_vantage(symbol, start, end, api_key):
    url = f"https://www.alphavantage.co/query"
    params = {
        "function": "TIME_SERIES_DAILY_ADJUSTED",
        "symbol": symbol,
        "outputsize": "full",
        "apikey": api_key
    }
    try:
        resp = requests.get(url, params=params, timeout=10)
        resp.raise_for_status()
        data = resp.json().get("Time Series (Daily)", {})
        if not data:
            raise Exception("Alpha Vantage返回数据为空")
        df = pd.DataFrame.from_dict(data, orient="index", dtype=float)
        df.index = pd.to_datetime(df.index)
        df = df.sort_index()
        df = df.loc[(df.index >= pd.to_datetime(start)) & (df.index <= pd.to_datetime(end))]
        df = df.rename(columns={
            '1. open': 'Open',
            '2. high': 'High',
            '3. low': 'Low',
            '4. close': 'Close',
            '5. adjusted close': 'Adj Close',
            '6. volume': 'Volume',
        })
        return df
    except Exception as e:
        print(f"Alpha Vantage下载失败: {e}")
        return None

# yfinance下载函数，带重试
def download_with_retry(ticker, start, end, retries=3, delay=5):
    for attempt in range(retries):
        try:
            data = yf.download(ticker, start=start, end=end)
            if data is not None and not data.empty:
                return data
        except Exception as e:
            print(f"yfinance下载失败: {e}, 尝试 {attempt+1}/{retries}")
        time.sleep(delay)
    return None

# 主流程：优先缓存，其次yfinance，最后Alpha Vantage
def get_data():
    if os.path.exists(CACHE_PATH):
        print("读取本地缓存...")
        return pd.read_csv(CACHE_PATH, index_col=0, parse_dates=True)
    print("尝试yfinance下载...")
    data = download_with_retry('AAPL', start='2020-01-01', end='2024-01-01')
    if data is not None and not data.empty:
        data.to_csv(CACHE_PATH)
        return data
    if ALPHA_VANTAGE_API_KEY:
        print("尝试Alpha Vantage下载...")
        data = download_alpha_vantage('AAPL', '2020-01-01', '2024-01-01', ALPHA_VANTAGE_API_KEY)
        if data is not None and not data.empty:
            data.to_csv(CACHE_PATH)
            return data
    raise Exception("无法获取AAPL数据，请检查网络或API KEY")

data = get_data()

# 创建K线图
fig = go.Figure(data=[go.Candlestick(
    x=data.index,
    open=data['Open'],
    high=data['High'],
    low=data['Low'],
    close=data['Close'],
    name='AAPL'
)])

fig.update_layout(
    title='Apple (AAPL) 历史K线图',
    xaxis_title='日期',
    yaxis_title='价格 (USD)',
    xaxis_rangeslider_visible=False
)

# 保存为HTML文件到 Hexo 的 source/images 目录
fig.write_html(HTML_PATH)