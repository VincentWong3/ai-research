# 人工智能问题树：从思想的形式化到开放世界智能

*一份以问题为线索的人工智能知识地图，覆盖表征、计算、形式框架与开放世界。*

人工智能的方法看起来差异很大：证明一个定理、从图像中识别物体、预测接下来的事件、让机器人完成任务，似乎属于不同领域。沿着这些任务继续追问，却会遇到一些共同问题：系统在处理什么，怎样得到结论，凭什么相信结论，又怎样从经验中改进？

这份地图沿着这些追问展开。先从具体困难理解概念为什么需要被提出，再查看各分支的问题与回答；章节导学、关键结论和横向联系帮助把分散的知识连成主线。

## 阅读导航

- [0. 问题怎样一步步展开](#evolution)：从具体困难出发，理解概念的来由。
- [1. 总体结构](#overview)：把前面的叙述放回整棵树。
- [2. 完整问题树](#tree)：逐层查看问题、简短回答与关键理论。
- [3. 章级导学](#guide)：为什么出现 → 已有回答 → 新的困难。
- [4. 关键结论选读](#insights)：回看每个重要转折带来的认识。
- [5. 横向联系](#connections)：查看不同分支怎样相互支持。
- [6. 思想史中的问题与突破](#history)：了解相关人物与理论的贡献。
- [7. 现代模型与方法](#modern)：理解新方法回答了哪些基本问题。

初次阅读可以先读第 0、1 节，再选择感兴趣的分支。查阅某一专题时，可从第 3 节的章节链接进入问题树；读完后再回看关键结论与横向联系。

<a id="evolution"></a>

## 0. 问题怎样一步步展开？

### 0.1 从一个理想开始：推理能否像计算一样接受检查？

两个人围绕一个判断发生争论，分歧可能来自不同地方：有人对概念的理解不同，有人使用了不同前提，也有人从前提走到结论时漏掉了必要步骤。如果能把这些地方明确写出，争论中的一部分是否就能通过一套可复查的过程解决？

莱布尼茨的普遍符号语言与推理演算理想，为这个问题提供了一个重要起点：让思想得到明确表达，让推理能够像计算那样接受检查。今天，人工智能把追问进一步扩展到了感知、学习与行动。

这个理想首先让人想到数学证明。给定一个命题，怎样把它准确写出？怎样区分合法推导与看似合理的直觉？如果每一步都能检查，机器是否就能构造并验证证明？形式语言、证明理论和计算理论正是围绕这些问题获得发展的；这是一条理解问题的线索，而不是它们唯一的历史来源。

但人工智能的任务并不止于证明。再看一个具体要求：“请把桌上的杯子送到门口。”这一次，系统不仅要从前提出发计算，还要知道真实对象在哪里、任务目标是什么，以及行动后环境会怎样变化。

**证明命题与搬运杯子并非同一种任务，却共享两个基础问题：处理的对象怎样表示，处理过程怎样执行。** 先研究这两个共同基础，再考察在给定形式框架与开放现实环境中，各自会遇到什么新的困难。

### 0.2 机器面对的，怎样成为它能够处理的对象？

人听到这句话，往往会自然地理解哪个是杯子、桌子在哪里、什么叫“送到门口”。系统却需要某种内部形式来区分这些内容：一个对象的名称或特征、一组位置坐标、对象之间的关系，以及任务完成时应当满足的条件。

**把对象及其有关信息表达为系统能够处理的形式，就是表征（Representation）要研究的事情。** 它首先追问表示什么，然后追问用什么语言表达、这些表达指向什么，以及大量知识怎样组织起来。

表示方法也有不同选择。同一个杯子可以表示为逻辑对象、图像特征、三维几何形状或一个向量。符号要有明确含义，连续表示也要保留任务所需的信息。只留下颜色可能有助于分类，却未必足以判断怎样抓取。

数学证明同样依赖表征：只有把“对于任意”“存在某个”、前提和待证结论写成明确的逻辑表达式，才能检查推理究竟使用了哪些条件。由此可见，**表征既不是特定的传感器格式，也不等于传统逻辑符号；它首先决定了系统把什么当作可以处理的对象。**

因此，表征并不是在计算开始前随便选一个格式。它会影响哪些问题能够被提出、哪些信息会丢失，以及后续求解有多困难。这些问题构成第一条主干：**I · 表征**，对应 R1—R6。

### 0.3 有了表示，怎样从中得到答案？

写出“杯子在桌上”和“目标在门口”，还不能自动得到行动方案。系统需要按照明确步骤查找路径、判断约束、计算抓取位置。在数学证明中也一样：写出了前提与结论，并不意味着证明就会自动出现；机器必须知道何种推理规则可以使用，并找到符合这些规则的推导步骤。

**按照明确规则执行处理过程，是计算（Computation）的基本问题。** 这里既要说明一步操作是什么，也要说明步骤怎样组合、何时结束，以及结果怎样检查。对于数学证明，关键还在于区分任意符号变换与合法推导：从“若 P 则 Q”和“P”推出“Q”有明确规则，随意改写符号却不能保证结论成立。

由此，证明不再只是一段说服人的文字，还可以成为可构造、可变换和可检查的对象。在合适的逻辑与类型体系中，证明与程序存在精确的结构对应，证明的化简也能对应程序的归约。这说明形式推理与机械计算为什么会发生深刻联系，而不只是因为二者都在操作符号。

随后出现两道界限。第一，问题即使表达得很清楚，也未必存在解决所有实例的通用算法。第二，即使存在算法，时间、存储或数据搬运的成本也可能高到无法承担。因此，计算分支从算法与证明，展开到可计算性、复杂性，以及搜索、分解、优化和结果复用等机制。

这些问题构成第二条主干：**II · 计算**，对应 C1—C7。表征与计算相互影响，实际研究中常常需要一起设计。

### 0.4 当任务条件已经说清楚，系统能做到什么？

先看数学证明：规定形式语言、公理、推理规则和待证命题，就可以研究哪些结论可由前提推出，以及怎样机械寻找、检查证明。再看搬运杯子：规定对象、动作、状态转移、任务约束与目标，就可以研究怎样搜索路径、安排动作、减少风险。两类任务的对象不同，但都在**把问题框架说清楚之后，考察表示与计算能够产生何种能力**。

这并不要求一切都已确定。一个概率模型可以明确规定变量之间的关系，却不知道某个隐状态；一个规划问题可以明确行动集合，却不知道具体转移参数。于是仍需研究：获得新证据后怎样更新信念？知识允许例外时怎样修正结论？候选解太多时怎样压缩搜索？多个目标如何权衡？

这些追问分别引出演绎推理、不完整知识推理、概率推断、搜索优化和决策规划。即使是归纳、溯因、类比与因果查询，也可以在明确的假设空间和语义条件下接受形式研究；其现实前提如何获得、怎样检验，是另一层问题。

**在明确规定的问题条件中研究这些能力，本图称为给定形式框架下的求解（Formal World）。** 重点是把对象、模型类、规则或目标等研究条件说明白，从而判断答案何时成立、需要多少资源。这一部分是第三条主干“表征 × 计算”的第一种问题情境，对应 F1—F8；F9 讨论这一情境的边界，并通向 B。

框架明确仍然可以学习。例如，模型的形式确定了，其中一些数值参数仍可能需要从样本中估计；规定了棋类规则，也不意味着已经知道好策略。此外，不同求解方法还可能在**不同层面**出现共通性：概率推断和路径算法可以共享局部组合与聚合的代数模式，概率理论和因果模型则分别提供各自的语义框架。F7 讨论这种分层次的统一与边界，F8 讨论形式框架中的学习。

### 0.5 为什么有了求解方法，现实任务仍可能失败？

回到搬运杯子的任务。即使系统内部的求解过程完全符合规则，它仍可能完不成任务。至少有三个不同原因。

**第一，计算可能来不及。** 路径和动作组合太多，或者模型中变量之间的依赖太复杂，求解就可能超过可用资源。此时需要更好的表示、求解算法或计算策略。这种困难在棋类和定理证明等规则明确的任务中同样存在。关于可扩展搜索与学习的经验认识，《苦涩的教训》提供了一条重要线索。

**第二，内部表达可能没有正确对应现实。** 系统把某片图像区域标为“杯子”，但那可能是倒影；地图坐标也可能与实际位置不一致。把内部表示与实际对象、观测和行动后果建立可核查的联系，就是这里所说的接地（Grounding）。形式推导检查的是表达之间的关系，接地还需要现实证据。

**第三，原有模型可能不再够用。** 系统确实找到了杯子，却发现这是一个透明、易碎或装满液体的杯子，原来采用的观测方式、对象分类或搬运模型不足以描述当前情况。此时除了重新求解，还可能需要补充变量、提出新假设或改变模型。

F9 将这三类困难分别概括为**计算扩展性、现实接地与模型适用性**。它们可能同时出现，处理办法却不能互相代替：加快搜索不能独自核查对象指称，建立了初步现实对应也不保证模型永远适用。

这里尤其要分清：**计算扩展性即使在纯粹的数学证明或规则明确的棋类中也会出现**，因此它会推动更好的算法以及计算策略学习，却不是开放世界独有的困难。现实接地与模型适用性的持续校验，则进一步要求系统面向外部环境获取和修正认识。三种困难相互关联，并非一个接一个的流派替代。

**当现实新情况可能超出现有表示、假设或模型时，系统如何持续认识与适应，就是开放世界（Open World）的问题。** 同一系统既在当前框架中计算，也在现实反馈中检验和修正框架。这就引出了“表征 × 计算”的第二种问题情境。

### 0.6 没有人给出全部前提时，新认识从哪里来？

现实首先给系统的是图像、测量、语言描述和行动后果。系统需要从这些信息中区分对象、融合证据、估计当前状态，并核查内部表示是否仍与现实相符。O1 讨论感知、状态估计与接地。

接下来要回答：尚未给出的规律怎样发现？搬运多次后，系统可能从经验中发现速度与洒水之间的关系；看到一次异常失败，可能提出抓取位置不合适、物体打滑等解释；面对新物体，也可能借用旧任务中的关系结构。从经验推广、提出解释和迁移关系结构，分别对应归纳、溯因与类比。若还要判断某个因素是否真正引起结果，就需要因果研究；例如速度与洒水同时变化，并不独自证明前者导致后者，还要排除其他解释，必要时通过实验比较。O2 追问这些候选规律与解释怎样提出，又凭什么相信它们。

这不只是机器人学的问题。设想科学家观察到某种材料的性能在特定条件下突然改变：他们需要从有限样本归纳变化规律，提出若干竞争的机制解释，用旧理论作类比，再设计能区分这些解释的实验。新的科学认识并非单靠形式演绎就会自动产生，但假设一旦明确，又可以通过数学推导提出可检验的预测。**科学发现与机器人适应，因而共享知识如何产生和受检验的问题。**

提出一个候选规律之后，系统还需要把它变成可用于预测和决策的内部知识。哪些信息写进参数，哪些形成概念、规则或模型结构？能够描述并预测环境如何演化的模型，通常称为世界模型；用于行动任务时，还要表示行动怎样影响未来。O3 关注这些表征与模型怎样从经验中形成、修正和组织。

但模型学会了，求解未必就快。系统能否重用可靠的路径片段，学习先搜索哪些候选，或者把反复进行的复杂推断学成一个快速近似映射？O4 讨论计算怎样通过经验得到改善，以及一次求解怎样留下可复用的规则、记忆、策略或技能。

这里的联系是双向的：更好的表征可以让求解容易，求解与检验的结果也可以成为新的学习材料。**O3 侧重学到了什么，O4 侧重怎样更有效地求解并积累能力。** 二者可以在同一过程中共同发生。

### 0.7 当系统能够选择下一步经验，学习会怎样改变？

如果杯子被挡住，系统可以换一个观察位置；如果不知道物体是否会滑动，可以选择合适的测试。此时获得什么数据，开始取决于系统自己的选择。

能够依据目标选择行动，并利用观测和反馈调整行为的系统，通常称为智能体（Agent）。对这样的系统来说，行动既可能推进任务，也可能带来信息。慢一点搬运也许更安全，先观察一次也许能避免失败，但都会花费时间。

于是需要同时回答三个问题：

- **什么信息值得获取？** O5 研究选择观测、实验或探索，以便用合适的成本减少对任务有影响的不确定性。
- **当前应当怎样行动？** O6 研究目标、预测、规划和执行；发生偏差后，依据新观测调整行动，这种持续校正形成反馈闭环。
- **怎样利用后果改善未来选择？** O7 进一步研究把长期收益与此前的行动联系起来，并据此学习价值与策略，也就是强化学习的核心问题。

纠正一次偏差与学到更好的策略可以共同发生。前者使当前执行重新接近目标，后者希望改善未来的决策。信息获取、行动选择与反馈学习持续相互影响，构成 **O5 ↔ O6 ↔ O7** 的关系。

### 0.8 一次成功之后，哪些问题仍然存在？

杯子换了、房间变了，旧能力能否迁移？不断接触新任务时，系统怎样吸收新经验，又不破坏已有能力？能否利用过去的适应经验，让系统面对新任务时学得更快？这些问题分别引出迁移学习、持续学习和元学习，把学习延伸到跨任务与跨时间的适应，构成 O8。

环境中还有人和其他机器。它们会让路，也可能改变计划；系统需要考虑对方的目标、信息与策略，不能只把所有变化都当成固定噪声。O9 讨论由此产生的合作、竞争、通信和协调。

而评价一次搬运是否成功，还要问杯子是否安全送达、失败是否集中在少数危险情形、系统在不确定时是否过于自信。一个模块的证明正确或平均准确率很高，仍不足以回答整套系统在长期运行中是否可靠。**检验并不是系统建成后才开始的最后一步**：形式证明时要检查推导，学习时要检验泛化，行动时要监测风险。O10 只是把这些要求集中到现实系统与长期运行的层面。

最后，感知、模型、求解、行动和学习怎样协调，状态、记忆与计算资源怎样共享？O11 把这些问题放回任务系统中，讨论各部分如何协作。

这样，最初关于“思想能否被表示并接受机械推理”的追问，逐步展开为更广的问题：系统怎样获得经验、修改认识、改善计算、选择行动，并在现实中持续检验结果？下文把这些关系放到同一张问题地图中。

<a id="overview"></a>

## 1. 总体结构

前面的叙述可以归纳为三个层次。表征研究“怎样表达”，计算研究“怎样执行”，二者结合后进一步研究推理、学习与行动的能力。

| 层次 | 核心问题 | 主要内容 |
|---|---|---|
| I · 表征（Representation） | 什么进入计算？怎样表示才有用？ | 对象、语言、意义、知识结构、连续表示与表征评价 |
| II · 计算（Computation） | 怎样执行变换？什么算得了、算得动？ | 算法、证明、可计算性、复杂性与通用求解机制 |
| III · 表征 × 计算 | 两者结合后能形成什么能力？ | 推理、学习、预测、规划、行动与检验 |

```text
总问题：思想与智能活动能否被表示、机械执行并检验？
│
├── I. 表征：对象怎样进入计算？什么样的表示更好？
│   └── R1—R6：表示对象、形式语言、意义、知识组织、表示形式与评价
│
├── II. 计算：怎样执行？什么算得了、算得动？
│   └── C1—C7：算法、证明、程序、可计算性、复杂性与计算机制
│
└── III. 表征 × 计算：能够形成什么能力？
    │
    ├── A. 给定形式框架中的求解（Formal World）
    │   ├── F1—F6：演绎、不完整知识、概率、搜索、非演绎推理、规划决策
    │   ├── F7—F8：不同层面的统一视角与形式框架中的学习
    │   └── F9：求解成本、现实接地与模型适用性的困难
    │
    └── B. 开放世界中的认知、学习与行动（Open World）
        ├── O1：感知、状态估计与接地
        ├── O2 ↔ O3 ↔ O4：知识发现、表征／模型学习、计算改善与经验巩固
        ├── O5 ↔ O6 ↔ O7：信息获取、行动控制与反馈学习
        ├── O8—O9：持续适应与多主体交互
        └── O10—O11：现实可靠性与系统协作
```

### 两种问题情境怎样共存？

在一个明确的统计模型中，可以从数据估计未知参数；在规则明确的棋类中，可以学习策略。在这些任务里，学习并没有离开给定的问题框架。另一方面，现实任务也持续使用逻辑、概率、优化与控制，来求解当前能够描述的问题。

因此，Formal World 与 Open World 区分的是问题侧重：**在给定框架中求解，以及在现实中检验和修正框架。** 它们可以出现在同一系统中，分别涉及的也不是两套互斥算法。详细的对照例子见第 6 节。

### 怎样理解分支之间的关系？

有的分支回答一个大问题的不同侧面。例如概率推断需要表示分布、处理新证据并组织计算，这是一种**分析式分解**。有的分支追问已有回答留下的困难。例如能够根据模型规划之后，还要处理真实执行中的偏差，这是一种**困难驱动扩展**。

沿着这些关系阅读，可以理解一个问题为什么值得提出。真实的研究关系还包含大量交叉，相关依赖在第 5 节集中列出。这里的阅读顺序也不等于历史顺序；逻辑、统计学习、连接主义、控制论与强化学习长期并行发展。

### 阅读时把握的六条线索

| 线索 | 需要把握的关系 |
|---|---|
| 形式框架与开放世界 | 参数未知、结构未知与原有表示体系不足是不同层次的问题；形式化不排斥概率与学习，开放世界侧重框架的现实适用性。 |
| F9 的三类困难 | 求解成本、现实接地与模型失配彼此相关，也各有不同回答。《苦涩的教训》讨论可扩展搜索与学习，不能代替对接地与模型适用性的研究。 |
| O3 与 O4 | O3 侧重学到了什么表示、规律和模型；O4 侧重怎样改进求解并积累可复用能力。二者可以共同发生。 |
| O5、O6 与 O7 | 获取什么信息、选择什么行动、反馈怎样改进策略相互影响，共同构成闭环。 |
| 章节之间的联系 | 既看一个问题由哪些侧面组成，也看已有答案为什么还会留下新问题。 |
| 人物、理论与方法 | 通过具体问题理解它们的贡献与适用条件，并区分知识的组织顺序与真实历史。 |

<a id="tree"></a>

## 2. 完整问题树

下面按层级展开前面的问题地图。每个节点采用“**问题 → 简短回答、关键词或代表理论**”的形式；箭头后的内容是进一步学习的入口。缩进表示主要从属关系，跨分支的联系见第 5 节。

编号前缀：R 表示表征，C 表示计算，F 表示给定形式框架中的求解，O 表示开放情境中的认知、学习与行动。编号用于查阅，不表示历史先后。若想先了解某一章为什么出现，可查看第 3 节的导学表，再沿链接进入相应分支。

- **Q0｜思想与智能活动能否被表示、机械执行并检验？** → *表征与计算的结合；莱布尼茨推理演算理想的现代延伸*
  - **I｜Representation：思想、知识与世界，如何成为可计算的对象？** → *回答「算什么」*
    - <a id="r1"></a>**R1｜一个系统究竟应该表示什么？** → *选择基本对象与变量*
      - **R1.1｜哪些基本对象构成知识表示？** → *对象、属性、关系、事件、命题*
        - R1.1a｜怎样区分个体、对象类别与形式类型？ → *individual / class / type；区分类别归属与类型约束*
        - R1.1b｜如何表达对象具有某个属性？ → *predicate / attribute / feature*
        - R1.1c｜如何表达两个对象之间的关系？ → *relation / edge / tuple*
        - R1.1d｜如何表达事实是否成立？ → *proposition / truth value*
      - **R1.2｜怎样表达抽象与层次？** → *类型、概念、范畴、部分—整体*
        - R1.2a｜怎样表达实例归属与概念包含？ → *instance membership / subsumption*
        - R1.2b｜怎样表示概念间的上下位关系？ → *taxonomy / ontology*
        - R1.2c｜怎样表示组合对象与部分？ → *mereology / compositional structure*
      - **R1.3｜变化的世界怎样成为状态？** → *状态、时间、行动、记忆*
        - R1.3a｜当前状态与历史是什么关系？ → *state / trajectory / memory*
        - R1.3b｜事件与动作如何区别？ → *event / action / transition*
        - R1.3c｜什么变量足以支持预测与决策？ → *Markov state / sufficient state*
      - **R1.4｜不确定或不可观测的事物如何表示？** → *信念、分布、潜变量*
        - R1.4a｜不知道与确定为假有何区别？ → *unknown / false / three-valued logics*
        - R1.4b｜不确定信念怎样量化？ → *probability / belief / credal set；校准见 O10.2*
        - R1.4c｜隐藏机制如何成为形式对象？ → *latent state / latent variable*
      - **R1.5｜目标和价值是否也是表示对象？** → *goal / utility / preference / constraint*
    - <a id="r2"></a>**R2｜含混的思想如何变成严格的形式语言？** → *符号化、语法化、公理化*
      - **R2.1｜符号为何能替代原本模糊的直觉？** → *给出精确定义与操作条件*
        - R2.1a｜几何如何转成方程？ → *笛卡尔解析几何*
        - R2.1b｜「无限接近」如何精确表达？ → *Cauchy / Weierstrass；ε–δ*
        - R2.1c｜逻辑关系如何代数化？ → *Boole / algebra of logic*
        - R2.1d｜「任意」「存在」怎样明确化？ → *Frege / quantifiers*
      - **R2.2｜什么是一种形式语言？** → *alphabet / grammar / well-formed formula*
        - R2.2a｜原子符号如何构成表达式？ → *term / formula / syntax tree*
        - R2.2b｜自由变量、量词绑定与替换怎样表达一般性？ → *free/bound variables / substitution*
        - R2.2c｜不同表达力有何代价？ → *propositional / first-order / higher-order*
      - **R2.3｜怎样让复杂思想可以组合？** → *函数、类型、组合语义*
        - R2.3a｜复杂表达如何由子表达构成？ → *compositionality*
        - R2.3b｜怎样排除不符合类型约束的组合？ → *types / typing judgments*
        - R2.3c｜如何表达函数与抽象？ → *lambda abstraction / application*
      - **R2.4｜自然语言怎样获得形式结构？** → *formal grammar / formal semantics*
        - R2.4a｜句法结构怎样成为树？ → *formal grammar / parsing*
        - R2.4b｜自然语言怎样映射到逻辑形式？ → *semantic parsing / Montague semantics*
        - R2.4c｜歧义怎样表示，而非武断消除？ → *parse forest / scope ambiguity*
      - **R2.5｜形式化是否意味着一定能自动求解？** → *否；可表示 ≠ 可判定*
    - <a id="r3"></a>**R3｜符号什么时候有意义？** → *语法、模型语义、现实指称的区别*
      - **R3.1｜什么是语法正确？** → *公式是否合法*
      - **R3.2｜表达式在什么解释下成立？** → *interpretation / model / satisfaction*
        - R3.2a｜一个公式在何种解释下为真？ → *model-theoretic semantics*
        - R3.2b｜一个概念如何指向对象？ → *reference / denotation*
        - R3.2c｜语义如何与组合规则匹配？ → *compositional semantics*
      - **R3.3｜证明与语义后承有什么关系？** → *Γ ⊢ φ 与 Γ ⊨ φ；可靠性与完备性见 C2*
      - **R3.4｜符号意义能否只靠符号之间的定义获得？** → *解释无限后退与符号接地问题*
        - R3.4a｜怎样让内部的「狗」符号可靠地指向现实中的狗？ → *symbol grounding*
        - R3.4b｜模型中的解释与现实中的对应是一回事吗？ → *不是；model vs environment*
      - **R3.5｜怎样判断一个表征的含义已经失效？** → *grounding check / semantic drift；检测与反馈见 O1.6*
    - <a id="r4"></a>**R4｜大量知识如何组织成可以操作的结构？** → *Knowledge Representation*
      - **R4.1｜事实与规则如何组织？** → *knowledge base / Horn clauses / logic programming*
      - **R4.2｜概念层级如何组织？** → *ontology / description logic / taxonomy*
      - **R4.3｜对象关系如何组织？** → *semantic network / knowledge graph / relational schema*
      - **R4.4｜常识与例外如何表示？** → *default / exception / nonmonotonic representation*
      - **R4.5｜行动与世界变化如何表示？** → *STRIPS / situation calculus / event calculus*
        - R4.5a｜前置条件和行动后效怎样形式化？ → *precondition / effect*
        - R4.5b｜哪些事实在行动后保持不变？ → *frame problem*
        - R4.5c｜时间约束、顺序和持续如何表达？ → *temporal logic / interval*
      - **R4.6｜如何把知识与不确定性结合？** → *Bayesian networks / factor graphs / probabilistic programs*
    - <a id="r5"></a>**R5｜形式对象是否必须是显式离散符号？** → *比较表示方案，而非新旧排序*
      - **R5.1｜连续空间怎样表示知识？** → *vectors / embeddings / latent spaces*
      - **R5.2｜概率分布可否视为表示？** → *distribution / belief state*
      - **R5.3｜图、程序、几何能否成为表示？** → *graph / program / coordinate / manifold*
      - **R5.4｜如何将离散结构与连续表示组合？** → *neuro-symbolic / structured latent models*
      - **R5.5｜同一对象有多种表征时怎么办？** → *multiple views / translation / alignment*
        - R5.5a｜图像、语言、动作如何共享对象指称？ → *multimodal alignment*
        - R5.5b｜局部空间、全局坐标如何建立映射？ → *geometry / coordinate transformation*
    - <a id="r6"></a>**R6｜什么才算一套好的表征？** → *在任务、语义、表达力与计算成本之间权衡*
      - **R6.1｜要表达的内容是否表达得了？** → *expressiveness / representational adequacy*
      - **R6.2｜任务需要的信息是否保留？** → *sufficiency / relevant information*
      - **R6.3｜是否能压缩掉无关细节？** → *abstraction / information bottleneck / MDL*
      - **R6.4｜能否被有效组合与重用？** → *compositionality / modularity*
      - **R6.5｜变换后，表示应当保持什么、相应改变什么？** → *invariance / equivariance*
      - **R6.6｜表征是否让求解更容易？** → *computational suitability / factorization*
        - R6.6a｜坐标改变能否简化证明或优化？ → *analytic geometry / reparameterization*
        - R6.6b｜因子分解能否减少全局计算？ → *conditional independence / locality*
        - R6.6c｜坏表示会制造什么困难？ → *spurious coupling / combinatorial explosion*
      - **R6.7｜它是否有可解释、可验证的意义？** → *interpretability / consistency / grounding*
      - **R6.8｜环境改变以后仍然有效吗？** → *transferability / robustness / adaptation*
      - **R6.9｜是否存在对所有任务都最好的表征？** → *不存在脱离目标与资源的万能表征*

  - **II｜Computation：什么是计算，简单规则如何产生复杂过程？** → *回答「怎么算」*
    - <a id="c1"></a>**C1｜什么叫机械地执行一个过程？** → *algorithm / effective procedure*
      - **C1.1｜计算的最基本要素是什么？** → *状态、指令、变换、控制流*
        - C1.1a｜什么是一步计算？ → *transition relation / reduction rule*
        - C1.1b｜重复、递归和分支怎样形式化？ → *loop / recursion / conditional*
        - C1.1c｜什么叫计算结束与输出？ → *termination / result*
      - **C1.2｜有哪些等价的计算形式模型？** → *recursive functions / λ-calculus / Turing machines*
        - C1.2a｜函数应用能表达计算吗？ → *Church λ-calculus*
        - C1.2b｜有限控制怎样借助可扩展存储表达一般计算？ → *Turing machine；区别于有限自动机*
        - C1.2c｜这些形式模型与直观的有效计算是什么关系？ → *模型间等价性可证明；Church–Turing thesis 连接直观有效计算与形式模型*
      - **C1.3｜算法与程序有什么区别？** → *抽象步骤 vs 形式实现*
      - **C1.4｜什么是确定性、非确定性、随机计算？** → *deterministic / nondeterministic / randomized*
      - **C1.5｜有限精度计算与数学实数计算有什么距离？** → *floating point / numerical analysis*
    - <a id="c2"></a>**C2｜什么叫合法的推导与形式证明？** → *形式规则与元理论*
      - **C2.1｜怎样保证可推导结论是前提的语义后果？** → *soundness：Γ ⊢ φ ⇒ Γ ⊨ φ*
      - **C2.2｜所有语义后果都能由规则推出吗？** → *completeness：Γ ⊨ φ ⇒ Γ ⊢ φ；依赖具体系统*
      - **C2.3｜什么是不同的证明系统？** → *Hilbert / Natural Deduction / Sequent Calculus*
      - **C2.4｜规则为何可以对证明本身进行计算？** → *proof transformations*
      - **C2.5｜证明存在与找到证明是一个问题吗？** → *不是；区分存在性、构造方法与 proof search；自动搜索见 F1*
    - <a id="c3"></a>**C3｜证明、程序、类型之间为何有联系？** → *proofs as computational objects*
      - **C3.1｜证明可以被怎样构造？** → *introduction / elimination rules*
      - **C3.2｜证明里哪些步骤是冗余的？** → *Prawitz normalization / detours*
      - **C3.3｜相继式演算中，显式使用中间命题的割规则如何消去？** → *Gentzen cut elimination*
      - **C3.4｜命题为什么能对应类型？** → *Curry–Howard*
        - C3.4a｜证明为什么对应程序？ → *constructive logic / typed λ-calculus*
        - C3.4b｜化简证明为何对应执行程序？ → *normalization / reduction*
      - **C3.5｜怎样将证明检查转化为类型检查？** → *proof terms / dependent types / trusted kernel；系统应用见 F1.5*
      - **C3.6｜函数式编程为什么与逻辑关系密切？** → *λ-abstraction / types / functional semantics*
    - <a id="c4"></a>**C4｜什么原则上能够计算？** → *computability / decidability*
      - **C4.1｜所有明确定义的问题都有算法吗？** → *否；halting problem*
      - **C4.2｜什么叫可判定与半可判定？** → *decider / recognizer；后者对非成员可能不终止*
      - **C4.3｜为什么有些形式系统不能证明一切算术真命题？** → *Gödel incompleteness；一致、有效公理化且足以表达算术的理论存在不可判定命题*
      - **C4.4｜可证明性限制与不可计算性是什么关系？** → *有关联但不等价*
      - **C4.5｜怎样通过归约证明不可解？** → *computability reduction*
    - <a id="c5"></a>**C5｜能算的东西为什么可能算不动？** → *computational complexity*
      - **C5.1｜时间和空间消耗怎样度量？** → *complexity classes / asymptotics*
      - **C5.2｜P、NP、NP-hard 分别刻画什么？** → *P：多项式时间判定；NP：给定多项式长度的证书后，可在多项式时间内验证「是」的判定问题类；NP-hard：所有 NP 问题可多项式时间归约到它；P 是否等于 NP 未知*
      - **C5.3｜证明搜索为什么可能指数增长？** → *combinatorial search*
      - **C5.4｜概率图的难度为什么取决于结构？** → *treewidth / elimination order*
      - **C5.5｜平均困难与最坏情况困难有何不同？** → *average-case / worst-case*
      - **C5.6｜允许近似或随机化后能得到什么？** → *approximation / randomized algorithms*
      - **C5.7｜何时受限于数据搬运而不是算术量？** → *memory/communication complexity*
    - <a id="c6"></a>**C6｜复杂计算有哪些可复用的通用机制？** → *组合小步骤、分解与复用；不同求解任务的使用条件见 F1／F3／F4*
      - **C6.1｜没有直接答案时如何搜索？** → *enumeration / graph search*
      - **C6.2｜怎样丢弃不可能的候选？** → *constraints / pruning / propagation*
      - **C6.3｜怎样把全局问题拆成局部问题？** → *decomposition / dynamic programming*
      - **C6.4｜局部结果怎样传播为全局结论？** → *message passing / variable elimination*
      - **C6.5｜连续参数怎样逐步求优？** → *gradient / Newton / convex optimization*
      - **C6.6｜搜索预算有限时如何选择？** → *heuristics / bounded rationality*
      - **C6.7｜计算结果怎样被检查？** → *invariants / tests / proof checking；区分测试证据与形式保证*
    - <a id="c7"></a>**C7｜基础计算原语与高层计算策略有什么区别？** → *规则可给定，策略可学习*
      - **C7.1｜计算原语由什么层次规定？** → *形式模型 / 指令集 / 编程语言 / 算子库*
      - **C7.2｜复杂推理的顺序是否必须人工写死？** → *否；可搜索、可学习*
      - **C7.3｜算法能否编译、优化和复用？** → *program transformation / compilation*
      - **C7.4｜同一任务是否存在多种计算路径？** → *algorithm selection / meta-reasoning*
      - **C7.5｜学习内部计算策略是否等于突破可计算性？** → *否；可改变实现的函数、求解策略与资源分配，仍受相同计算模型的边界约束*

  - **III｜Representation × Computation：给定表征与计算，一个系统能获得什么能力？** → *分成两种问题情境，不分成互斥技术阵营*
    - **A｜Formal World：在给定或明确建模的世界中，系统能推导、预测、优化、决策到什么程度？** → *形式知识、规则、模型与目标作为研究条件*
      - <a id="f1"></a>**F1｜从已有前提怎样推出必然结论？（Deduction）** → *演绎/证明/自动推理*
        - **F1.1｜自动证明器究竟要保证什么？** → *在 C2 的可靠性与完备性基础上，明确输入、查询与输出的含义*
          - F1.1a｜当前任务是在求后承、有效性还是可满足性？ → *entailment / validity / satisfiability*
          - F1.1b｜怎样将后承查询转成反驳任务？ → *Γ ⊨ φ ⇔ Γ ∪ {¬φ} 不可满足；经典逻辑*
          - F1.1c｜证明器怎样为其结论提供可检查的依据？ → *proof object / proof certificate；可靠性基础见 C2.1*
          - F1.1d｜超时或搜索失败能否说明结论为假？ → *通常不能；区分反例、穷尽搜索与资源耗尽*
        - **F1.2｜怎样把证明演算组织为机械搜索？** → *proof calculi / search rules；演算基础见 C2.3*
          - F1.2a｜公理模式与少量规则怎样形成证明搜索任务？ → *Hilbert systems / axiom instantiation*
          - F1.2b｜怎样用引入与消去规则指导证明构造？ → *natural deduction / goal-directed tactics*
          - F1.2c｜怎样将目标拆成相继式子目标？ → *sequent calculus / backward proof search*
          - F1.2d｜如何用子句及归结规则推导矛盾？ → *resolution*
          - F1.2e｜怎样为含变量的项求共同实例？ → *unification / substitution；区别于单向匹配*
        - **F1.3｜证明怎样从「存在」变成「被找到」？** → *proof search*
          - F1.3a｜前向推理和后向推理何时合适？ → *forward/backward chaining*
          - F1.3b｜如何控制证明搜索的分支？ → *heuristics / tactics / pruning*
          - F1.3c｜失败的证明尝试能提供什么信息？ → *nogoods / learned clauses*
          - F1.3d｜机器何时需要构造中间引理？ → *lemma generation / proof planning*
        - **F1.4｜证明结构怎样影响搜索、存储与检查？** → *proof representation / proof complexity；正规化基础见 C3*
          - F1.4a｜消除证明迂回能为搜索提供什么约束？ → *normal forms / subformula property；依赖具体演算，见 C3.2*
          - F1.4b｜消去中间引理是否总能缩短证明？ → *否；cut elimination 可能使证明显著膨胀，见 C3.3*
          - F1.4c｜共享子证明与重用引理怎样节省表示？ → *proof DAG / lemma reuse / proof compression*
          - F1.4d｜证明结构能揭示哪些复杂性？ → *proof length / proof complexity*
        - **F1.5｜怎样构造可信的自动推理系统？** → *ATP / SAT / SMT / proof assistants*
          - F1.5a｜布尔可满足性怎样自动判定？ → *SAT / DPLL / CDCL*
          - F1.5b｜包含算术等理论约束时怎么办？ → *SMT / theory solvers*
          - F1.5c｜如何用类型系统表达定理？ → *dependent type theory*
          - F1.5d｜候选证明不可靠时怎样验证？ → *Lean / Coq / trusted kernel*
          - F1.5e｜自动证明与程序验证如何结合？ → *formal verification*
        - **F1.6｜演绎推理有什么表达与计算边界？** → *decidability / expressiveness / complexity*
          - F1.6a｜一阶逻辑和命题逻辑的求解界限有何不同？ → *first-order validity vs SAT*
          - F1.6b｜怎样在表达力、完备性与求解成本间取舍？ → *restricted fragments / complete procedures / incomplete heuristics*
          - F1.6c｜相对给定证书的检查高效，是否意味着证书一定短？ → *否；verification vs search / proof length*
        - **F1.7｜证明正确是否意味着关于现实的判断正确？** → *不是；须验证前提、规格和接地*
      - <a id="f2"></a>**F2｜不完整、可撤销的知识怎样推理？** → *Nonmonotonic / Commonsense Reasoning*
        - **F2.1｜未知是否应被当作假？** → *open-world vs closed-world assumptions；这是知识库语义约定，不等同于 Formal World / Open World 的问题情境划分（第 2 节 A/B）*
        - **F2.2｜在通常情况下成立的规则怎样表达？** → *default logic / defeasible reasoning*
        - **F2.3｜新事实与旧结论冲突时，怎样撤销结论或修正信念？** → *nonmonotonic inference / belief revision；区分推理关系与知识库修正*
        - **F2.4｜多条规则冲突时如何处理优先级？** → *priority rules / argumentation*
        - **F2.5｜行动后哪些常识默认保持？** → *frame problem / inertia*
        - **F2.6｜知识不一致时还能推理吗？** → *paraconsistent / inconsistency-tolerant approaches*
        - **F2.7｜「不知道是否成立」与「已知不成立」有什么区别？** → *前者未决，后者已有否定知识；epistemic logic / ignorance vs known falsity*
      - <a id="f3"></a>**F3｜包含概率的不确定模型怎样推理？（Probabilistic Reasoning）** → *概率本身不意味着开放世界*
        - **F3.1｜如何表示不确定信念？** → *probability / conditional distribution / belief*
          - F3.1a｜概率的形式规则如何建立？ → *Kolmogorov axioms*
          - F3.1b｜概率与频率、主观信念有什么联系？ → *interpretations of probability*
          - F3.1c｜什么是假设、证据、先验与似然？ → *Bayesian formulation*
        - **F3.2｜高维联合分布怎样避免直接列出？** → *graphical factorization*
          - F3.2a｜有向依赖怎样表达？ → *Bayesian network / DAG*
          - F3.2b｜无向相容结构怎样表达？ → *Markov random field*
          - F3.2c｜一般因子分解怎样表达？ → *factor graph*
          - F3.2d｜怎样利用条件独立？ → *d-separation / Markov properties*
        - **F3.3｜给定新证据，信念怎样更新？** → *Bayes / conditioning / marginalization*
          - F3.3a｜观察变量后怎样求剩余变量的分布？ → *posterior inference*
          - F3.3b｜怎样比较竞争假设？ → *posterior odds / Bayes factor*
          - F3.3c｜估计隐状态与学习模型参数有什么联系？ → *latent-state inference / parameter estimation；Bayesian 方法可联合推断*
        - **F3.4｜局部计算如何产生全局答案？** → *message passing / elimination*
          - F3.4a｜边缘化怎样分解为局部求和与乘法？ → *sum-product / distributive law*
          - F3.4b｜怎样寻找全部未观测变量的联合最可能赋值？ → *MPE / joint MAP / max-product；树上可精确求解*
          - F3.4c｜树形图为何容易精确推理？ → *belief propagation on trees*
          - F3.4d｜怎样通过变量消元组织计算？ → *variable elimination*
          - F3.4e｜如何把复杂图变成团树？ → *junction tree*
          - F3.4f｜只对部分变量求最可能赋值时，为什么还要边缘化？ → *marginal MAP；其余变量求和，sum 与 max 通常不可交换*
        - **F3.5｜时间序列怎样进行隐状态估计？** → *sequential Bayesian inference*
          - F3.5a｜当前观测怎样更新状态？ → *filtering*
          - F3.5b｜未来数据怎样修正过去判断？ → *smoothing*
          - F3.5c｜离散隐状态怎样建模？ → *HMM / forward-backward / Viterbi*
          - F3.5d｜线性高斯系统怎样精确估计？ → *Kalman filter / RTS smoothing*
          - F3.5e｜非线性非高斯怎么办？ → *particle filter / approximation*
        - **F3.6｜精确推断为什么可能代价极高？** → *treewidth / induced cliques / state size*
          - F3.6a｜图有环是否必然无法计算？ → *否；关键是依赖结构和消元次序*
          - F3.6b｜局部求和乘法为何造成指数成本？ → *large intermediate factors*
          - F3.6c｜离散图模型的树宽如何影响精确消元成本？ → *固定单变量状态数时，通用消元成本随诱导宽度指数增长；最优宽度对应树宽*
        - **F3.7｜精确推断代价过高时怎么办？** → *approximate inference*
          - F3.7a｜如何通过采样近似分布？ → *MCMC / importance sampling*
          - F3.7b｜如何通过优化近似分布？ → *variational inference / ELBO*
          - F3.7c｜环图能否迭代传递消息？ → *loopy belief propagation；一般不保证收敛或精确*
          - F3.7d｜重复推断能否学习成直接映射？ → *amortized inference（详见 O4）*
        - **F3.8｜已知概率模型的结论何时可信？** → *model adequacy / calibration / inference error*
      - <a id="f4"></a>**F4｜怎样根据问题结构选择搜索、约束与优化方法？** → *Search / Constraint / Optimization；通用机制见 C6*
        - **F4.1｜搜索空间怎样表示？** → *state graph / search tree / feasible region*
        - **F4.2｜不同搜索方法何时完整、何时最优？** → *BFS / DFS / uniform-cost search；分支、深度与代价条件*
        - **F4.3｜怎样用启发信息加速搜索并保留最优性？** → *A-star / admissibility / consistency / reopening*
        - **F4.4｜怎样用约束而非枚举缩小空间？** → *CSP / constraint propagation / SAT*
        - **F4.5｜什么结构使局部结果可以复用？** → *dynamic programming / memoization / optimal substructure*
        - **F4.6｜连续优化何时有全局保证，何时只能得到局部结论？** → *convexity / smoothness / gradient / Newton / stochastic optimization*
        - **F4.7｜非凸或离散—连续混合怎么办？** → *relaxation / mixed-integer / sampling*
        - **F4.8｜什么时候接受近似解？** → *approximation algorithms / anytime algorithms*
        - **F4.9｜找到候选后怎样检查有效性？** → *constraints / certificates / proof checker*
        - **F4.10｜有了大量求解经验能否改善搜索？** → *learned heuristics；系统展开见 O3/O4*
      - <a id="f5"></a>**F5｜演绎之外的推理，是否也能够严格形式化？** → *非演绎推理的数学化*
        - **F5.1｜归纳能否有形式规则？** → *hypothesis class / prior / inductive bias*
        - **F5.2｜从现象寻找解释能否形式化？** → *abductive logic / model-based diagnosis / Bayesian hypothesis comparison*
        - **F5.3｜类比能否被写成结构映射问题？** → *structure mapping / graph matching*
        - **F5.4｜因果能否超越相关性的形式查询？** → *SCM / do-calculus / counterfactuals*
        - **F5.5｜新证据下可撤销的推断能否形式化？** → *default / defeasible logic；规则与修正机制见 F2*
        - **F5.6｜为什么它们不等于「开放世界专属方法」？** → *形式理论可以研究非演绎推断；真正难点是前提与真实环境的对应*
        - **F5.7｜何时需要一种以上的推理方式？** → *演绎验证、归纳提规律、溯因提出解释、类比提出候选*
      - <a id="f6"></a>**F6｜给定状态、行动和目标，怎样决策与规划？** → *Decision Theory / Planning / Control*
        - **F6.1｜什么叫行动结果「更好」？** → *objective / utility / reward / cost*
        - **F6.2｜行动与状态怎样形成形式系统？** → *transition system / state-space model*
        - **F6.3｜固定动作序列怎样达到目标？** → *classical planning / STRIPS / PDDL*
        - **F6.4｜环境含随机性时怎样选择策略？** → *MDP / Bellman optimality*
        - **F6.5｜只能看到部分状态时怎样决策？** → *POMDP / belief-state planning*
        - **F6.6｜连续状态、输入与动力学怎样控制？** → *optimal control / MPC*
        - **F6.7｜有限时域与无限时域有什么不同？** → *finite horizon / discounted return / average reward*
        - **F6.8｜怎样在风险与收益之间权衡？** → *risk-sensitive / constrained optimization*
        - **F6.9｜多个决策者的策略如何互相影响？** → *game theory / stochastic games*
        - **F6.10｜求出计划与现实执行是一回事吗？** → *不是；执行与反馈的困难详见 O6/O7*
      - <a id="f7"></a>**F7｜不同的推理与求解方法，能够在什么层面获得统一？** → *代数结构、概率信念、因果查询、证明—程序与资源理性：统一各自适用的层面*
        - **F7.1｜「组合」与「聚合」能否形成统一代数？** → *semiring*
          - F7.1a｜候选如何合并？ → *⊕*
          - F7.1b｜局部约束如何组合？ → *⊗*
          - F7.1c｜逻辑满足性怎样落到两个运算？ → *(∨, ∧)*
          - F7.1d｜概率边缘化怎样落到两个运算？ → *(+, ×)*
          - F7.1e｜联合最可能赋值怎样落到两个运算？ → *(max, ×)；取对数后为 (max, +)；部分变量的 marginal MAP 另见 F3.4f*
          - F7.1f｜最短路径怎样落到两个运算？ → *(min, +)*
          - F7.1g｜同一代数模式为何不意味着同一复杂度？ → *dependency structure / treewidth*
        - **F7.2｜概率能否统一不同的不确定推理？** → *Bayes / posterior predictive / hierarchical models*
        - **F7.3｜因果能否统一观察、干预和反事实？** → *SCM / causal hierarchy*
        - **F7.4｜证明与程序的对应统一了哪些结构？** → *构造、类型与归约；对应依赖具体系统，基础见 C3*
        - **F7.5｜有限算力下应当推理到什么时候？** → *metareasoning / value of computation*
          - F7.5a｜一次额外搜索是否值得？ → *expected improvement vs cost*
          - F7.5b｜何时停止推理并行动？ → *bounded rationality / anytime decision*
          - F7.5c｜计算策略本身可以成为决策对象吗？ → *metareasoning*
        - **F7.6｜统一计算模式与统一认知理论有什么区别？** → *局部代数统一不等于统一全部智能*
      - <a id="f8"></a>**F8｜在明确的问题设定下，系统仍能通过经验改进什么？** → *参数、模型、策略与求解过程；模型获取问题进一步见 O2—O4*
        - **F8.1｜给定变量时能否从样本估计参数？** → *MLE / MAP / Bayesian estimation*
        - **F8.2｜给定假设空间能否归纳规律？** → *formal statistical learning*
        - **F8.3｜规则完全明确的棋类能否学习策略？** → *self-play / search-guided learning*
        - **F8.4｜MDP 的状态、行动等形式要素已规定，但转移或奖励未知时能否学习？** → *model-free / model-based RL；给定问题形式不等于已知全部环境规律*
        - **F8.5｜已知概率图结构能否学习局部参数？** → *MLE / Bayesian estimation；含隐变量或缺失数据时可用 EM 等方法*
        - **F8.6｜已知证明规则能否学习搜索方向？** → *learned proof guidance*
        - **F8.7｜为什么「形式世界＝无学习」是错的？** → *明确规定问题框架不等于知道所有参数和规律；形式化与学习是不同维度*
      - <a id="f9"></a>**F9｜形式求解如此成功，为什么仍不足以保证现实智能？** → *计算扩展性、现实接地、模型适用性三类挑战；前者也发生在形式环境内部*
        - **F9.1｜模型已经给定，为什么仍然可能难以求解？** → *计算复杂性、启发式设计与可扩展计算*
          - F9.1a｜证明搜索为什么可能长到不可承受？ → *search branching / complexity*
          - F9.1b｜概率图为什么会产生巨大中间因子？ → *treewidth*
          - F9.1c｜人类手工启发式怎样受扩展性限制？ → *domain-specific bottleneck*
          - F9.1d｜《苦涩的教训》真正指出什么？ → *可扩展通用搜索与学习，长期常胜过过度依赖人工领域知识的办法；并非专指接地*
          - F9.1e｜这意味着符号推理无效吗？ → *否；可扩展的搜索、学习与形式验证可以共同使用*
        - **F9.2｜形式推导正确，为什么仍不意味着认识了真实世界？** → *形式语义与现实指称之间仍有接地问题*
          - F9.2a｜逻辑符号是否天然对应真实对象？ → *不；须感知/解释/操作联系*
          - F9.2b｜语义在形式模型中成立，现实指称也成立吗？ → *不一定；须在真实任务中核查对应*
          - F9.2c｜感知与语言如何建立对象一致性？ → *perceptual / multimodal grounding*
        - **F9.3｜即使建立了初步的现实对应，为什么仍不能依赖永久固定的模型？** → *新对象、新机制、环境变化和模型失配；接地与模型有效性都需要持续核查*
          - F9.3a｜新概念出现时现有词表够用吗？ → *open vocabulary / concept formation*
          - F9.3b｜环境变化时固定转移模型还可靠吗？ → *distribution shift / nonstationarity*
          - F9.3c｜错误假设应如何被发现与修正？ → *model criticism / belief revision / evidence checking*
          - F9.3d｜规则是否一定由人手写？ → *否；rule/structure/program learning*
        - **F9.4｜三类挑战分别要求补充哪些能力？** → *计算扩展推动求解策略学习；接地与失配推动模型校验和修正；自主行动还需协调信息与目标*
          - F9.4a｜当原有表征与模型不足时，如何获得和修正知识？ → *O1 感知接地、O2 知识发现、O3 表征/模型学习与 O4 求解经验的巩固相互支持，不要求固定先后*
          - F9.4b｜如果能够选择观测与行动，又会出现什么新问题？ → *O5 信息获取 ↔ O6 行动选择 ↔ O7 反馈学习；数据依赖策略，目标可由外部给定或通过交互获取*

    - **B｜Open World：当现有模型可能不足以适应现实新情况时，系统怎样认识、适应并作用于世界？** → *接地、模型获取与修正；若可行动，还需主动交互与反馈闭环*
      - <a id="o1"></a>**O1｜世界怎样进入内部计算系统？（Perception & Grounding）** → *感知、定位、状态估计、多模态接地*
        - **O1.1｜真实世界给出的究竟是什么？** → *observations rather than ground-truth symbols*
          - O1.1a｜不同传感器如何产生观测？ → *image / audio / lidar / tactile / language*
          - O1.1b｜观测误差与物体属性如何区分？ → *noise / measurement model*
          - O1.1c｜怎样处理采样频率、延迟和时间对齐？ → *temporal alignment / synchronization*
          - O1.1d｜被观测到是否等于对象真实存在？ → *false positives / ambiguity*
        - **O1.2｜连续信号如何形成可操作的对象和关系？** → *perceptual representation*
          - O1.2a｜哪些局部特征应被组合？ → *feature extraction / grouping*
          - O1.2b｜怎样形成对象、类别与实例？ → *detection / segmentation / tracking*
          - O1.2c｜对象之间的空间关系怎样估计？ → *3D geometry / relations*
          - O1.2d｜事件与行为如何从时间序列中识别？ → *temporal perception / event detection*
        - **O1.3｜只看到一部分世界时怎样估计状态？** → *state estimation / Bayesian filtering*
          - O1.3a｜如何融合预测与新测量？ → *filtering / sensor fusion*
          - O1.3b｜怎样从相对观测恢复位置与地图？ → *SLAM / factor-graph optimization*
          - O1.3c｜动态对象怎样从静态环境中区分？ → *dynamic state estimation*
          - O1.3d｜尚未观测的区域与状态不确定性怎样表达？ → *belief state / occupancy uncertainty*
        - **O1.4｜内部符号为什么指向现实对象？** → *symbol grounding*
          - O1.4a｜语言里的「树」怎样对应图像中的树？ → *visual-language grounding*
          - O1.4b｜一个新名字怎样绑定一个新实体？ → *reference resolution / entity linking*
          - O1.4c｜动作的含义怎样由实际后果确立？ → *action grounding / affordance*
          - O1.4d｜对象持久性怎样跨视角与时间保持？ → *object permanence / tracking*
        - **O1.5｜不同表示之间如何对齐？** → *multimodal alignment / geometry / semantics*
          - O1.5a｜几何坐标与语义 token 怎样一致？ → *cross-modal correspondence*
          - O1.5b｜局部观测与全局地图怎样一致？ → *registration / SLAM*
          - O1.5c｜语言命令怎样落实到物理约束？ → *language-to-action grounding*
        - **O1.6｜如何检测感知与接地失效？** → *uncertainty / calibration / external feedback*
          - O1.6a｜高置信度但错误怎么办？ → *calibration / OOD detection*
          - O1.6b｜训练过的概念为何在新场景中漂移？ → *dataset shift / semantic shift*
          - O1.6c｜怎样通过行动补充证据？ → *active perception（详见 O5）*
      - <a id="o2"></a>**O2｜未知知识和规律怎样从经验中产生？（Knowledge Discovery & Reasoning）** → *归纳、溯因、类比、因果与科学发现；形式化入口见 F5*
        - **O2.1｜Induction：有限经验凭什么支持一般规律？** → *不是必然演绎，而是有条件的泛化*
          - **O2.1.1｜归纳为何需要正当性？** → *Hume's problem*
            - O2.1.1a｜过去重复发生为什么不保证未来必然发生？ → *problem of induction*
            - O2.1.1b｜没有归纳偏置，能否获得普遍更好的泛化？ → *inductive bias / no-free-lunch；依赖任务集合与平均方式等前提*
            - O2.1.1c｜平稳性、交换性、光滑性假设从哪来？ → *domain assumptions*
          - **O2.1.2｜归纳怎样变成数学问题？** → *statistical / Bayesian / algorithmic induction*
            - O2.1.2a｜如何从样本估计分布参数？ → *MLE / method of moments*
            - O2.1.2b｜如何利用先验修正假设可信度？ → *Bayesian posterior / MAP*
            - O2.1.2c｜能否偏好较短的规律描述？ → *Solomonoff / Kolmogorov / MDL；区分不可计算的理想对象与可实施准则*
            - O2.1.2d｜训练样本如何定义经验分布并形成学习目标？ → *empirical measure / sample frequencies / empirical risk*
          - **O2.1.3｜在什么假设下，有限样本能够支持泛化？** → *generalization theory；明确采样条件、假设类与学习过程*
            - O2.1.3a｜样本量与假设类容量如何影响误差？ → *PAC / VC dimension*
            - O2.1.3b｜稳定性为何能支持泛化分析？ → *algorithmic stability*
            - O2.1.3c｜偏差与方差如何权衡？ → *bias–variance*
            - O2.1.3d｜分布变化后旧保证为什么可能失效？ → *distribution shift*
          - **O2.1.4｜很多假设都能拟合数据时选择哪个？** → *model selection*
            - O2.1.4a｜最大拟合度是否足够？ → *overfitting / regularization*
            - O2.1.4b｜复杂度惩罚有何根据？ → *Occam / MDL / AIC / BIC*
            - O2.1.4c｜不同模型怎样比较预测表现？ → *cross-validation / predictive checks*
            - O2.1.4d｜何时应保留多个假设？ → *Bayesian model averaging / uncertainty*
          - **O2.1.5｜能否发现结构而不只是参数？** → *structure induction*
            - O2.1.5a｜变量关系如何形成图？ → *graph structure learning*
            - O2.1.5b｜语言规则如何从例子归纳？ → *grammar induction*
            - O2.1.5c｜程序和逻辑规则可以从例子发现吗？ → *program synthesis / inductive logic programming*
            - O2.1.5d｜潜在机制能从观测中提出吗？ → *latent structure / scientific discovery*
          - **O2.1.6｜怎样区分统计规律与科学解释？** → *testability / falsification / causality*
            - O2.1.6a｜相关性为什么不等于机制？ → *confounding / identifiability*
            - O2.1.6b｜发现反例后怎样修正规律？ → *model criticism / revision*
            - O2.1.6c｜不同环境中的稳定规律为何更可信？ → *invariance / transportability*
        - **O2.2｜Abduction：观察到结果，如何提出有解释力的假设？** → *best explanation ≠ deductive certainty*
          - **O2.2.1｜到底要解释什么？** → *explanandum / observation / anomalies*
            - O2.2.1a｜什么属于背景知识，什么是待解释现象？ → *problem framing*
            - O2.2.1b｜异常是误差还是新机制？ → *anomaly diagnosis*
          - **O2.2.2｜候选假设从哪里来？** → *hypothesis generation*
            - O2.2.2a｜如何在已有模型中寻找隐藏原因？ → *diagnostic reasoning*
            - O2.2.2b｜模型库不够时怎样创造新假设？ → *hypothesis invention / program search*
          - **O2.2.3｜什么样的解释更值得相信？** → *likelihood / simplicity / coverage*
            - O2.2.3a｜能解释全部观测还是只解释一部分？ → *explanatory coverage*
            - O2.2.3b｜简单解释为何可能更优？ → *Occam / MDL*
            - O2.2.3c｜怎样融入先验与不确定性？ → *Bayesian abduction*
          - **O2.2.4｜巨大的解释空间怎样搜索？** → *abductive search / model-based diagnosis*
          - **O2.2.5｜多个解释并存时怎么办？** → *posterior distribution / model averaging*
          - **O2.2.6｜解释是否一定意味着因果？** → *否；区分逻辑解释、统计解释与因果解释*
          - **O2.2.7｜怎样判定解释是否可识别？** → *equivalence / identifiability / experiments*
        - **O2.3｜Analogy：如何把已知领域的结构迁移到陌生领域？** → *结构映射与可检验的迁移*
          - **O2.3.1｜源领域与目标领域怎样表示？** → *structured representations*
          - **O2.3.2｜什么元素可以建立对应？** → *correspondence / mapping*
          - **O2.3.3｜何时应重视关系结构，而非表面相似？** → *structure mapping；对应关系须与任务相关*
          - **O2.3.4｜不同例子中能抽象出共同图式吗？** → *schema abstraction*
          - **O2.3.5｜源领域的哪些结论能够迁移？** → *analogical inference / case-based reasoning*
          - **O2.3.6｜迁移的结论怎样适配新领域？** → *adaptation / refinement*
          - **O2.3.7｜如何识别错误的类比？** → *causal mismatch / surface bias / negative transfer*
        - **O2.4｜Causality：相关、干预和反事实怎样区分？** → *causal inference / discovery*
          - **O2.4.1｜相关性为何不能说明因果？** → *confounding / selection bias*
          - **O2.4.2｜因果关系怎样表示？** → *SCM / causal DAG / structural equations*
          - **O2.4.3｜主动干预如何改变问题？** → *do-operator / intervention*
            - O2.4.3a｜P(Y|X) 与 P(Y|do(X)) 有何区别？ → *observation vs intervention*
            - O2.4.3b｜已知图结构时效应何时可识别？ → *backdoor / frontdoor / do-calculus*
          - **O2.4.4｜未发生的另一种结果怎样定义？** → *counterfactual SCM*
            - O2.4.4a｜如何比较「做了」与「没做」？ → *potential outcomes / counterfactuals*
            - O2.4.4b｜个体反事实为何常不可直接验证？ → *fundamental problem of causal inference*
          - **O2.4.5｜因果图怎样从经验发现？** → *causal discovery / invariance / experiments*
          - **O2.4.6｜为什么某些机制可以跨环境迁移？** → *causal invariance / transportability*
          - **O2.4.7｜行动如何帮助区分竞争的因果模型？** → *active causal learning（详见 O5）*
        - **O2.5｜科学发现怎样把这些推理组合？** → *hypothesis → prediction → experiment → revision*
          - O2.5a｜观测异常怎样引出候选解释？ → *abduction*
          - O2.5b｜假设怎样推出可检验预测？ → *deduction*
          - O2.5c｜多次结果怎样形成一般规律？ → *induction*
          - O2.5d｜旧理论怎样启发新理论？ → *analogy*
          - O2.5e｜什么实验最能区分竞争理论？ → *experimental design*
          - O2.5f｜证据不足时何时承认不知道？ → *uncertainty / epistemic humility*
        - **O2.6｜不同推理方式怎样相互约束？** → *演绎验证条件推论，非演绎生成候选，实验检验现实*
          - O2.6a｜推理得出的结论与学到的模型是什么关系？ → *推理生成或评价结论；学习更新可复用模型，二者可以交叠*
          - O2.6b｜形式上有效的论证能否纠正错误的前提？ → *不能独自保证；须新证据*
          - O2.6c｜为什么「归纳属于开放、演绎属于形式」不能当作严格划分？ → *二者都可形式化，且都服务现实认识*
      - <a id="o3"></a>**O3｜经验如何形成、修正并组织系统的知识、内部表征与世界模型？（Representation & Model Learning）** → *学到了什么：参数、表示、结构、规律和模型*
        - **O3.1｜哪些信息应该被编码进内部表示？** → *task-relevant information / information bottleneck*
          - O3.1a｜应当保留哪些可预测的因子？ → *sufficient / predictive representations*
          - O3.1b｜哪些噪声与偶然相关应当被抛弃？ → *regularization / invariance*
        - **O3.2｜可以学习什么形式的表示？** → *embedding / object / graph / latent distribution*
          - O3.2a｜向量何以表示语义和相似性？ → *distributed representation*
          - O3.2b｜对象中心的结构是否更可组合？ → *object-centric representations*
          - O3.2c｜几何约束怎样进入潜在表示？ → *equivariance / 3D representations*
          - O3.2d｜离散概念和连续潜变量如何结合？ → *discrete latent / neuro-symbolic*
        - **O3.3｜学习信号从哪里来？** → *supervision / self-supervision / feedback*
          - O3.3a｜人工标签是否是必要条件？ → *不是；self-supervised learning*
          - O3.3b｜从上下文预测缺失信息能学到什么？ → *masked / autoregressive modeling*
          - O3.3c｜不同视角的一致性如何形成表征？ → *contrastive / multi-view learning*
          - O3.3d｜行动后果能否监督表示学习？ → *predictive learning / control signals*
          - O3.3e｜无标签数据是否自动提供真实语义？ → *不；仍需验证与接地*
          - O3.3f｜学习信号怎样转化为可以优化的目标？ → *loss / empirical risk / regularization；泛化依据见 O2.1.3*
          - O3.3g｜损失怎样改变网络参数与内部表示？ → *backpropagation / autodiff 计算梯度；SGD 等优化器更新参数；条件见 F4.6*
        - **O3.4｜哪些变化应当忽略，哪些应当保留？** → *invariance / equivariance*
          - O3.4a｜物体旋转后身份应否保持？ → *invariance*
          - O3.4b｜几何坐标变化后预测应怎样变化？ → *equivariance*
          - O3.4c｜任务不同会改变需要的不变性吗？ → *task-dependent invariance*
        - **O3.5｜潜变量能否对应独立因素或可解释结构？** → *disentanglement / identifiability*
          - O3.5a｜统计独立是否意味着因果独立？ → *不一定*
          - O3.5b｜何种先验支持可辨识的表征？ → *inductive bias / interventions*
        - **O3.6｜低层特征如何长出组合概念？** → *hierarchy / compositionality*
          - O3.6a｜局部模式如何形成全局对象？ → *hierarchical features*
          - O3.6b｜概念能否像程序一样组合？ → *modular / compositional learning*
          - O3.6c｜模型能否重用学过的子技能？ → *skill abstraction*
        - **O3.7｜语言、视觉、动作的内部表示怎样相互接地？** → *multimodal / embodied representations*
        - **O3.8｜如何评价学习到的表征？** → *sufficiency / probing / OOD / downstream performance*
          - O3.8a｜线性探针是否证明模型真正理解了概念？ → *只能提供局部证据*
          - O3.8b｜环境变化时表示是否稳健？ → *distribution shift tests*
          - O3.8c｜是否仍适合推理和规划？ → *reasoning/planning usefulness*
        - **O3.9｜结构本身能否从经验中改变？** → *structure learning*
          - O3.9a｜图连接能否学习？ → *graph/structure induction*
          - O3.9b｜规则与程序能否学习？ → *rule induction / program synthesis*
          - O3.9c｜对象类别数量是否一定固定？ → *open-world concept discovery*
        - **O3.10｜怎样学习能够支持预测的世界模型及其生成机制？** → *状态与动力学学习 / generative modeling；生成器不一定是世界模型*
          - O3.10a｜什么潜在状态足以总结历史？ → *latent state / recurrent state-space model*
          - O3.10b｜行动如何改变未来状态？ → *learned transition dynamics*
          - O3.10c｜未来有多个可能结果时怎么办？ → *stochastic generative modeling*
          - O3.10d｜怎样学习观测分布并生成近似样本？ → *VAE / GAN / autoregressive / diffusion / flow；这些是分布建模与生成方法，不自动保证动态或因果有效*
          - O3.10e｜怎样让世界模型支持长远预测？ → *rollout / latent dynamics*
          - O3.10f｜世界模型为什么会产生误差累积？ → *model bias / compounding error*
          - O3.10g｜怎样通过真实反馈重新校准？ → *system identification / adaptation*
      - <a id="o4"></a>**O4｜系统如何从求解经验中改进计算，并积累可复用的知识与能力？（Learning Computation）** → *学会怎样更有效地求解，并把可靠结果巩固为长期能力；也适用于形式环境*
        - **O4.1｜究竟有哪些「计算」可以通过经验改变？** → *区分计算原语、参数、路由、策略与结构*
          - **O4.1.1｜固定的计算原语是什么？** → *arithmetic / logic / tensor operations / function call*
          - **O4.1.2｜运算的系数怎样学习？** → *parameter learning / gradient descent*
          - **O4.1.3｜输入相关的信息路由怎样学习？** → *attention / gating / routing*
            - O4.1.3a｜Transformer 学习的是注意力公式本身吗？ → *通常不是；学习参数与输入依赖路由*
            - O4.1.3b｜模型能否按输入选择不同模块？ → *conditional computation / MoE*
          - **O4.1.4｜搜索顺序怎样从经验改进？** → *learned heuristic / learned policy*
          - **O4.1.5｜规则和程序怎样从样例产生？** → *inductive program synthesis / program induction*
          - **O4.1.6｜模型能否学会选择计算深度？** → *adaptive computation / early exit / test-time compute*
          - **O4.1.7｜学习计算是否消除了可计算性与复杂性边界？** → *否；可改善特定任务分布的求解效率，通常不提供任意实例上的保证*
        - **O4.2｜一次推理怎样形成持久知识？（Reasoning–Learning Bridge）** → *生成—检验—抽象—巩固—再检验*
          - **O4.2.1｜推理产生了什么可被保存的结果？** → *candidate conclusion / proof / explanation / plan*
          - **O4.2.2｜哪些候选结论值得相信？** → *proof checking / external tests / uncertainty*
          - **O4.2.3｜结果中可复用的结构是什么？** → *schema / rule / skill / abstraction*
          - **O4.2.4｜应该写入系统哪里？** → *parameter / rule / memory / policy*
          - **O4.2.5｜旧知识与新知识冲突怎么办？** → *revision / conflict resolution*
          - **O4.2.6｜持久化后是否真的提高未来能力？** → *generalization / retention / evaluation*
          - **O4.2.7｜哪些推理并不需要被持久化？** → *ephemeral computation / context-dependent inference*
          - **O4.2.8｜所有学习都必须先经过显式推理吗？** → *否；直接损失优化与显式推理驱动学习可以并存*
        - **O4.3｜不同推理方式能怎样转化为学习？** → *对应关系而非普遍等价*
          - O4.3a｜演绎中的证明结构怎样成为规则？ → *explanation-based learning*
          - O4.3b｜归纳中的一般假设怎样形成模型？ → *inductive learning / generalization*
          - O4.3c｜溯因解释怎样成为诊断知识？ → *abductive learning / hypothesis revision*
          - O4.3d｜类比映射怎样成为迁移图式？ → *analogical learning / schema formation*
          - O4.3e｜概率更新怎样长期改变信念与参数？ → *Bayesian learning / estimation*
          - O4.3f｜怎样从因果查询走向模型修正与可行动知识？ → *证据与干预 → causal discovery / parameter update / intervention learning*
          - O4.3g｜规则例外怎样改变知识体系？ → *belief revision / default rule learning*
        - **O4.4｜Slow Reasoning 能否转化为 Fast Inference？** → *amortized inference / distillation*
          - **O4.4.1｜每次都运行复杂求解为什么昂贵？** → *per-instance search / inference cost*
          - **O4.4.2｜能否收集求解器的输入—输出例子？** → *teacher generation / synthetic data*
          - **O4.4.3｜能否训练一个快速近似映射？** → *fθ(x) ≈ Solve(x)*
          - **O4.4.4｜怎样把搜索策略而非仅最终答案教给学生网络？** → *policy/value distillation*
          - **O4.4.5｜什么时候仍应使用慢推理？** → *uncertain cases / novel problems / fallback search；须有可靠的分流与检查机制*
          - **O4.4.6｜快思考与慢思考是符号/神经的严格二分吗？** → *不是；System 1/2 是启发性的认知类比*
          - **O4.4.7｜快速近似可能在哪些输入上失败？** → *distribution shift / loss of guarantees*
        - **O4.5｜可靠验证能否反过来驱动学习？** → *Generator × Verifier*
          - **O4.5.1｜哪些机制能提供不同强度的检验信号？** → *proof checker / test / simulator / human / world feedback；分别核查其保证范围*
          - **O4.5.2｜为什么证明检查有时比找到证明容易？** → *candidate vs verification*
          - **O4.5.3｜如何将验证结果转换成训练信号？** → *reward / rejection / preference / RLVR*
          - **O4.5.4｜验证器能否漏检错误或被利用？** → *specification gaming / reward hacking*
          - **O4.5.5｜真实世界是否存在万能验证器？** → *不存在；有限规格与实证检验须结合*
        - **O4.6｜推理与学习能否形成更高一级的闭环？** → *learn → reason → verify → update*
          - O4.6a｜学习改进推理，推理又如何生成新训练数据？ → *self-improvement loop*
          - O4.6b｜如何防止模型对自身错误结论反复强化？ → *external validation / uncertainty control*
          - O4.6c｜何时应当改表示，而不是继续加大搜索？ → *representation–computation co-design*
      - <a id="o5"></a>**O5｜智能体能否主动决定自己将获得什么经验？（Active Information Acquisition）** → *有可选择观测或行动时，数据获取依赖策略；与 O6/O7 构成闭环*
        - **O5.1｜哪些观测最值得付出成本？** → *value of information*
        - **O5.2｜怎样挑选最有价值的标注样本？** → *active learning*
        - **O5.3｜怎样设计能区分竞争假设的实验？** → *optimal experimental design*
        - **O5.4｜怎样通过探索发现未知状态与规律？** → *exploration / novelty seeking*
        - **O5.5｜主动改变观察位置能够减少歧义吗？** → *active perception / viewpoint selection*
        - **O5.6｜行动能同时带来任务收益和知识吗？** → *dual control*
          - O5.6a｜探索与利用为什么冲突？ → *exploration–exploitation*
          - O5.6b｜为未来学习牺牲当前收益何时值得？ → *information gain vs cost*
        - **O5.7｜行动怎样改变未来观测分布？** → *policy-dependent data collection*
        - **O5.8｜未知环境中哪些探索应被禁止？** → *safe exploration*
        - **O5.9｜怎样尽可能发现未被现有模型覆盖的新情况？** → *novelty / anomaly detection / open-set recognition；无法保证发现所有未知*
      - <a id="o6"></a>**O6｜目标怎样转化为可执行的行动，如何应对真实反馈？（Decision × Planning × Control）** → *行动选择、计划执行与反馈校正；与 O5/O7 相互耦合*
        - **O6.1｜目标究竟从哪里来？** → *specified reward / preferences / constraints*
          - O6.1a｜目标与代理指标为何可能不同？ → *reward misspecification*
          - O6.1b｜多个相冲突的目标如何协调？ → *multi-objective / constrained decision*
          - O6.1c｜内在动机与外部目标如何结合？ → *intrinsic motivation / goal learning*
          - O6.1d｜指令与目标含混时，怎样澄清任务意图？ → *instruction grounding / preference learning / clarification*
          - O6.1e｜目标与安全要求冲突时，怎样约束或修正行动？ → *constrained decision / human feedback / oversight*
        - **O6.2｜不完备观测下怎样估计当前状态？** → *belief / memory / state estimation（详见 O1）*
        - **O6.3｜行动的后果怎样预测？** → *world model / uncertainty propagation*
          - O6.3a｜模型错误如何影响远期预测？ → *compounding model bias*
          - O6.3b｜未来不止一种可能时如何规划？ → *scenario / stochastic planning*
        - **O6.4｜怎样求得面向长期目标的计划或策略？** → *planning / tree search / trajectory optimization / contingent policy；部分可观测时可依据信念决策*
          - O6.4a｜什么时候用符号任务规划？ → *task planning / PDDL*
          - O6.4b｜什么时候用连续轨迹优化？ → *trajectory planning / optimal control*
          - O6.4c｜高层意图与低层控制如何分层？ → *hierarchical planning / options*
        - **O6.5｜计算出的动作怎样变成可执行的物理控制？** → *actuator / dynamics / system identification*
          - O6.5a｜执行器延迟怎样影响控制？ → *actuation dynamics / delay modeling*
          - O6.5b｜规划轨迹与真实动力学为何不一致？ → *model mismatch / tracking error*
          - O6.5c｜如何将感知不确定性传到控制约束？ → *robust / chance-constrained control*
        - **O6.6｜存在扰动和模型误差时，为什么通常需要闭环？** → *feedback / receding horizon / MPC*
          - O6.6a｜状态偏离预期后怎么办？ → *replanning / feedback correction*
          - O6.6b｜闭环稳定性怎样分析？ → *Lyapunov / robust stability*
          - O6.6c｜规划频率和执行频率如何匹配？ → *real-time control*
        - **O6.7｜怎样同时规划任务、控制和信息获取？** → *belief-space planning / dual control*
        - **O6.8｜与其他行动者共处时怎样预测？** → *interactive planning / game theory*
        - **O6.9｜什么叫真正完成任务？** → *closed-loop success / robustness / safety*
      - <a id="o7"></a>**O7｜行动反馈怎样改进未来决策策略？（Reinforcement Learning）** → *Learning × Decision × Interaction；与 O5/O6 共同形成反馈闭环*
        - **O7.1｜奖励和价值究竟表达了什么？** → *reward / return / value function*
          - O7.1a｜即时收益与长期收益怎样权衡？ → *discounted return / horizon*
          - O7.1b｜奖励是否真实反映目标？ → *reward alignment / misspecification*
        - **O7.2｜什么是能够支持决策的状态与行动？** → *MDP / representation / action space*
          - O7.2a｜状态缺失时策略会怎样失败？ → *partial observability / aliasing*
          - O7.2b｜连续动作与离散动作差别是什么？ → *continuous/discrete control*
        - **O7.3｜长期结果应该归功于哪次行动？** → *credit assignment / temporal difference*
          - O7.3a｜奖励延迟时如何更新？ → *TD learning / eligibility traces*
          - O7.3b｜稀疏奖励为什么难学？ → *sparse reward / hierarchy*
        - **O7.4｜未知环境中如何探索？** → *exploration–exploitation / intrinsic reward*
          - O7.4a｜怎样估计价值、模型或未充分探索区域的不确定性？ → *visit count / posterior / ensemble / epistemic uncertainty*
          - O7.4b｜安全探索何时可能？ → *constraint satisfaction / risk budget*
        - **O7.5｜价值函数和策略怎样学习？** → *value-based / policy-based / actor–critic*
          - O7.5a｜通过 Bellman 更新能学到什么？ → *Q-learning / TD*
          - O7.5b｜直接优化策略参数能得到什么？ → *policy gradient*
          - O7.5c｜价值估计怎样帮助策略改进？ → *actor–critic*
        - **O7.6｜怎样学习环境模型并用它规划？** → *model-based RL / learned dynamics / Dyna*
        - **O7.7｜不能在线试错时怎样学习？** → *offline RL / imitation / distribution shift*
          - O7.7a｜数据没有覆盖的动作为什么危险？ → *extrapolation error*
          - O7.7b｜模仿能否提供初始策略？ → *behavior cloning / imitation learning*
        - **O7.8｜部分可观测时策略需要什么？** → *belief / recurrent policy / memory*
        - **O7.9｜怎样提高学习效率，并检验训练与执行的稳定性和安全性？** → *sample efficiency / convergence conditions / safe RL / robust evaluation*
          - O7.9a｜仿真中学到的策略为何可能在现实中失效？ → *sim-to-real gap*
          - O7.9b｜奖励漏洞如何产生错误行为？ → *reward hacking*
          - O7.9c｜如何评价长期而非单步表现？ → *episodic / closed-loop evaluation*
      - <a id="o8"></a>**O8｜环境不断变化时，能力怎样保持、迁移和升级？（Lifelong Adaptation）** → *Transfer × Continual × Meta × Memory*
        - **O8.1｜Transfer Learning：哪些能力能够跨世界复用？** → *跨域共享结构*
          - O8.1.1｜究竟迁移什么？ → *features / parameters / rules / policy / skills*
          - O8.1.2｜源领域与目标领域差在哪里？ → *domain shift / task shift*
          - O8.1.3｜哪些机制可以实现迁移？ → *pretraining / fine-tuning / adapters / alignment*
          - O8.1.4｜少量新数据怎样快速适配？ → *few-shot / domain adaptation*
          - O8.1.5｜应该选择迁移哪些知识？ → *transfer selection / relevance*
          - O8.1.6｜为什么迁移有时降低表现？ → *negative transfer / mismatched assumptions*
          - O8.1.7｜新分布上的泛化边界是什么？ → *OOD / distribution generalization*
        - **O8.2｜Continual Learning：不断学习为什么会遗忘？** → *稳定性—可塑性*
          - O8.2.1｜任务、分布、概念怎样随时间变化？ → *nonstationarity / concept drift*
          - O8.2.2｜怎样既保留旧知识又吸收新知识？ → *stability–plasticity tradeoff*
          - O8.2.3｜旧能力为什么会被新训练破坏？ → *catastrophic forgetting / interference*
          - O8.2.4｜哪些记忆方法可以缓解遗忘？ → *replay / regularization / consolidation*
          - O8.2.5｜旧结构什么时候可以复用？ → *modularity / transfer*
          - O8.2.6｜模型是否需要扩展？ → *dynamic architecture / growth*
          - O8.2.7｜怎样评价几十次任务后的综合表现？ → *forward/backward transfer / lifetime metrics*
        - **O8.3｜Meta-Learning：能否学习「怎样学习」？** → *跨任务适应机制*
          - O8.3.1｜元层究竟学习什么对象？ → *initialization / optimizer / inductive bias / update rule*
          - O8.3.2｜怎样定义任务分布？ → *meta-training task distribution*
          - O8.3.3｜少量经验怎样触发快速适应？ → *few-shot adaptation*
          - O8.3.4｜怎样优化跨任务表现？ → *meta-objective / bilevel optimization*
          - O8.3.5｜面对新任务的泛化依据是什么？ → *shared structure / task similarity*
          - O8.3.6｜为什么不能保证适应任意新世界？ → *out-of-distribution limits*
        - **O8.4｜长期记忆应该保存什么？** → *experiences / beliefs / rules / skills / failures*
          - O8.4a｜事件记忆和语义记忆有何区别？ → *episodic / semantic memory*
          - O8.4b｜什么时候检索，什么时候更新参数？ → *retrieval vs consolidation*
          - O8.4c｜互相矛盾的记忆怎样处理？ → *belief revision / provenance*
        - **O8.5｜系统怎样发现已有能力可能失效？** → *change detection / model monitoring / external feedback；自评仍需校验*
      - <a id="o9"></a>**O9｜其他智能体加入后，为什么「世界」更难预测？（Multi-Agent Intelligence）** → *环境中存在具有目标与策略的其他主体*
        - **O9.1｜他人的行动应被建模为噪声还是策略？** → *intentional agents / game theory*
        - **O9.2｜合作与竞争如何改变价值函数？** → *cooperative / competitive games*
        - **O9.3｜其他主体也在学习时怎么办？** → *nonstationarity / opponent modeling*
        - **O9.4｜局部信息怎样通过通信协调？** → *communication / distributed inference*
        - **O9.5｜如何实现分布式决策与共同目标？** → *consensus / decentralized control / MARL*
        - **O9.6｜多主体的规则、承诺与信任如何维持？** → *norms / coordination / mechanism design*
        - **O9.7｜学习系统怎样处理欺骗和战略行为？** → *adversarial robustness / game theory*
      - <a id="o10"></a>**O10｜真实世界的正确性与可靠性究竟怎样评价？** → *形式正确不自动保证现实正确*
        - **O10.1｜预测准确能够支持哪种程度的理解判断？** → *task sufficiency / mechanism tests / causal understanding；理解须先明确操作性标准*
        - **O10.2｜置信度是否反映真实错误概率？** → *probabilistic calibration*
        - **O10.3｜训练分布外时会发生什么？** → *OOD generalization / stress testing*
        - **O10.4｜表示是否真正指向现实对象？** → *grounding evaluation*
        - **O10.5｜开环误差与闭环失败为什么不同？** → *feedback-induced distribution shift*
        - **O10.6｜长时运行时误差怎样积累？** → *compounding error / drift / forgetting*
        - **O10.7｜哪些安全条件能形式证明？** → *formal constraints / reachability*
        - **O10.8｜形式证明依赖的现实假设怎样被核查？** → *system validation / assumptions monitoring*
        - **O10.9｜验证器自身不完备时怎么办？** → *red teaming / external testing / human oversight*
        - **O10.10｜鲁棒表现与平均指标应怎样权衡？** → *tail risk / worst-case / reliability*
      - <a id="o11"></a>**O11｜怎样把相关能力组合为能完成任务的智能体？（Integrated Agent）** → *按任务协调感知、模型、求解、行动与学习；不要求每个系统覆盖所有能力*
        - **O11.1｜感知如何形成可信的内部状态？** → *Perception + Representation*
        - **O11.2｜模型怎样支持预测、解释和推理？** → *World Model + Inference*
        - **O11.3｜怎样利用目标选择行动？** → *Decision + Planning + Control*
        - **O11.4｜行动反馈怎样更新模型和技能？** → *Learning + Interaction*
        - **O11.5｜怎样把快速近似与必要的检查结合？** → *amortized reasoning + proof checking / empirical testing；检查方式取决于任务与可用证据*
        - **O11.6｜认知循环与行动循环怎样耦合？** → *经验 → 表征／推理 → 验证 → 更新；目标 → 决策／执行 → 反馈；共享状态、记忆与资源*
        - **O11.7｜现代模型与方法怎样落入既有问题树？** → *分解其表征、学习目标、计算机制与交互方式；具体例子见第 7 节*

<a id="guide"></a>

## 3. 章级导学：为什么出现 → 已有回答 → 新的困难

每一章都从一个值得回答的问题出发。理解它，既要知道有哪些概念和方法，也要知道为什么需要它们，以及已有回答还留下什么困难。下面把这三层关系放在同一行中，帮助将一个个知识点连接起来。

各章既可能分解同一个问题，也可能追问已有回答的适用边界。因此，表中的先后可以作为学习路径，但不表示每一章都由上一章单向推出。

### I. 表征：Representation

先确定要表达哪些对象，再研究表达怎样获得明确含义、知识怎样组织，以及哪些表示更适合任务。这一组问题为后续计算规定对象，也会影响计算的难度。

| 章级问题 | 为什么出现？ | 已有回答 / 核心结论 | 又引出什么？ |
|---|---|---|---|
| [R1 · 表示对象](#r1) | 要让思想可计算，必须先指定计算对象。 | 对象、属性、关系、状态、事件、信念、目标。 | 哪些对象值得选，什么状态才充分？ |
| [R2 · 形式语言](#r2) | 含混直觉不足以规定可复查的对象、表达式和操作规则。 | 形式语言、量词、变量、类型、公理化；ε–δ、Frege。 | 形式语法合法，是否就具有意义？ |
| [R3 · 符号与意义](#r3) | 有了符号串，仍不知道它在何种解释下成立。 | 语法/模型语义/现实指称分层。 | 内部形式解释如何与外界对齐？ |
| [R4 · 知识组织](#r4) | 一个表达式远不足以表示大量相互关联的知识。 | 本体、规则库、知识图、行动模型、概率图。 | 换成连续或隐式表示会怎样？ |
| [R5 · 表示形式](#r5) | 离散逻辑符号并非唯一的计算载体。 | 向量、概率分布、几何和神经—符号混合。 | 何种形式最适合具体任务？ |
| [R6 · 好表征的标准](#r6) | 表示方法很多，需要评价它们的任务价值。 | 表达力、信息充分、压缩、组合性、计算可处理性。 | 怎样从经验获得或修正更好的表示？ |

### II. 计算：Computation

有了可处理的对象，还要说明步骤怎样执行、推导怎样检查，以及哪些问题没有算法或代价过高。通用计算机制与可学习策略是在这些要求和边界中展开的。

| 章级问题 | 为什么出现？ | 已有回答 / 核心结论 | 又引出什么？ |
|---|---|---|---|
| [C1 · 机械计算](#c1) | 符号存在并不意味着存在明确的变换步骤。 | 有效过程、λ 演算、图灵机与算法形式模型。 | 哪类机械推导是合法的？ |
| [C2 · 合法推导与证明](#c2) | 能够变换符号，不等于变换保留真理关系。 | 推导规则、可靠性、完备性、证明系统。 | 证明能否本身成为可变换的计算对象？ |
| [C3 · 证明、程序与类型](#c3) | 证明是复杂结构，可能包含冗余和可归约步骤。 | 自然演绎、正规化、割消去、Curry–Howard。 | 哪些问题即便明确仍没有通用算法？ |
| [C4 · 可计算性的边界](#c4) | 明确定义的问题仍可能超出算法或给定证明系统的能力。 | 可判定与可识别、停机问题；满足适用条件的理论有不完备性。 | 即使有算法，资源成本能否承担？ |
| [C5 · 计算复杂性](#c5) | 原则上可计算不代表能及时完成。 | 复杂性、NP-hard、树宽、近似与数据搬运。 | 怎样设计可复用的高效求解机制？ |
| [C6 · 通用计算机制](#c6) | 不同任务都在重复搜索、分解、约束和优化。 | 搜索、剪枝、DP、消息传递、优化、验证。 | 计算规则与策略有多少必须手工设计？ |
| [C7 · 计算原语与策略](#c7) | 固定原语不等于必须固定求解顺序。 | 计算原语、计算策略、编译、算法选择与可学习启发式。 | 给定这些机制能构造多强的系统？ |

### III-A. 给定形式框架：Formal World

在明确的假设、规则或目标下，可以分别研究系统怎样推理、求解、规划与学习，再比较这些能力共享的结构。F9 进一步追问：内部求解成功之后，成本、接地与模型适用性还会带来什么困难？

| 章级问题 | 为什么出现？ | 已有回答 / 核心结论 | 又引出什么？ |
|---|---|---|---|
| [F1 · 演绎与自动证明](#f1) | 一旦规定了逻辑与语义，如何自动找到必然结论？ | 后承、证明搜索、归结、SAT/SMT、可信检查。 | 证明正确是否意味着现实前提正确？ |
| [F2 · 不完整与可撤销知识](#f2) | 现实知识常有缺失、例外与相互矛盾的规则。 | 缺省推理、非单调逻辑、信念修正、常识。 | 概率性的不确定能否同样形式化？ |
| [F3 · 概率推理](#f3) | 除了真假与可撤销性，还需要量化信念并随证据更新。 | 贝叶斯、概率图、消息传递、树宽、VI/MCMC。 | 算得出后验时，模型本身是否正确？ |
| [F4 · 搜索、约束与优化](#f4) | 答案空间很大，不能总以穷举获得。 | 图搜索、CSP、启发式、最优化、近似。 | 搜索和推断可否共享计算结构？ |
| [F5 · 非演绎推理的形式化](#f5) | 不是所有判断都具有演绎的必然性。 | 归纳、溯因、类比、因果、可撤销推理的形式化。 | 形式规则怎样连接现实经验？ |
| [F6 · 决策、规划与控制](#f6) | 知道世界如何演化，不自动说明该做什么。 | 目标与价值、MDP/POMDP、规划、MPC、博弈。 | 算出行动方案与现实执行有什么距离？ |
| [F7 · 推理与求解的不同统一层次](#f7) | 不同问题或共享计算骨架，或共享语义与决策原则，但这些共通性并不处在同一层。 | 半环的代数结构、贝叶斯的信念更新、因果模型的查询语义、证明—程序对应、资源理性。 | 哪些结论能在共同结构上迁移，哪些仍受问题语义与复杂度制约？ |
| [F8 · 形式框架中的学习](#f8) | 即使问题框架明确，参数、具体模型与策略仍可能未知。 | MLE/MAP、EM、自我对弈、策略学习、证明策略学习。 | 当模型族和对象表示自身不足时怎么办？ |
| [F9 · 从形式求解到现实智能](#f9) | 形式框架中的有效求解仍可能昂贵，也不能独自确认现实对应与模型适用性。 | 区分计算扩展、现实接地与模型失配；扩展性问题并非开放世界独有。 | 改善求解策略、从经验修正模型；若可主动行动，还须协调信息获取与任务目标。 |

### III-B. 开放世界：Open World

当现实没有提供全部前提、原有模型也可能不足时，系统需要获取证据、发现知识、学习表示与求解方法。若能够选择行动，还要协调信息、任务与反馈，并面对长期变化、多主体交互和可靠性问题。

| 章级问题 | 为什么出现？ | 已有回答 / 核心结论 | 又引出什么？ |
|---|---|---|---|
| [O1 · 感知与接地](#o1) | 现实环境并不直接交付符合逻辑语言的真实符号。 | 感知、状态估计、SLAM、多模态与行动接地。 | 感知之后未知概念和规律怎样发现？ |
| [O2 · 知识发现与推理](#o2) | 演绎只保证给定前提下的结论，不能凭空补齐未知规律。 | 归纳、溯因、类比、因果识别、科学实验。 | 获得的新知识如何进入可用的内部模型？ |
| [O3 · 表征与世界模型学习](#o3) | 现有表征和模型不可能总是适合新环境。 | 学习参数、特征、结构、规则、潜变量与动力学。 | 有了模型，为何反复求解仍然昂贵？ |
| [O4 · 计算学习与经验巩固](#o4) | 知识与模型的学习不自动解决求解成本和经验复用问题。 | 学习计算策略、摊销推断、推理—学习桥梁、验证器反馈；可与 O3 共同训练。 | 系统能否主动选择获取什么新信息？ |
| [O5 · 主动获取信息](#o5) | 若能选择观察或干预，经验不再完全由外部固定提供。 | 信息价值、实验设计、探索、主动感知、dual control。 | 获取信息和达成目标何时发生冲突？ |
| [O6 · 行动决策与反馈控制](#o6) | 扰动、模型误差与状态不确定性使一次性计划通常难以保证执行效果。 | 闭环状态估计、预测、规划、控制、反馈。 | 反馈能否持续改善策略而非仅纠正当前状态？ |
| [O7 · 强化学习](#o7) | 纠正当前行动之外，还希望利用累积反馈改善未来决策。 | 价值、信用分配、策略优化、模型学习与离线 RL。 | 环境改变后旧策略与知识还能保持吗？ |
| [O8 · 迁移与持续适应](#o8) | 新任务和新分布会挑战此前形成的能力。 | 迁移、持续学习、元学习、长期记忆与失效检测。 | 其他主体会学习或对抗时发生什么？ |
| [O9 · 多智能体](#o9) | 环境里存在会推测、配合、欺骗的其他行动者。 | 博弈、通信、协作、分布式决策、MARL。 | 怎样评价复杂环境中的真实可靠性？ |
| [O10 · 现实可靠性评价](#o10) | 形式证明与离线准确率不自动保证真实闭环表现。 | 校准、OOD、鲁棒性、现实验证、安全约束。 | 如何把各模块组合成可长期运行的智能体？ |
| [O11 · 智能体系统](#o11) | 完成复杂任务需要协调相关能力及其接口、反馈与资源。 | 按任务组合感知、模型、推理、行动、学习与检验，不要求每个智能体显式具备全部模块。 | 长期目标、开放概念与自主适应仍有哪些未解难题？ |


<a id="insights"></a>

## 4. 关键结论选读

读完相关章节后，可以回看这些结论：它们概括的不只是“学过哪些方法”，还包括这些方法改变了人们对表征、推理、学习和行动的哪些认识。

**R6：** 好的表征不只是描述世界，还决定哪些问题容易计算和证明。

**C3：** 在合适的逻辑体系中，证明可以成为带有计算结构的程序对象；正规化与程序归约相对应。

**F3：** 不确定性完全可以形式化；复杂概率推断可以分解为局部计算，但成本受图结构等因素制约。

**F7：** 推理的“统一”有不同层次：半环揭示部分算法的组合—聚合骨架；贝叶斯、因果模型、证明—程序对应和资源理性分别统一各自的问题或原则。共享计算模式，不等于共享全部语义、复杂性或可靠性保证。

**F9：** **形式正确、计算高效、现实模型有效**是三种不同的要求。计算扩展性在纯形式任务中也会出现；接地与模型失配则要求额外核查现实对应和适用性。《苦涩的教训》讨论可扩展搜索与学习的经验教训，不能代替符号接地问题。

**O2：** 演绎、归纳、溯因、类比和因果推理不是互斥流派；它们分别承担保真推导、泛化、解释生成、结构迁移与干预推断等功能，并可相互校验。

**O3：** 学习不仅是估计数值参数，还可以改变表示、结构、规则和世界模型。逼真的静态生成不等于学会世界动力学，预测有效也不自动意味着因果正确。

**O4：** 学习还可以改善求解过程，并与表示学习共同发生；经验证的推理成果可以形成规则、策略、记忆或参数，成为可复用能力。**“推理是学习的生成器，学习是推理的持久化”**是有启发性的桥梁，而不是所有学习过程的普遍定理。

**O5—O7：** 智能体不仅接收经验，也可以通过行动改变经验的来源；信息获取、行动选择和反馈学习相互依赖。

**O10—O11：** **形式系统内部的可靠性不保证系统对现实世界可靠。** 实际智能需要持续核查模型假设与感知接地，并在闭环中评价长期后果。

<a id="connections"></a>

## 5. 横向联系

### 贯穿各章的四个问题

| 横向追问 | 关键概念 | 相关章节 |
|---|---|---|
| 内部表示究竟指向什么？ | Meaning / Grounding；形式解释、现实指称、反馈校验 | R3、R6.7、F9.2、O1、O10.4 |
| 凭什么相信当前判断？ | Uncertainty / Evidence；前提、证据、信念、可识别性 | R1.4、F2、F3、O2、O10.2 |
| 有限资源下什么值得计算？ | Resources / Complexity；时间、空间、数据、计算价值 | C5、C6、F3.6、F7.5、O4、O7.9 |
| 怎样知道答案或行动有效？ | Verification / Evaluation；证明检查、经验检验、闭环评价 | C6.7、F1.5、F3.8、O4.5、O10 |

### 主要跨章节关系

| 跨节点关系 | 为什么需要横向连接？ |
|---|---|
| **R6 ↔ C5/C6 ↔ O3** | 好表征会改变计算难度；表征还可以被学习，三者不能互相代替。 |
| **C2/C3 → F1 → O4.5** | 证明演算、自动搜索与验证器反馈分属不同层；验证可以反过来产生学习信号。 |
| **F3 ↔ F7.1 ↔ O4.4** | 显式概率图推断可成为教师，学习到的摊销推断可在重复查询中降低平均成本。 |
| **F5 ↔ O2** | 形式化一种推理方式，不等于已经解决它在未知现实中的前提获取与检验。 |
| **F8 ↔ O2/O3/O4** | 形式环境也能学习；相同学习机制还可用于现实模型的获得与修正，需另查框架适用性。 |
| **O2 ↔ O3 ↔ O4** | 提出与检验候选规律、形成内部模型、改善求解和巩固经验可以相互反馈；分章不代表严格分离。 |
| **O3.3 ↔ F4.6 ↔ O2.1.3** | 学习目标、优化过程与泛化依据是不同问题；反向传播只提供梯度计算，不独自保证学得正确或泛化。 |
| **F9.1 → O4** | 搜索扩展瓶颈可推动学习更优求解策略，但这并非开放世界独有。 |
| **F9.2 → O1 ↔ O3.7 ↔ O10.4** | 表示与具体世界的对应要靠感知、经验和持续外部检验。 |
| **F9.3 → O2/O3/O8** | 原有变量、结构和分布失效后，需要假设生成、模型修正与持续适应。 |
| **O2.4 ↔ O5 ↔ O6** | 行动既能追求目标，也能收集信息、区分因果假设。 |
| **O5 ↔ O6 ↔ O7** | 主动获取信息、行动决策、反馈学习形成双向闭环，而不是三段单向历史。 |
| **O4.2 ↔ O8.4 ↔ O10** | 能否保存新结果、如何检测矛盾、持久化是否有价值都依赖跨时间评价。 |
| **F6 ↔ O6 ↔ O10** | 给定模型下的规划，如何经由执行器和传感器进入真实闭环，并以现实表现评价？ |

O2 关注规律与解释如何提出、为何可信；O3 关注知识、表征和模型如何被系统学得；O4 关注求解过程如何改善、经验如何转化为可复用能力。这些问题可以在同一学习过程中共同解决。

O5、O6、O7 分别侧重获取信息、选择并执行行动、利用反馈改善策略。实际系统往往同时面对三者。

<a id="history"></a>

## 6. 思想史中的问题与突破

前面的主线围绕问题之间的联系展开。回到思想史，还需要分别看哪些人物与理论推动了哪些突破，以及它们的贡献和边界。

符号主义、统计学习、连接主义、控制论与强化学习长期并行、交叉发展。这段历史包含不同传统的相互借鉴，不能简化成某个流派失败之后由另一个接班。下表按研究问题组织思想来源，不表示严格的年代顺序。

| 转折中的问题 | 代表人物/理论 | 本树位置 | 成功与未解之处 |
|---|---|---|---|
| 思想与推理能否符号化并计算？ | Leibniz：普遍符号语言与推理演算理想 | Q0 | 提出研究方向，不意味着完成实现。 |
| 模糊直觉怎样获得精确定义？ | Descartes；Cauchy / Weierstrass 的极限严密化 | R2 | 形式化使推导更严格，未必保证可判定。 |
| 逻辑中的一般性、量词和公理怎样表达？ | Boole、Frege、Hilbert | R2、C2 | 建立形式语言与证明计划。 |
| 证明为何是可以操作的对象？ | Gentzen 自然演绎/相继式；Prawitz 正规化；Curry–Howard | C2、C3、F1 | 证明搜索和证明检查成本不相同。 |
| 什么是机械计算，什么能算？ | Church、Turing、Gödel | C1、C4 | 明确可计算与不可判定边界。 |
| 已知知识能做多少复杂推理？ | 经典符号 AI、知识表示、专家系统、SAT/SMT | F1、F2、F4 | 显式推理强大，但知识获取、组合搜索仍困难。 |
| 不确定模型如何形式推理？ | Bayes、Kolmogorov、Pearl、概率图与消息传递 | F3、F7 | 不确定≠未形式化；高树宽导致昂贵精确推断。 |
| 手工知识与启发式为何有扩展瓶颈？ | Sutton：《The Bitter Lesson》（2019） | F9.1 | 一般搜索/学习可利用算力；并非否定所有符号计算。 |
| 符号如何真正指向外部对象？ | Harnad 与 Symbol Grounding | R3、F9.2、O1 | 形式解释与现实指称必须分开。 |
| 表征与计算能否依靠经验形成？ | 统计学习、连接主义、反向传播、Transformer | O2—O4 | 可以学表示与策略，但计算原语、学习目标仍有人设计。 |
| 复杂计算为何可能变得很快？ | 摊销推断、学习启发式、蒸馏；System 1/2 类比 | F3、O4 | 快近似不自动有证明保证；新问题仍可用慢求解。 |
| 行动为什么会改变未来经验？ | 控制论、Bellman、RL、主动学习、机器人学 | F6、O5—O7 | 数据来源与决策策略耦合，带来安全和反馈问题。 |
| 多种能力怎样长期协同？ | 世界模型、智能体、神经—符号、持续学习、多智能体 | O8—O11 | 系统级稳健性、目标获取与长尾评价仍是开放问题。 |

### 同一方法可以跨越不同问题情境

**AlphaZero**：棋类规则明确，系统仍可学习价值函数、策略和搜索引导。形式框架中可以有学习。

**概率图模型**：给定结构下计算后验属于概率推理；从数据发现结构属于模型学习。二者也都可以在明确规定的统计学习设定中研究。

**自动驾驶**：规划与控制可使用明确的几何、动力学和优化约束，感知与模型学习则需应对新对象、测量误差和分布变化。系统表现取决于这些能力的闭环协作。

<a id="modern"></a>

## 7. 现代模型与方法

新模型通常同时涉及多个基本问题。理解它时，可以依次追问：它表示什么，怎样学习，执行什么计算，怎样与环境交互，以及如何评价结果。

| 方法或研究方向 | 它主要回答哪些基本问题？ | 相关章节与评价要点 |
|---|---|---|
| LLM / VLM | 怎样从序列或多模态数据学习表示、条件分布与可复用计算？ | O3.3、O3.7、O4.1、O4.4；预测能力须与现实接地、推理可靠性分开检验。 |
| VLA | 怎样将视觉与语言条件转化为行动策略，并从示范或反馈学习？ | O1.5、O3.7、O6、O7.7；行为克隆属于模仿学习，并不自动等于强化学习或具备世界模型。 |
| 世界—行动模型（World Action Model，WAM） | 怎样联合表示世界演化与行动，支持预测或决策？ | O3.10、O6.3、O7.6；需按具体模型核查是否真正依赖行动、能否支持闭环，不同研究对模型功能的定义可能不同。 |
| 扩散模型 | 怎样通过学习去噪或分数函数，以迭代过程生成条件样本？ | O3.3、O3.10d、C1.5；用于图像、轨迹或动作时，分别承担观测建模或策略建模，生成质量不能替代任务效果。 |
| 连续流 / Flow Matching | 怎样学习连续输运或向量场，将简单分布变为目标分布？ | O3.10d、F4.6、C1.5；与扩散同属生成建模的相关路径，但训练目标、动力学与数值求解并不相同。 |
| 世界模型 | 怎样学习足以支持预测、规划或决策的状态与环境演化模型？ | O3.10、O6.3、O7.6；重点检查行动条件、长时误差和任务充分性，不把逼真视频直接等同于有效动力学。 |

这里的 LLM 指大语言模型，VLM 指视觉语言模型，VLA 指视觉语言行动模型。WAM 的具体含义与功能需结合相应研究的定义。

相同生成机制可以用于观测、状态或策略建模；世界模型与行动策略也可以共享表示。“预测未来”和“选择行动”仍需要各自的目标与评价标准。

这棵树用于组织学习与查阅。真实知识关系包含大量交叉，横向联系补充了树形结构。理解一个新方向，还需要说明它解决了哪个问题、采用什么机制、有什么证据，以及哪些困难仍然存在。出现无法由现有分支充分解释的基本问题时，这份地图也需要修正。

贯穿全文的开放问题是：

> 人类能否从“人类给定符号和计算规则”，逐步走向“系统通过经验获取表示、改善计算、主动选择经验并在现实中检验其行动”的长期自适应智能？