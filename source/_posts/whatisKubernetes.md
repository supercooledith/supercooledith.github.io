---
title: 什么是 Kubernetes(K8s)？
date: 2025-10-24 22:13:15
categories: 人工智能杂谈
---
# 背景：容器、Docker 和 Kubernetes
## 什么是容器？
<div style="
  border: 1px solid #ddd;        /* 边框样式 */
  padding: 10px;                 /* 内边距 */
  background-color: #f3ba2f;     /* 背景颜色 - 可修改 */
  color: #4e4e4e;                /* 文字颜色 - 可修改 */
  border-radius: 5px;            /* 圆角半径 */
  margin: 10px 0;                /* 外边距 */
">
容器是轻量级、可执行的应用组件，将源代码与运行代码所需的所有操作系统（OS）库和依赖项结合在一起，使其能在任何环境中运行。容器利用了一种操作系统虚拟化技术，允许多个应用程序共享单个操作系统实例，通过隔离进程和控制进程可以访问的 CPU、内存和磁盘量来实现。
</div>

由于它们比虚拟机（VMs）更小、资源效率更高、更便携，容器已成为现代云原生应用的事实计算单元。容器也更节省资源。它们允许你在更少的机器（虚拟服务器和物理服务器）上运行更多应用程序，并使用更少的操作系统实例。由于容器可以在任何地方一致地运行，它们已成为支持混合多云环境的基础架构的关键，这种环境结合了本地、私有云、公共云以及来自多个云供应商的多个云服务。

## 什么是 Docker？
Docker 是创建和运行 Linux®容器的最流行工具。虽然容器技术的早期形式早在几十年前就已出现（如 FreeBSD Jails 和 AIX Workload Partitions），但直到 2013 年 Docker 以新的开发者友好和云友好的实现方式将它们带给大众，容器才实现了民主化。Docker 最初是一个开源项目，但如今，它也指代 Docker Inc.这家公司，该公司生产 Docker——一个商业容器工具包，它基于开源项目并贡献这些改进回到开源社区。
<div style="
  border: 1px solid #ddd;        /* 边框样式 */
  padding: 10px;                 /* 内边距 */
  background-color: #f3ba2f;     /* 背景颜色 - 可修改 */
  color: #4e4e4e;                /* 文字颜色 - 可修改 */
  border-radius: 5px;            /* 圆角半径 */
  margin: 10px 0;                /* 外边距 */
">
Docker 基于传统的 Linux 容器技术构建，但实现了对 Linux 内核进程更细粒度的虚拟化，并添加了功能，使容器对开发者来说更易于构建、部署、管理和安全。
</div>

虽然目前存在其他容器运行时平台，如开放容器倡议（OCI）、CoreOS 和 Canonical（Ubuntu）LXD，但 Docker 是主流选择。此外，Docker 已成为容器的代名词，有时会被误认为是与 Kubernetes 等互补技术竞争的对手。

<div style="
  border: 1px solid #ddd;        /* 边框样式 */
  padding: 10px;                 /* 内边距 */
  background-color: #f3ba2f;     /* 背景颜色 - 可修改 */
  color: #4e4e4e;                /* 文字颜色 - 可修改 */
  border-radius: 5px;            /* 圆角半径 */
  margin: 10px 0;                /* 外边距 */
">
如今，Docker 和 Kubernetes 是主要的容器化工具，Docker 在市场上占据 82%的份额，而 Kubernetes 在 2024 年控制着 11.52%的市场份额。
</div>

## 什么是Kubernetes？
<div style="
  border: 1px solid #ddd;        /* 边框样式 */
  padding: 10px;                 /* 内边距 */
  background-color: #f3ba2f;     /* 背景颜色 - 可修改 */
  color: #4e4e4e;                /* 文字颜色 - 可修改 */
  border-radius: 5px;            /* 圆角半径 */
  margin: 10px 0;                /* 外边距 */
">
Kubernetes，也称为 k8s 或 kube，是一个开源的容器编排平台，用于调度和自动化容器化应用程序的部署、管理和扩展。
</div>

如今，Kubernetes 以及更广泛的容器相关技术生态系统已经融合，形成了现代云基础设施的基础。这个生态系统使组织能够提供一种高度生产力的混合多云计算环境，以执行围绕基础设施和操作的各种复杂任务。它还通过支持一次构建、随处部署的应用程序构建方法，支持云原生开发。这个词 Kubernetes 源自希腊语，意为舵手或飞行员，因此 Kubernetes 标志中也有舵的形象。

