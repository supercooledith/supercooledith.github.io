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

|  | A800 (PCIe/SXM） | A100 (PCIe/SXM)| H800 (PCIe/SXM)| H100 (PCIe/SXM)  | H200 (PCIe/SXM)  | H20  | L20 (PCIe) | 4090D | 5090D |
|  :----:   |    :----:   |      :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |     :----:   |
| Year      |2022|2022|2023|2024|2024|2023|2023|2022|2024|
| Manufacturing   |7nm|5nm|7nm|5nm|5nm|5nm|5nm|5nm|5nm|
| Architecture   |Ampere|Ampere|Hopper <br>(阉割)|Hopper|Hopper|Hopper|Ada Lovelace|Ada Lovelace|40MB|
| Max Power   |300/400 W|300/400 W|300-350/700W|350-400/700 W|600/700W|400W|350W|425W|575W|
| CUDA |8.0|8.0|9.0|9.0|9.0|-|8.9|9.0|12.0|
| GPU Mem   |80G HBM2e|80G HBM2e|80G HBM3|64G/94G/80G HBM3|141GB HBM3e|96G HBM3|48G GDDR6|24GB GDDR6X|32 GB GDDR7|
| GPU Mem BW   |2TB/s|1.9/2TB/s|2TB/s|3.9/3.35 TB/s|4.8 TB/s|4TB/s|864GB/s|1008 GB/s|1792 GB/s|
| GPU Interconnect <br> (one-to-one max bw)  |PCIe 4.0：64GB/s <br> NVLink：400GB/s|PCIe Gen4 64GB/s <br> NVLINK 600GB/s|NVLink: 400GB/s <br> PCIe 5.0: 128GB/s|PCIe Gen5 128GB/s<br>NVLINK 600/900GB/s|PCIe Gen5 128GB/s<br>NVLINK 900 GB/s|PCIe Gen5 128GB/s<br>NVLINK 900GB/s|PCIe Gen4 64GB/s|PCIe 4.0 x16 (单向32 GB/s, 双向64 GB/s)|-|
|GPU Interconnect <br> (one-to-many total bw) |2TB/s|1.9/2TB/s|2TB/s|3.9/3.35 TB/s|4.8 TB/s|4TB/s|864GB/s|1TB/s|-|
| FP32  TFLOPS   |19.5|19.5|51 &#124; 67|60 &#124; 67|60 &#124; 67|44|59.8|-|-|
| TF32  TFLOPS   |156 &#124; 312|156 &#124; 312| 756  &#124; 989|989 &#124; 853|989 &#124; 853|74|59.8|-|-|
| BF16  TFLOPS   |156 &#124; 312|312 &#124; 624|1513  &#124; 1979|1671  &#124; 1979|1671  &#124; 1979|148  &#124; 148|119  &#124; 119|-|-|
| FP16  TFLOPS   |156 &#124; 312|312 &#124; 624|1513  &#124; 1979|1671  &#124; 1979|1671  &#124; 1979|148  &#124; 14|119  &#124; 119|-|-|
| FP8   TFLOPS   |NOT support|NOT support|3026  &#124; 3958|3341  &#124; 3958|3341  &#124; 3958|296  &#124; 296|-|-|-|
| INT8  TOPS     |NOT support|624 &#124; 1248|3026  &#124; 3958|3341  &#124; 3958|3341  &#124; 3958|296  &#124; 296|-|-|-|
| L1 Cache   |192 KB|192 KB|256 KB|256 KB|256 KB|-|128 KB|128 KB|128 KB|
| L2 Cache   |40MB|80MB|50MB|50MB|50MB|60MB|96MB|72MB|96MB|

  </tr>
</table>

</div>
