---
title: GPU性能比较
date: 2025-04-09 12:13:15
categories: 人工智能杂谈
---
# GPU 性能比较

A100/A800/H100/H800/910B/H200/H20/L20/4090比较

<div style="font-size: 14px;width:100%;overflow-x:auto;">

<table style="width:1800px;">
  <tr>
    <td>

|  | A800 (PCIe/SXM） | A100 (PCIe/SXM)| H800 (PCIe/SXM)| H100 (PCIe/SXM)  | H200 (PCIe/SXM)  | H20  | L20 (PCIe) | GeForce RTX 4090 | GeForce RTX 5090 |HGX B300|	GB300 NVL72	|HGX B200	|GB200 NVL72	|GB200 NVL4|
|  :----:   |    :----:   |      :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |
| Year      |2022|2022|2023|2024|2024|2023|2023|2022|2024|2025|2025|2025|2025|2025|
| Manufacturing   |7nm|5nm|7nm|5nm|5nm|5nm|5nm|5nm|5nm|5nm|5nm|5nm|5nm	|5nm|
| Architecture   |Ampere|Ampere|Hopper <br>(阉割)|Hopper|Hopper|Hopper|Ada Lovelace|Ada Lovelace|40MB|Blackwell	|Blackwell	|Blackwell	|Blackwell	|Blackwell|
| Max Power   |300/400 W|300/400 W|300-350/700W|350-400/700 W|600/700W|400W|350W|425W|575W|1100 W|1400 W	|1000W	|1200 W	|1200 W|
| CUDA |8.0|8.0|9.0|9.0|9.0|-|8.9|9.0|12.0|12.0|12.0|12.0|12.0|12.0 |
| GPU Mem   |80G HBM2e|80G HBM2e|80G HBM3|64G/94G/80G HBM3|141GB HBM3e|96G HBM3|48G GDDR6|24GB GDDR6X|32 GB GDDR7|270 GB HBM3e|279 GB HBM3E|Up to 192 GB HBM3e|186 GB HBM3E|186 GB HBM3E|
| GPU Mem BW   |2TB/s|1.9/2TB/s|2TB/s|3.9/3.35 TB/s|4.8 TB/s|4TB/s|864GB/s|1008 GB/s|1792 GB/s|7.7 TB/s|8 TB/s|7.7 TB/s|8 TB/s|8 TB/s|
| GPU Interconnect <br> (one-to-one max bw)  |PCIe 4.0：64GB/s <br> NVLink：400GB/s|PCIe Gen4 64GB/s <br> NVLINK 600GB/s|NVLink: 400GB/s <br> PCIe 5.0: 128GB/s|PCIe Gen5 128GB/s<br>NVLINK 600/900GB/s|PCIe Gen5 128GB/s<br>NVLINK 900 GB/s|PCIe Gen5 128GB/s<br>NVLINK 900GB/s|PCIe Gen4 64GB/s|PCIe 4.0 x16 (单向32 GB/s, 双向64 GB/s)|-|"NVLink 5：1.8 TB/s|PCIe Gen6：256 GB/s"	"NVLink 5：1.8 TB/s|PCIe Gen6：256 GB/s"	"NVLink 5：1.8 TB/s|PCIe Gen5：128 GB/s"	"NVLink 5：1.8 TB/s|PCIe Gen5：128 GB/s"	"NVLink 5：1.8 TB/s|PCIe Gen5：128 GB/s"|
|GPU Interconnect <br> (one-to-many total bw) |2TB/s|1.9/2TB/s|2TB/s|3.9/3.35 TB/s|4.8 TB/s|4TB/s|864GB/s|1TB/s|-|"NVLink 5PCIe Gen6"|-|"NVLink 5 PCIe Gen6"|-|-|
| FP64  TFLOPS   |19.5|19.5|51 &#124; 67|60 &#124; 67|60 &#124; 67|44|59.8|-|-|1.2 teraFLOPS|1.3 TFLOPS|	37 teraFLOPS|40 TFLOPS|	40 TFLOPS|
| FP32  TFLOPS   |19.5|19.5|51 &#124; 67|60 &#124; 67|60 &#124; 67|44|59.8|-|-|75 TFLOPS|80 TFLOPS	|75 TFLOPS|80 TFLOPS|80 TFLOPS|
| TF32  TFLOPS   |156 &#124; 312|156 &#124; 312| 756  &#124; 989|989 &#124; 853|989 &#124; 853|74|59.8|-|-|1.1/2.2 petaFLOPS|2.5 PFLOPS|1.1/2.2 petaFLOPS|2.5 PFLOPS|2.5 PFLOPS|
| BF16  TFLOPS   |156 &#124; 312|312 &#124; 624|1513  &#124; 1979|1671  &#124; 1979|1671  &#124; 1979|148  &#124; 148|119  &#124; 119|-|-|4.5 PLFOPS|5 PFLOPS|4.5 PFLOPS|5 PFLOPS|5 PFLOPS|
| FP16  TFLOPS   |156 &#124; 312|312 &#124; 624|1513  &#124; 1979|1671  &#124; 1979|1671  &#124; 1979|148  &#124; 14|119  &#124; 119|-|-|2.2/4.5 petaFLOPS|5 PFLOPS|2.2/4.5 petaFLOPS|5 PFLOPS|5 PFLOPS|
| FP8   TFLOPS   |NOT support|NOT support|3026  &#124; 3958|3341  &#124; 3958|3341  &#124; 3958|296  &#124; 296|-|-|-|4.5/9 petaFLOPS|10 PFLOPS|4.5/9 petaFLOPS|10 PFLOPS|10 PFLOPS|
| INT8  TOPS     |NOT support|624 &#124; 1248|3026  &#124; 3958|3341  &#124; 3958|3341  &#124; 3958|296  &#124; 296|-|-|-|0.15/ 0.30 petaOPS|330 TOPS|4.5/9 petaOPS|10 POPS|10 POPS |
| FP4 Tensor Core Dense/Sparse |NOT support|NOT support|NOT support|NOT support|NOT support|NOT support|-|-|-|14 &#124; 18 petaFLOPS|20 PFLOPS  &#124; 15 PFLOPS|9/18 petaFLOPS|20 POPS|20 PFLOPS |
| L1 Cache   |192 KB|192 KB|256 KB|256 KB|256 KB|-|128 KB|128 KB|128 KB|-|-|-|-|-|
| L2 Cache   |40MB|80MB|50MB|50MB|50MB|60MB|96MB|72MB|96MB|-|-|-|-|-|
  </tr>
</table>
</div>

<div style="font-size: 14px;width:100%;overflow-x:auto;">

<table style="width:1800px;">
  <tr>
    <td>

| | HGX B300 | GB300 NVL72 | HGX B200 | GB200 NVL72 | GB200 NVL4 | GeForce RTX 5090 | H200 (PCIe/SXM) | H100 (PCIe/SXM) | H800 (PCIe/SXM) | H20 | L20 (PCIe) | A800 (PCIe/SXM) | A100 (PCIe/SXM) | GeForce RTX 4090 |
| :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| **Year** | **2025** | **2025** | **2025** | **2025** | **2025** | **2024** | **2024** | **2024** | **2023** | **2023** | **2023** | **2022** | **2022** | **2022** |
| Manufacturing | 5nm | 5nm | 5nm | 5nm | 5nm | 5nm | 5nm | 5nm | 7nm | 5nm | 5nm | 7nm | 5nm | 5nm |
| Architecture | Blackwell | Blackwell | Blackwell | Blackwell | Blackwell | Blackwell | Hopper | Hopper | Hopper (阉割) | Hopper | Ada Lovelace | Ampere | Ampere | Ada Lovelace |
| Max Power | 1100 W | 1400 W | 1000W | 1200 W | 1200 W | 575W | 600/700W | 350-400/700 W | 300-350/700W | 400W | 350W | 300/400 W | 300/400 W | 425W |
| CUDA | 12.0 | 12.0 | 12.0 | 12.0 | 12.0 | 12.0 | 9.0 | 9.0 | 9.0 | - | 8.9 | 8.0 | 8.0 | 9.0 |
| GPU Mem | 270 GB HBM3e | 279 GB HBM3E | Up to 192 GB HBM3e | 186 GB HBM3E | 186 GB HBM3E | 32 GB GDDR7 | 141GB HBM3e | 64G/94G/80G HBM3 | 80G HBM3 | 96G HBM3 | 48G GDDR6 | 80G HBM2e | 80G HBM2e | 24GB GDDR6X |
| GPU Mem BW | 7.7 TB/s | 8 TB/s | 7.7 TB/s | 8 TB/s | 8 TB/s | 1792 GB/s | 4.8 TB/s | 3.9/3.35 TB/s | 2TB/s | 4TB/s | 864GB/s | 2TB/s | 1.9/2TB/s | 1008 GB/s |
| GPU Interconnect <br> (one-to-one max bw) | NVLink 5：1.8 TB/s <br> PCIe Gen6：256 GB/s | NVLink 5：1.8 TB/s <br> PCIe Gen6：256 GB/s | NVLink 5：1.8 TB/s <br> PCIe Gen5：128 GB/s | NVLink 5：1.8 TB/s <br> PCIe Gen5：128 GB/s | NVLink 5：1.8 TB/s <br> PCIe Gen5：128 GB/s | - | PCIe Gen5 128GB/s <br> NVLINK 900 GB/s | PCIe Gen5 128GB/s <br> NVLINK 600/900GB/s | NVLink: 400GB/s <br> PCIe 5.0: 128GB/s | PCIe Gen5 128GB/s <br> NVLINK 900GB/s | PCIe Gen4 64GB/s | PCIe 4.0：64GB/s <br> NVLink：400GB/s | PCIe Gen4 64GB/s <br> NVLINK 600GB/s | PCIe 4.0 x16 (单向32 GB/s, 双向64 GB/s) |
| GPU Interconnect <br> (one-to-many total bw) | NVLink 5 PCIe Gen6 | - | NVLink 5 PCIe Gen6 | - | - | - | 4.8 TB/s | 3.9/3.35 TB/s | 2TB/s | 4TB/s | 864GB/s | 2TB/s | 1.9/2TB/s | 1TB/s |
| FP64 TFLOPS | 1.2 teraFLOPS | 1.3 TFLOPS | 37 teraFLOPS | 40 TFLOPS | 40 TFLOPS | - | 60 \| 67 | 60 \| 67 | 51 \| 67 | 44 | 59.8 | 19.5 | 19.5 | - |
| FP32 TFLOPS | 75 TFLOPS | 80 TFLOPS | 75 TFLOPS | 80 TFLOPS | 80 TFLOPS | - | 60 \| 67 | 60 \| 67 | 51 \| 67 | 44 | 59.8 | 19.5 | 19.5 | - |
| TF32 TFLOPS | 1.1/2.2 petaFLOPS | 2.5 PFLOPS | 1.1/2.2 petaFLOPS | 2.5 PFLOPS | 2.5 PFLOPS | - | 989 \| 853 | 989 \| 853 | 756 \| 989 | 74 | 59.8 | 156 \| 312 | 156 \| 312 | - |
| BF16 TFLOPS | 4.5 PLFOPS | 5 PFLOPS | 4.5 PFLOPS | 5 PFLOPS | 5 PFLOPS | - | 1671 \| 1979 | 1671 \| 1979 | 1513 \| 1979 | 148 \| 148 | 119 \| 119 | 156 \| 312 | 312 \| 624 | - |
| FP16 TFLOPS | 2.2/4.5 petaFLOPS | 5 PFLOPS | 2.2/4.5 petaFLOPS | 5 PFLOPS | 5 PFLOPS | - | 1671 \| 1979 | 1671 \| 1979 | 1513 \| 1979 | 148 \| 14 | 119 \| 119 | 156 \| 312 | 312 \| 624 | - |
| FP8 TFLOPS | 4.5/9 petaFLOPS | 10 PFLOPS | 4.5/9 petaFLOPS | 10 PFLOPS | 10 PFLOPS | - | 3341 \| 3958 | 3341 \| 3958 | 3026 \| 3958 | 296 \| 296 | - | NOT support | NOT support | - |
| INT8 TOPS | 0.15/ 0.30 petaOPS | 330 TOPS | 4.5/9 petaOPS | 10 POPS | 10 POPS | - | 3341 \| 3958 | 3341 \| 3958 | 3026 \| 3958 | 296 \| 296 | - | NOT support | 624 \| 1248 | - |
| FP4 Tensor Core Dense/Sparse | 14 \| 18 petaFLOPS | 20 PFLOPS \| 15 PFLOPS | 9/18 petaFLOPS | 20 POPS | 20 PFLOPS | - | NOT support | NOT support | NOT support | NOT support | - | NOT support | NOT support | - |
| L1 Cache | - | - | - | - | - | 128 KB | 256 KB | 256 KB | 256 KB | - | 128 KB | 192 KB | 192 KB | 128 KB |
| L2 Cache | - | - | - | - | - | 96MB | 50MB | 50MB | 50MB | 60MB | 96MB | 40MB | 80MB | 72MB |
  </tr>
</table>

</div>


## 📅 修正后的显卡规格对比 (2025年到2022年)
<div style="font-size: 14px;width:100%;overflow-x:auto;">
<table style="width:1800px;">
  <tr>
    <td>

| | HGX B300 | GB300 NVL72 | HGX B200 | GB200 NVL72 | GB200 NVL4 | GeForce RTX 5090 | H200 (PCIe/SXM) | H100 (PCIe/SXM) | H800 (PCIe/SXM) | H20 | L20 (PCIe) | A800 (PCIe/SXM) | A100 (PCIe/SXM) | GeForce RTX 4090 |
| :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| **Year** | **2025** | **2025** | **2025** | **2025** | **2025** | **2024** | **2024** | **2024** | **2023** | **2023** | **2023** | **2022** | **2022** | **2022** |
| Manufacturing | 5nm | 5nm | 5nm | 5nm | 5nm | 5nm | 5nm | 5nm | 7nm | 5nm | 5nm | 7nm | 5nm | 5nm |
| **Architecture** | Blackwell | Blackwell | Blackwell | Blackwell | Blackwell | **Blackwell** | Hopper | Hopper | Hopper (阉割) | Hopper | Ada Lovelace | Ampere | Ampere | Ada Lovelace |
| Max Power | 1100 W | 1400 W | 1000W | 1200 W | 1200 W | 575W | 600/700W | 350-400/700 W | 300-350/700W | 400W | 350W | 300/400 W | 300/400 W | 425W |
| CUDA | 12.0 | 12.0 | 12.0 | 12.0 | 12.0 | 12.0 | 9.0 | 9.0 | 9.0 | - | 8.9 | 8.0 | 8.0 | 9.0 |
| GPU Mem | 270 GB HBM3e | 279 GB HBM3E | Up to 192 GB HBM3e | 186 GB HBM3E | 186 GB HBM3E | 32 GB GDDR7 | 141GB HBM3e | 64G/94G/80G HBM3 | 80G HBM3 | 96G HBM3 | 48G GDDR6 | 80G HBM2e | 80G HBM2e | 24GB GDDR6X |
| GPU Mem BW | 7.7 TB/s | 8 TB/s | 7.7 TB/s | 8 TB/s | 8 TB/s | 1792 GB/s | 4.8 TB/s | 3.9/3.35 TB/s | 2TB/s | 4TB/s | 864GB/s | 2TB/s | 1.9/2TB/s | 1008 GB/s |
| GPU Interconnect <br> (one-to-one max bw) | NVLink 5：1.8 TB/s <br> PCIe Gen6：256 GB/s | NVLink 5：1.8 TB/s <br> PCIe Gen6：256 GB/s | NVLink 5：1.8 TB/s <br> PCIe Gen5：128 GB/s | NVLink 5：1.8 TB/s <br> PCIe Gen5：128 GB/s | NVLink 5：1.8 TB/s <br> PCIe Gen5：128 GB/s | - | PCIe Gen5 128GB/s <br> NVLINK 900 GB/s | PCIe Gen5 128GB/s <br> NVLINK 600/900GB/s | NVLink: 400GB/s <br> PCIe 5.0: 128GB/s | PCIe Gen5 128GB/s <br> NVLINK 900GB/s | PCIe Gen4 64GB/s | PCIe 4.0：64GB/s <br> NVLink：400GB/s | PCIe Gen4 64GB/s <br> NVLINK 600GB/s | PCIe 4.0 x16 (单向32 GB/s, 双向64 GB/s) |
| GPU Interconnect <br> (one-to-many total bw) | NVLink 5 PCIe Gen6 | - | NVLink 5 PCIe Gen6 | - | - | - | 4.8 TB/s | 3.9/3.35 TB/s | 2TB/s | 4TB/s | 864GB/s | 2TB/s | 1.9/2TB/s | 1TB/s |
| **FP64 TFLOPS** | 600 TFLOPS (系统) | 2880 TFLOPS (系统) | 37 TFLOPS | 40 TFLOPS | 40 TFLOPS | - | 67 TFLOPS | 60 TFLOPS | 51 TFLOPS | 44 TFLOPS | 59.8 TFLOPS | 19.5 TFLOPS | 19.5 TFLOPS | - |
| **FP32 TFLOPS** | 600 TFLOPS | 5760 TFLOPS | 75 TFLOPS | 80 TFLOPS | 80 TFLOPS | - | 67 TFLOPS | 60 TFLOPS | 51 TFLOPS | 44 TFLOPS | 59.8 TFLOPS | 19.5 TFLOPS | 19.5 TFLOPS | - |
| **TF32 TFLOPS (稀疏)** | 36 PFLOPS | 60 PFLOPS | 18 PFLOPS | 2.5 PFLOPS | 2.5 PFLOPS | - | 989 TFLOPS | 853 TFLOPS | 989 TFLOPS | 74 TFLOPS | 59.8 TFLOPS | 312 TFLOPS | 312 TFLOPS | - |
| **BF16 TFLOPS (稀疏)** | 72 PFLOPS | 120 PFLOPS | 36 PFLOPS | 5 PFLOPS | 5 PFLOPS | - | 1979 TFLOPS | 1979 TFLOPS | 1979 TFLOPS | 148 TFLOPS | 119 TFLOPS | 312 TFLOPS | 624 TFLOPS | - |
| **FP8 TFLOPS (稀疏)** | 144 PFLOPS | 240 PFLOPS | 72 PFLOPS | 10 PFLOPS | 10 PFLOPS | - | 3958 TFLOPS | 3958 TFLOPS | 3958 TFLOPS | 296 TFLOPS | - | NOT support | NOT support | - |
| **FP4 PFLOPS (稀疏)** | 144 PFLOPS | 1440 PFLOPS | 72 PFLOPS | 20 PFLOPS | 20 PFLOPS | - | NOT support | NOT support | NOT support | NOT support | - | NOT support | NOT support | - |
| INT8 TOPS | 2 POPS | - | 10 POPS | 10 POPS | 10 POPS | - | 3958 TOPS | 3958 TOPS | 3958 TOPS | 296 TOPS | - | NOT support | 1248 TOPS | - |
| L1 Cache | - | - | - | - | - | 128 KB | 256 KB | 256 KB | 256 KB | - | 128 KB | 192 KB | 192 KB | 128 KB |
| L2 Cache | - | - | - | - | - | 96MB | 50MB | 50MB | 50MB | 60MB | 96MB | 40MB | 80MB | 72MB |
  </tr>
</table>
</div>

**备注：**
1.  **RTX 5090 架构：** 已从 "40MB" 更正为 **Blackwell**。
2.  **Blackwell 性能：** 对 **B300/GB200** 系列的 **TFLOPS/PFLOPS/POPS** 单位进行了大幅修正，采用了官方公布的系统级性能数据（如 `GB200 NVL72` 的性能是 72 个 Blackwell GPU 的总和）。
3.  **H100/H200 性能：** 修正了 H200 的 TF32/BF16/FP8 TFLOPS 数据，使其与官方规格保持一致。


先看NVIDIA官网的数据表，比如A100的FP16算力是312 TFLOPS，但这是Tensor Core的稀疏性能。
实际常用的是稠密（Dense）算力，所以A100 80G NVLink的FP16稠密算力是156 TFLOPS单卡，乘以8卡就是1248 TFLOPS，换算成P就是1.25 PFLOPS。这里要注意NVLink对多卡效率的提升，但算力本身是线性叠加的。

$$1 Petaflops = 1,000 Teraflops$$
Flops：是“每秒浮点运算次数”的缩写，是衡量计算机计算能力的基本单位。

Teraflops：代表“每秒一万亿次浮点运算”。
“Tera-” 这个前缀在公制系统中代表 10¹²，即 1,000,000,000,000（一万亿）。
所以:
$$1 Teraflops = 10¹² Flops$$

Petaflops：代表“每秒一千万亿次浮点运算”。
“Peta-” 这个前缀代表 10¹⁵，即 1,000,000,000,000,000（一千万亿）。
所以;
$$1 Petaflops = 10¹⁵ Flops$$

# 深度学习中的精度格式一览

不同的精度格式在位宽、内存占用、计算速度和数值精度方面各有特点。选择合适的格式是优化模型性能和效率的关键。
浮点数格式 (Floating Point)：

<div style="font-size: 14px;width:100%;overflow-x:auto;">
<table style="width:1000px;">
  <tr>
    <td>

| 格式 | 全称 (Bits) | 结构 (符号/指数/尾数) | 内存 (Bytes) | 深度学习中的角色 |
| :---: | :---: | :---: | :---: | :--- |
| **FP64** | 双精度浮点数 (64) | 1 / 11 / 52 | 8 | 科学计算/测试基准：提供最高精度，主要用于科学计算或作为模型训练的精度黄金标准。 |
| **FP32** | 单精度浮点数 (32) | 1 / 8 / 23 | 4 | 标准训练/推理格式：传统上用于训练和推理的标准格式，提供足够的动态范围和动态范围。 |
| **TF32** | TensorFloat-32 (19) | 1 / 8 / 10 | 4 | NVIDIA 加速训练格式：仅在 NVIDIA Tensor Core 上可用，它拥有 FP32 的动态范围（8位指数）和 FP16 的精度（10位尾数），加速训练同时保持接近 FP32 的效果。 |
| **FP16** | 半精度浮点数 (16) | 1 / 5 / 10 | 2 | 通用混合精度格式：显著节省内存并加速计算。在混合精度训练和推理中广泛使用。 |
| **BF16** | Brain Floating Point (16) | 1 / 8 / 7 | 2 | 友好混合精度格式：与 FP16 共用 16 位，但具有与 FP32 相同的 8 位指数，因此动态范围更大，更不易溢出。在 Google TPU 和部分 NVIDIA 硬件上流行。 |
| **FP8** | 8 位浮点数 (8) | 多种实体 (如 E5M2, E4M3) | 1 | 超低精度推理：进一步降低内存和延迟，通常需要专用的硬件支持（如最新的 NVIDIA Tensor Core）。 |
| **NVFP4** | NVIDIA 4 位浮点 (4) | NVIDIA 专有 | 0.5 | 极限压缩推理：专为 NVIDIA 平台设计，用于在极低带宽下优化 LLM 推理性能。 |
  </tr>
</table>
</div>

整数格式 (Integer)：
<div style="font-size: 14px;width:100%;overflow-x:auto;">
<table style="width:1000px;">
  <tr>
    <td>

| 格式 | 位数 (Bits) | 内存 (Bytes) | 深度学习中的角色 | 常用配置 |
| :---: | :---: | :---: | :--- | :--- |
| **INT8** | 8 位整数 (8) | 1 | 通用量化推理：业界标准的量化格式，通过将 FP32/FP16 数据映射到 8 位整数，实现推理速度和内存的显著优化，精度损失相对可控。 | W8A8 (权重和激活值都是 INT8) |
| **INT4** | 4 位整数 (4) | 0.5 | 极限量化推理：进一步将模型大小减半，常用于大型 LLM 的部署（如 Llama, Mistral），以解决内存限制问题。 | W4A16 (权重 INT4，激活值 FP16/BF16) |
  </tr>
</table>
</div>

总结
<div style="font-size: 14px;width:100%;overflow-x:auto;">
<table style="width:1000px;">
  <tr>
    <td>

| 优化目标 | 推荐格式 | 优点 | 缺点/要求 |
| :---: | :---: | :--- | :--- |
| **最大精度** | FP64, FP32 | 最高的数值稳定性和动态范围。 | 内存占用高，计算速度慢。 |
| **加速训练** | TF32, BF16 | 在保持动态范围的同时加速训练。 | 需要特定硬件（如 Tensor Core, TPU）。 |
| **通用混合精度** | FP16, BF16 | 平衡了**速度、内存和精度**，是目前最主流的训练/推理格式。 | FP16 动态范围较小，可能需要做操作。 |
| **内存/速度优化** | INT8, FP8 | 内存占用极低，计算吞吐量最高。 | 精度损失风险增加，需要进行量化操作，可能需要专用硬件。 |
  </tr>
</table>
</div>

## 结构 (符号/指数/尾数) 是什么意思？

一个浮点数 $$V$$ 可以通过以下公式计算出来：

$$V = (-1)^S \times (1 + M) \times 2^{(E - \text{Bias})}$$

$$S$$ : 符号位 (0 或 1)

$$M$$ : 尾数域的值

$$E$$ : 指数域的编码值

$$\text{Bias}$$ : 固定的偏移量（如 FP32 为 127，FP16 为 15）

这种结构决定了浮点数的两个关键特性：

1. **动态范围（Exponent 决定）**： 指数位越多，能表示的数值范围越大（从极小数到极大数），不易溢出。
2. **精度（Mantissa 决定）**： 尾数位越多，能表示的有效数字越精确，舍入误差越小。

在 LLM 量化中，我们就是通过减少这些位宽（特别是指数和尾数）来达到压缩内存的目的，但必须使用像 AWQ 这样的算法来最小化随之而来的精度损失。

📝 以 FP16 为例（半精度浮点数）
FP16 共有 16 位，结构划分如下：

- **优点**： 相比 FP32 占用一半内存，在深度学习中能显著加速运算。
- **权衡**： 只有 5 位指数（动态范围较小）和 10 位尾数（精度较低），容易出现溢出（Overflow）或舍入误差。

📝 以 FP32 为例（单精度浮点数）
FP32 共有 32 位，结构划分如下：

- **优点**： 动态范围大（8 位指数），精度高（23 位尾数）。
- **权衡**： 内存占用较大（4 字节）。

### 低精度数据格式
好的，我们来详细解析一下您提到的这几种重要的低精度数据格式，它们是当前加速大型语言模型 (LLM) 推理的核心技术。这些格式主要体现了在浮点数和整数这两大类中，如何在位宽上进行精妙的取舍。

#### 浮点数：FP8 (E4M3 和 E5M2)
FP8（8 位浮点数）格式仅使用 8 位来存储一个数值，它的关键在于这 8 位如何在指数 (E) 和尾数 (M) 之间进行分配，从而产生不同的权衡。

A. FP8 格式结构解析
<div style="font-size: 14px;width:100%;overflow-x:auto;">
<table style="width:1800px;">
  <tr>
    <td>

| 字段 | 符号位 (S)| 指数域 (E)| 尾数域 (M) |总位数|
| :--- |:--- |:--- |:--- |:--- |
|E4M3	|1	|4	|3	|8|
|E5M2	|1	|5	|2	|8|
  </tr>
</table>
</div>

B. E4M3 (4 指数位, 3 尾数位)
- 特性： 动态范围优先。
  - 指数 (E=4): 4 位指数，动态范围比 FP16 (5 位指数) 略小，但比 E5M2 小。
  - 尾数 (M=3): 只有 3 位尾数，精度非常低，舍入误差较大。
- 适用场景：
  - 适用于模型权重。权重相对静态，对精度要求略低，但需要一定的动态范围。
  - 主要用于Transformer 模型的激活值，尤其是需要更大动态范围来处理激活值张量中可能出现的极端值（Outliers）时。

C. E5M2 (5 指数位, 2 尾数位)
- 特性： 超高动态范围优先。
  - 指数 (E=5): 5 位指数，与 FP16 相同。这意味着它拥有与 FP16 一样的动态范围，能表示的数值范围极大（不易溢出）。
  - 尾数 (M=2): 只有 2 位尾数，精度极低，是所有常用浮点格式中精度最低的之一。
- 适用场景：
  - 适用于模型权重。由于其超大的动态范围，它可以更好地适应权重分布中可能出现的极端值，从而减少量化误差。
  - 常用于激活值，因为激活值在计算过程中波动较大，需要高动态范围来防止数值溢出。

总结： 在深度学习中，E4M3 和 E5M2 通常配合使用，一个用于权重，一个用于激活值，以在 8 位的限制下平衡动态范围 (E) 和精度 (M)。

#### 整数量化：INT8 和 INT4
整数格式（INT8/INT4）通过量化 (Quantization) 将浮点数（如 FP16/FP32）线性映射到整数值，实现极高的内存压缩和计算效率。

A. INT8 (W8A8) 精度
- 含义： 8 位整数 (INT8)，是业界标准的量化格式。
- W8A8 结构：
  - W8 (Weight 8-bit): 模型权重被量化为 INT8。
  - A8 (Activation 8-bit): 模型激活值和计算也使用 INT8 格式。
- 如何实现量化？
  - 量化过程需要确定一个比例因子 (Scale) 和一个零点 (Zero-point)，将原始浮点数范围 $[V_{\min}, V_{\max}]$ 映射到 INT8 范围 $[-128, 127]$。
- 优势：
  - 极致的计算效率： 许多现代硬件（CPU/GPU）都有高度优化的 INT8 矩阵乘法单元，能实现最高的每秒操作数 (TOPS)。
  - 内存减半： 相较于 FP16 (2 字节)，INT8 (1 字节) 内存占用减半。
- 挑战：
  - 精度损失： INT8 只有 256 个可能的离散值，量化误差比浮点格式更大，因此需要复杂的量化算法来保持模型精度。

B. INT4 (W4A16) 精度
- 含义： 4 位整数 (INT4)，专用于大型 LLM 的极限内存压缩。
- W4A16 结构：
  - W4 (Weight 4-bit): 模型权重被量化为 INT4。
  - A16 (Activation 16-bit): 模型激活值和计算仍使用 FP16 格式（或 BF16）。
- 优势：
  - 极致的内存压缩： 相比 FP16，模型权重体积减少 4 倍（从 2 字节降到 0.5 字节），对于 GigaByte 级别的 LLM 至关重要。
  - 高性能计算： 虽然激活值仍是 FP16，但计算过程通过反量化或特殊硬件支持，将 INT4 权重与 FP16 激活值结合，实现高效运算。
- 挑战：
  - 精度保持难度高： 4 位只有 16 个可能的离散值，量化精度损失风险最大。因此，必须使用像 AWQ (Activation-aware Weight Quantization) 这样的先进算法来精心挑选需要量化的权重，以保持模型性能。

📊 总结对比表
<div style="font-size: 14px;width:100%;overflow-x:auto;">
<table style="width:1000px;">
  <tr>
    <td>

|格式	|类型	|位宽 (W/A)	|内存 (per value)	|主要优势	|主要用途|
| :---: | :---: | :--- | :--- |:--- |:--- |
|FP8 |E4M3	|浮点	8 (W8/A8)	|1 Byte	|动态范围，用于浮点计算|权重或激活值|
|FP8 |E5M2	|浮点	8 (W8/A8)	|1 Byte	|超高动态范围，极少溢出|权重或激活值|
|INT8 |W8A8	|整数	8 (W8/A8)	|1 Byte	|极高计算吞吐量 (TOPS)|图像识别等非 LLM 场景|
  </tr>
</table>
</div>

这些低精度格式的选择和配置，是 LLM 部署工程师们在硬件特性、内存预算和模型精度之间进行复杂权衡的结果。

# 量化算法
## AWQ 算法 (Activation-aware Weight Quantization)
AWQ (Activation-aware Weight Quantization) 算法是专门针对 W4A16（权重 INT4，激活值 FP16） 这种超低精度量化配置设计的，其核心目标是在极度压缩模型权重的同时，最大限度地保护模型的精度。

AWQ 提升性能的关键不在于计算速度本身（计算速度主要由 INT4 格式和硬件决定），而在于它能让模型在 INT4 下保持足够高的精度，从而使得这种高效的低精度部署在实际应用中可行。
- 含义： 是一种感知激活值的权重（量化）算法。
- 作用： 在将权重从高精度（如 FP16）量化到超低精度（如 INT4）时，AWQ 算法会考虑激活值的重要性。
- 原理： 它不是平均地量化所有权重，而是跳过那些对最终输出影响最重要的权重（即与较大的激活值相乘的权重），确保它们能保持较高的精度。这最小化了量化对模型推理精度的负面影响，使得模型在 INT4 下仍能保持接近 FP16 的性能。

核心洞察：激活值的重要性

传统的量化方法（如 PTQ，Post-Training Quantization）通常只关注权重本身的分布，试图将它们均匀地映射到 INT4 范围。

<div style="
  border: 1px solid #ddd;        /* 边框样式 */
  padding: 10px;                 /* 内边距 */
  background-color: #f3ba2f;     /* 背景颜色 - 可修改 */
  color: #4e4e4e;                /* 文字颜色 - 可修改 */
  border-radius: 5px;            /* 圆角半径 */
  margin: 10px 0;                /* 外边距 */
">
AWQ 的核心洞察是：量化误差的影响并非均匀分布，而是取决于它与激活值的乘积。
</div>

在一个矩阵乘法 Y=W⋅X 中：
- W 是权重矩阵 (Weight)。
- X 是激活值矩阵 (Activation)。

如果一个权重 $w_i$ 虽然很大，但与之相乘的激活值 $x_i$ 很小，那么 $w_i$ 的量化误差对最终结果 $Y$ 的影响很小。

相反，如果一个权重 $w_j$ 无论大小，但与之相乘的激活值 $x_j$ 很大（即 $x_j$ 是一个“重要”的激活通道），那么 $w_j$ 的微小量化误差经过放大后，会对最终结果造成巨大的精度损失。

### AWQ 的机制：保护重要的权重
基于上述洞察，AWQ 算法执行了一个“敏感性分析”步骤，来决定哪些权重在量化过程中需要被“保护”起来。

**步骤一：敏感性评分 (Salience Score)**

AWQ 首先计算每个输出通道的权重敏感性评分。这个评分基于激活值的统计信息（例如，激活值的最大绝对值）。

$$Score_i=max(∣X_{channel,i}∣)$$

$$Score_i$$ 代表了第 $$i$$ 个通道的激活值的重要性。

**步骤二：权重缩放（保护高敏感通道）**

在将权重 W 量化到 INT4 之前，AWQ 会对权重应用一个通道级的缩放因子 (Scaling Factor s)。
AWQ 的目标是给那些具有高敏感性评分（即与大激活值相乘）的权重施加更大的缩放因子 s。
新的权重=W/s

施加缩放因子后，这些权重在量化到 INT4 范围时：
1. 它们在量化后的 相对误差会更小。
2. 它们有效地被“隔离”了量化对激活值的影响，使得它们能够更精确地表示。

**步骤三：四舍五入到 INT4**

最终，缩放后的权重被量化到 INT4。在推理时，这些 INT4 权重会通过反量化和 FP16 激活值进行计算。

### AWQ 如何专门提升 INT4 (W4A16) 的性能？
AWQ 的设计与 W4A16 配置完美契合，体现在两个方面：

**A. 专门解决 INT4 的极限精度问题**

INT4 (4 位) 只有 16 个离散值，量化是极其粗糙的。任何微小的量化误差都可能被放大，导致模型性能崩溃。AWQ 通过有针对性地保护最重要的 1% 权重，成功地避免了这种精度崩溃，使得 LLM 在 4 位下依然能保持接近 FP16 的表现。

**B. 充分利用 W4A16 的计算结构**

在 W4A16 中，激活值保持在 FP16，这为 AWQ 提供了便利。AWQ 可以利用高精度的 FP16 激活值来精确计算敏感性评分，指导权重缩放，从而得到一个对精度最友好的 INT4 权重集。如果激活值也是低精度（如 W8A8），这种精确的敏感性分析将难以进行。

### 总结
AWQ 算法通过引入激活值感知的量化策略，确保了最关键的权重能够保持最高的相对精度。这使得极度节省内存的 INT4 (W4A16) 量化配置在 LLM 上具有实用性，从而间接实现了“在可接受精度损失下，最高效的推理性能”。

## GPTQ (GPT Quantization)
GPTQ 是一种离线（Post-Training）量化方法，它通过对模型权重进行逐层优化，以最小化量化带来的精度损失。
核心思想：逐层最小化误差

GPTQ 的核心是利用一种称为 Optimal Brain Damage (OBD) 或 二阶信息 的概念来决定如何量化权重。
- 目标： 对于模型中的每一层，找到最佳的 INT4 权重，使得量化后的输出尽可能接近原始 FP16 模型的输出。
- 方法： 它不是简单地四舍五入，而是使用一种最小二乘法（Least Squares）的优化过程。在量化每一层时，它会使用一小部分校准数据（calibration data，通常几百个样本）通过最小化均方误差 (MSE) 来确定最优的量化值。
- 操作： 逐列、逐层进行优化，并使用 Hessian 矩阵的逆（或近似）来计算量化误差对其他未量化权重的影响，并进行补偿。

优势与劣势
<div style="font-size: 14px;width:100%;overflow-x:auto;">
<table style="width:1400px;">
  <tr>
    <td>

|类别|优势|劣势|
| :--- |:--- |:--- |
|优势|	* 精度高： 通常是所有离线 4-bit 量化方法中精度表现最好的之一。* 无需训练： 属于离线量化，无需反向传播或大量训练数据。|* 量化速度慢： 量化过程需要进行复杂的二阶优化，量化时间较长。* 占用内存高： 量化过程中需要存储大量中间数据（如 Hessian 矩阵），对 CPU/GPU 内存要求较高。|
  </tr>
</table>
</div>

## SmoothQuant
SmoothQuant 是一种混合量化策略，它通过平滑激活值的分布，使激活值和权重都更容易被量化到低位宽（通常是 W8A8 或 W4A8）。

核心思想：平衡权重和激活值的难度

在大型 LLM 中，激活值的分布往往比权重的分布更难处理，因为激活值中经常出现“离群值”（Outliers，少数几个极大的值），这使得 INT8/INT4 量化难以准确覆盖整个动态范围。

<div style="
  border: 1px solid #ddd;        /* 边框样式 */
  padding: 10px;                 /* 内边距 */
  background-color: #f3ba2f;     /* 背景颜色 - 可修改 */
  color: #4e4e4e;                /* 文字颜色 - 可修改 */
  border-radius: 5px;            /* 圆角半径 */
  margin: 10px 0;                /* 外边距 */
">
SmoothQuant 的策略是：将激活值中的量化难度“转移”到权重上。
</div>

- 平滑操作： 通过引入一个 平滑因子 s，将激活值 X 的量化难度转移给权重 W：
- W′=W⋅s和X′=X/s
- 结果： 经过 s 因子操作后：
  1. 新的激活值 X′ 的分布变得更平坦，更容易进行低位宽（如 INT8）量化。
  2. 新的权重 W′ 的分布变得更加极端（包含更大的数值）。
- 量化： 由于权重通常是在离线量化中处理一次，可以容忍更高的量化难度。因此，平滑后的激活值 X′使用 INT8/INT4 量化，平滑后的权重 W′ 也使用 INT8/INT4 量化。

<div style="font-size: 14px;width:100%;overflow-x:auto;">
<table style="width:1800px;">
  <tr>
    <td>

|类别|优势|劣势|
| :--- |:--- |:--- |
|优势|* W8A8/W4A8 可行性： 解决了激活值难以量化的问题，使得全 INT8 (W8A8) 或 W4A8 等配置在 LLM 上可行。* 推理速度快： 权重和激活值都是低位宽，推理计算效率极高。|* 需要预处理： 需要在推理前对权重进行一次性平滑处理。* 对权重增加难度： 虽然解决了激活值的难度，但将难度转移给了权重，可能需要更精细的权重量化。|
  </tr>
</table>
</div>

## 三种量化方法的区别总结
<div style="font-size: 14px;width:100%;overflow-x:auto;">
<table style="width:1800px;">
  <tr>
    <td>

|特征|AWQ (Activation-aware Weight Quantization)|GPTQ (GPT Quantization)	SmoothQuant|
| :--- |:--- |:--- |
|主要目标|W4A16 保持高精度	|W4A16 保持高精度	|W8A8/W4A8 提高量化可行性|
|核心机制|	保护权重：基于激活值的重要性（最大值），保护高敏感度的权重。	|最小化误差：通过二阶优化逐层计算和补偿量化误差。	|平滑激活：将激活值的量化难度转移到权重上，使激活值更容易量化。|
|处理对象|	仅缩放权重。利用激活值信息指导权重缩放。	|仅优化权重。优化权重使输出误差最小。	|同时改变权重和激活值。通过平滑因子 $s$ 重新分配数据分布。|
|量化速度	|快。量化过程简单高效。	|慢。涉及复杂的二阶优化。	|快。主要是一个简单的缩放操作。|
|适用场景	|内存受限，需要极致压缩，同时保持推理速度（W4A16）。	|需要最高精度保证，且能容忍较慢的离线量化时间。	|需要实现激活值低位宽 (A8/A4)，最大化计算吞吐量。|
  </tr>
</table>
</div>

实际应用中的选择：
1. 如果您需要最低的内存占用，并且能接受 W4A16（权重 4 位，激活值 16 位）的混合计算模式，并且追求最快的量化速度，请选择 AWQ。
2. 如果您对模型的推理精度要求极高，并且可以接受较慢的离线量化时间，请选择 GPTQ。
3. 如果您想让权重和激活值都实现低位宽（如 W8A8），以最大化硬件的 INT8 计算吞吐量，请选择 SmoothQuant。

## 为什么需要混合精度？（FP8/NVFP4 vs. FP16）
在 LLM 推理中，该 SDK 采用了一种混合精度策略：
权重和 GEMM 操作采用 FP8 或 NVFP4 格式，而 LayerNorm、KV 缓存、LM 头部和注意力层则保持 FP16 格式。
这样做是为了在性能和精度之间取得最佳平衡：

### 采用低精度（FP8/NVFP4）的部分：
- 权重 (Weights): 模型权重是模型中数量最大的部分，压缩它们可以显著节省内存。
- GEMM 操作 (General Matrix Multiply): 这是 LLM 推理过程中计算量最大、耗时最久的部分（主要是矩阵乘法）。使用 FP8/NVFP4 可以在支持的硬件上调用高度优化的低精度计算核，从而大幅提升推理速度（内核性能）。

### 保持高精度（FP16）的部分：
- LayerNorm (层归一化): 这是一个稳定性要求很高的操作。如果在这里使用过低的精度，很可能会导致数值溢出或欠流，从而使模型输出迅速崩溃或失去有效性。
- KV 缓存 (Key/Value Cache): KV 缓存存储了中间计算结果，会重复多次被访问和使用。如果精度太低，误差会随着序列长度的增加而累积，最终影响生成文本的质量。
- LM 头部 (Language Model Head) 和注意力层 (Attention Layers): 这些是决定最终输出结果的关键部分。保持 FP16 能够保证最终的 Logits 具有足够的数值精度，从而确保模型生成的结果是准确的。

简而言之，计算量大且对精度不太敏感的部分（如 GEMM）使用低精度来加速；而对数值稳定性或最终输出质量至关重要的部分（如 LayerNorm、KV 缓存）则保持 FP16 来保证准确性。