### 使用 Kubernetes 进行容器编排
随着容器的普及，如今，一个组织可能拥有数百或数千个容器。运维团队需要调度和自动化容器的部署、网络、可扩展性和可用性。这时就需要容器编排。
基于 Borg——Google 的内部容器编排平台，Kubernetes 于 2014 年以开源工具的形式向公众发布，微软、Red Hat®、IBM 等主要科技企业作为早期成员加入了 Kubernetes 社区。2015 年，Google 将 Kubernetes 捐赠给了云原生计算基金会（CNCF），这是云原生计算的开源、供应商中立中心。
2016 年 3 月，Kubernetes 成为 CNCF 的首个托管项目。自那时起，Kubernetes 成为全球最广泛使用的容器编排工具，用于运行基于容器的应用。在 CNCF 的报告中，Kubernetes 是世界上第二大的开源项目（仅次于 Linux），并且是 71% 的财富 100 强公司的首选容器编排工具。
2018 年，Kubernetes 成为 CNCF 的首个毕业项目，成为历史上增长最快的开源项目之一。虽然其他容器编排选项，尤其是 Docker Swarm 和 Apache Mesos，在早期获得了一些关注，但 Kubernetes 很快成为最广泛采用的方案。
自 2016 年 Kubernetes 加入 CNCF 以来，贡献者数量已增至 8,012 人，增长了 996%。截至本文撰写时，贡献者已在 GitHub 上的 Kubernetes 仓库中提交了超过 123,000 次提交。

### Kubernetes 有什么作用？
Kubernetes 负责在整个应用程序生命周期中调度和自动化与容器相关的任务，包括以下内容。
- 将指定数量的容器部署到指定主机，并保持它们在期望的状态下运行。
- 发布是指对部署进行的变更。Kubernetes 允许你启动、暂停、恢复或回滚发布。
- Kubernetes 可以通过使用域名系统（DNS）名称或 IP 地址自动将容器暴露给互联网或其他容器。
- 设置 Kubernetes 以按需挂载持久本地或云存储供您的容器使用。
- 基于 CPU 使用率或自定义指标，Kubernetes 的负载均衡可以将工作负载分配到网络中以保持性能和稳定性。
- 当流量激增时，Kubernetes 自动扩展可以根据需要启动新的集群来处理额外的工作负载。
- 当容器失败时，Kubernetes 可以自动重启或替换它以防止停机。它还可以关闭不符合您健康检查要求的容器。

### Kubernetes vs dockr
<div style="
  border: 1px solid #ddd;        /* 边框样式 */
  padding: 10px;                 /* 内边距 */
  background-color: #f3ba2f;     /* 背景颜色 - 可修改 */
  color: #4e4e4e;                /* 文字颜色 - 可修改 */
  border-radius: 5px;            /* 圆角半径 */
  margin: 10px 0;                /* 外边距 */
">
使用Kubernetes 还是使用 dockr这不是一个单选题，K8s的诞生就是为了实现部署现有的Docker工作负载并大规模运行它们--解决真正的复杂性。
</div>

![](https://cdn.jsdelivr.net/gh/supercooledith/website_picture@main/whiteboard_exported_image-2.png)

# Kubernetes 架构和组件
![](https://cdn.jsdelivr.net/gh/supercooledith/website_picture@main/whiteboard_exported_image-3.png)

## Kubernetes 架构
部署 Kubernetes 涉及集群，它是 Kubernetes 架构的基本单元。集群cluster由节点 nodes组成，每个节点代表一个计算主机，既可以是物理机（裸金属服务器），也可以是虚拟机。
Kubernetes 架构由两部分组成：控制平面组件和用于管理单个节点的组件。
- 一个节点由 Pod 组成。Pod 是一组共享相同计算资源和相同网络的容器，它们也是 Kubernetes 中可扩展的单位。如果一个 Pod 中的容器接收到的流量超过了它能处理的范围，Kubernetes 将会在集群中的其他节点上复制该 Pod。
- 控制平面会自动处理在集群中的节点间调度 Pod。

### 控制平面组件
每个集群都有一个主节点master node来处理集群的控制平面。主节点运行一个调度服务，根据开发人员设定的部署要求和可用的计算能力，自动确定容器部署的时间和位置。
Kubernetes 集群中的主要组件是 kube-apiserver、etcd、kube-scheduler、kube-controller-manager 和 cloud-controller-manager：
- API 服务器：Kubernetes 中的应用程序编程接口（API）服务器公开了 Kubernetes API（用于管理、创建和配置 Kubernetes 集群的接口），并作为所有命令和查询的入口点。
- etcd：etcd 是一个开源的分布式键值存储，用于保存和管理分布式系统运行所需的关键信息。在 Kubernetes 中，etcd 管理配置数据、状态数据和元数据。
- 调度器：该组件跟踪新创建的 Pod，并选择它们运行的节点。调度器考虑资源可用性、分配限制、硬件和软件要求等。
- 控制器管理器：一组内置控制器，Kubernetes 控制器管理器运行一个控制循环，监控集群的共享状态，并与 API 服务器通信以管理资源、Pod 或服务端点。控制器管理器由多个进程组成，这些进程被捆绑在一起以减少复杂性，并在一个进程中运行。
- 云控制器管理器：这个组件在功能上与控制器管理器类似。它连接到云提供商的 API，并将与该云平台交互的组件与仅在集群内部交互的组件分离开来。

### 节点组件
工作节点负责部署、运行和管理容器化应用程序：
- Kubelet：Kubelet 是一个软件代理，它接收并执行来自主节点的指令，并帮助确保容器在 Pod 中运行。
- Kube-proxy：安装在集群的每个节点上，kube-proxy 维护主机上的网络规则，并监控服务和 Pod 的变化。

### 其他 Kubernetes 概念和术语
- 副本集：副本集维护特定工作负载的稳定副本 Pod 集。
- 部署：部署控制容器化应用程序的创建和状态，并保持其运行。它指定集群上应运行多少个 Pod 副本。如果 Pod 失败，部署会创建一个新的。
- kubectl：开发者通过 kubectl（一个由命令行界面 CLI 组成的开发者工具）直接与 Kubernetes API 通信来管理集群操作。
- 守护进程集：守护进程集负责帮助确保在集群的每个节点上都创建一个 Pod。
- 插件：Kubernetes 插件扩展功能，包括集群 DNS（一个为 Kubernetes 提供 DNS 记录的 DNS 服务器）、Web 界面（一个用于管理集群的 Kubernetes 仪表板）等。
- 服务：Kubernetes 服务是一种抽象层，定义了一组逻辑 Pod 及其访问方式。服务在集群中的一个或多个 Pod 上运行的网络应用程序提供网络访问。它以抽象的方式对 Pod 进行负载均衡。

# Kubernetes 生态系统
今天，已有超过 90 种认证的 Kubernetes 产品，包括提供工具、升级和附加功能的企业级管理平台，这些功能可加速容器化应用程序的开发和交付。
## 托管 Kubernetes 服务
虽然 Kubernetes 是编排基于容器的云应用的首选技术，但它依赖于其他组件才能完全运行，这些组件包括网络、入站流量、负载均衡、存储、持续集成和持续交付（CI/CD）等。虽然可以在基于云的环境中自建 Kubernetes 集群，但对于企业组织来说，设置和管理可能相当复杂。这时就需要用到托管 Kubernetes 服务。
通过托管 Kubernetes 服务，服务提供商会通常管理 Kubernetes 控制平面组件。托管服务提供商帮助自动化更新、负载均衡、扩展和监控等常规流程。例如，Red Hat® OpenShift®是一种可以在任何环境中部署的 Kubernetes 服务，支持所有主要的公有云，包括 Amazon Web Services (AWS)、Microsoft Azure、Google Cloud 和 IBM Cloud®。许多云服务提供商也提供自己的托管 Kubernetes 服务。

## Kubernetes 监控工具
Kubernetes 监控是指收集和分析与 Kubernetes 集群中运行的容器化应用的健康状况、性能和成本特征相关的数据。
监控 Kubernetes 集群使管理员和用户能够跟踪运行时间、集群资源的使用情况以及集群组件之间的交互。监控有助于快速识别资源不足、故障以及无法加入集群的节点等问题。今天的 Kubernetes 监控解决方案包括用于应用性能管理（APM）、可观察性、应用资源管理（ARM）的自动化工具等。

## Istio 服务网格
Kubernetes 可以部署和扩展 Pod，但它无法管理或自动化它们之间的路由，也不提供任何用于监控、保护或调试这些连接的工具。随着集群中容器的数量增加，它们之间可能的连接路径呈指数级增长。例如，2 个容器有 2 个潜在连接，但 10 个 Pod 有 90 个，这会带来潜在的配置和管理噩梦。
Istio 是一个可配置的、开源的服务网格层，通过连接、监控和保护 Kubernetes 集群中的容器来提供解决方案。其他重要优势包括改进调试的能力，以及 DevOps 团队和管理员可以使用它来监控容器之间连接的延迟、服务中错误和其他特性的仪表板。

## Knative 和服务器 less 计算
Knative（发音为“kay-native”）是一个开源平台，它为服务器 less 计算提供了一个便捷的入口，服务器 less 计算是一种云计算应用开发和执行模型，它使开发者能够在无需配置或管理服务器或后端基础设施的情况下构建和运行应用程序代码。与部署一个持续运行但空闲等待请求的代码实例不同，无服务器架构按需启动代码，根据需求波动进行扩展或缩减，并在不使用时将其关闭。无服务器架构防止了计算能力和能源的浪费，并降低了成本，因为你只需为实际运行的代码付费。

## Tekton
Tekton 是一个开放源代码、供应商中立框架，用于创建由持续交付基金会（CDF）管理的持续集成和交付（CI/CD）系统。作为 Kubernetes 框架，Tekton 通过提供管道、工作流和其他构建模块的行业规范来帮助现代化持续交付，使跨多个云提供商或混合环境部署更快、更简单。
值得注意的是，Tekton 是 Knative Build 的继任者，后者在一些 Knative 发行版中仍然得到支持。在 Kubernetes 环境中，Tekton 管道已成为构建容器镜像并在容器注册表中部署它们的行业标准。

# Kubernetes 应用场景
企业组织使用 Kubernetes 来支持以下用例，这些用例在现代 IT 基础设施中都起着至关重要的作用。
## 微服务架构或云原生开发
- 云原生是一种用于构建、部署和管理基于云的应用程序的软件开发方法。云原生的主要优势在于它允许 DevOps 和其他团队编写一次代码，并在任何云服务提供商的任何云基础设施上部署。
- 这种现代开发过程依赖于微服务，这是一种将单个应用程序由许多松散耦合且可独立部署的小型组件或服务组成的方法，这些组件或服务由 Kubernetes 管理的容器来部署。
- Kubernetes 帮助确保每个微服务都能获得运行所需的资源，同时最小化手动管理多个容器的操作开销。
## 混合多云环境
- 混合云将公有云、私有云和本地数据中心基础设施结合并统一，以创建一个单一、灵活、成本优化的 IT 基础设施。
- 如今，混合云已经与多云融合，即从多个云供应商获取公有云服务，以创建混合多云环境。
- 混合多云方法提供了更大的灵活性，并减少了组织对单一供应商的依赖，防止供应商锁定。由于 Kubernetes 为云原生开发奠定了基础，因此它是混合多云采用的关键。
## 大规模应用
- Kubernetes 支持大规模云应用部署，具有自动扩展功能。这一过程允许应用根据需求变化自动进行扩展或缩减，以实现快速、高效和最短的停机时间。
- Kubernetes 部署的弹性可扩展性意味着可以根据用户流量的变化（如零售网站上的限时促销）来增加或减少资源。
## 应用现代化
- Kubernetes 提供了支持应用现代化的现代云平台，能够将单体遗留应用迁移和转换为基于微服务架构的云应用。
## DevOps 实践
- 自动化是 DevOps 的核心，它通过结合和自动化软件开发和 IT 运营团队的工作，加速了高质量软件的交付。
- Kubernetes 通过自动化应用程序的配置和部署，帮助 DevOps 团队快速构建和更新应用程序。
## 人工智能（AI）和机器学习（ML）
- 支持人工智能的机器学习模型和大型语言模型（LLM）包含难以单独管理和耗时较多的组件。通过在云环境中自动化配置、部署和可扩展性，Kubernetes 有助于提供训练、测试和部署这些复杂模型所需的敏捷性和灵活性。


<div style="margin: 40px 0; overflow: hidden;">
  <div style="
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
  ">
    <div style="flex: 1 0 100px; max-width: 120px; min-width: 80px;">
      <img src="https://cdn.jsdelivr.net/gh/supercooledith/website_picture@main/Written-By-Human-Not-By-AI-Badge-white%402x.png" 
           alt="真人撰写 非AI生成" 
           style="width: 100%; height: auto; display: block;">
    </div>
    <div style="flex: 1 0 100px; max-width: 120px; min-width: 80px;">
      <img src="https://cdn.jsdelivr.net/gh/supercooledith/website_picture@main/Written-By-Humans-Not-By-AI-Badge-white%402x.png" 
           alt="written by humans not by AI" 
           style="width: 100%; height: auto; display: block;">
    </div>
    <div style="flex: 1 0 100px; max-width: 120px; min-width: 80px;">
      <img src="https://cdn.jsdelivr.net/gh/supercooledith/website_picture@main/Japanese_Written-By-Human-Not-By-AI-Badge-white%402x.png" 
           alt="AIではなく人間が書いた" 
           style="width: 100%; height: auto; display: block;">
    </div>
  </div>
</div>