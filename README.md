# 人工智能问题树

**从思想的形式化到开放世界智能**

一份以问题为线索的人工智能知识地图。它不按流派或年份编排，而是从“系统在处理什么、怎样处理、凭什么相信、怎样改进”这些共同问题出发，把表征、计算、推理、学习、行动与评价连接起来。

全图以一条主线组织：

> 人工智能的核心困难，不是把某个任务形式化，而是当现实超出既有框架时，系统如何发现、检验并修正框架；计算扩展性只是其中一类困难，而且不是开放世界独有的。

**图例**：R 表征｜C 计算｜F 给定形式框架｜O 开放世界。编号用于查阅，不表示历史先后。

[在线站点](https://vincentwong3.github.io/ai-research/) · [叙事版](docs/map.md) · [关于这份地图](docs/about.md) · [版本记录](CHANGELOG.md) · [许可](LICENSE)

---

# Q0｜思想与智能活动能否被表示、机械执行并检验？
- 简短回答：表征与计算的结合；莱布尼茨推理演算理想的现代延伸

---

## I｜Representation：思想、知识与世界，如何成为可计算的对象？
- 简短回答：回答「算什么」

### R1｜一个系统究竟应该表示什么？
- 简短回答：选择基本对象与变量

#### R1.1｜哪些基本对象构成知识表示？
- 简短回答：对象、属性、关系、事件、命题

- **R1.1a｜怎样区分个体、对象类别与形式类型？** → *individual / class / type；区分类别归属与类型约束*
- **R1.1b｜如何表达对象具有某个属性？** → *predicate / attribute / feature*
- **R1.1c｜如何表达两个对象之间的关系？** → *relation / edge / tuple*
- **R1.1d｜如何表达事实是否成立？** → *proposition / truth value*

#### R1.2｜怎样表达抽象与层次？
- 简短回答：类型、概念、范畴、部分—整体

- **R1.2a｜怎样表达实例归属与概念包含？** → *instance membership / subsumption*
- **R1.2b｜怎样表示概念间的上下位关系？** → *taxonomy / ontology*
- **R1.2c｜怎样表示组合对象与部分？** → *mereology / compositional structure*

#### R1.3｜变化的世界怎样成为状态？
- 简短回答：状态、时间、行动、记忆

- **R1.3a｜当前状态与历史是什么关系？** → *state / trajectory / memory*
- **R1.3b｜事件与动作如何区别？** → *event / action / transition*
- **R1.3c｜什么变量足以支持预测与决策？** → *Markov state / sufficient state*

#### R1.4｜不确定或不可观测的事物如何表示？
- 简短回答：信念、分布、潜变量

- **R1.4a｜不知道与确定为假有何区别？** → *unknown / false / three-valued logics*
- **R1.4b｜不确定信念怎样量化？** → *probability / belief / credal set；校准见 O10.2*
- **R1.4c｜隐藏机制如何成为形式对象？** → *latent state / latent variable*

#### R1.5｜目标和价值是否也是表示对象？
- 简短回答：goal / utility / preference / constraint

### R2｜含混的思想如何变成严格的形式语言？
- 简短回答：符号化、语法化、公理化

#### R2.1｜符号为何能替代原本模糊的直觉？
- 简短回答：给出精确定义与操作条件

- **R2.1a｜几何如何转成方程？** → *笛卡尔解析几何*
- **R2.1b｜「无限接近」如何精确表达？** → *Cauchy / Weierstrass；ε–δ*
- **R2.1c｜逻辑关系如何代数化？** → *Boole / algebra of logic*
- **R2.1d｜「任意」「存在」怎样明确化？** → *Frege / quantifiers*

#### R2.2｜什么是一种形式语言？
- 简短回答：alphabet / grammar / well-formed formula

- **R2.2a｜原子符号如何构成表达式？** → *term / formula / syntax tree*
- **R2.2b｜自由变量、量词绑定与替换怎样表达一般性？** → *free/bound variables / substitution*
- **R2.2c｜不同表达力有何代价？** → *propositional / first-order / higher-order*

#### R2.3｜怎样让复杂思想可以组合？
- 简短回答：函数、类型、组合语义

- **R2.3a｜复杂表达如何由子表达构成？** → *compositionality*
- **R2.3b｜怎样排除不符合类型约束的组合？** → *types / typing judgments*
- **R2.3c｜如何表达函数与抽象？** → *lambda abstraction / application*

#### R2.4｜自然语言怎样获得形式结构？
- 简短回答：formal grammar / formal semantics

- **R2.4a｜句法结构怎样成为树？** → *formal grammar / parsing*
- **R2.4b｜自然语言怎样映射到逻辑形式？** → *semantic parsing / Montague semantics*
- **R2.4c｜歧义怎样表示，而非武断消除？** → *parse forest / scope ambiguity*

#### R2.5｜形式化是否意味着一定能自动求解？
- 简短回答：否；可表示 ≠ 可判定

### R3｜符号什么时候有意义？
- 简短回答：语法、模型语义、现实指称的区别

#### R3.1｜什么是语法正确？
- 简短回答：公式是否合法

#### R3.2｜表达式在什么解释下成立？
- 简短回答：interpretation / model / satisfaction

- **R3.2a｜一个公式在何种解释下为真？** → *model-theoretic semantics*
- **R3.2b｜一个概念如何指向对象？** → *reference / denotation*
- **R3.2c｜语义如何与组合规则匹配？** → *compositional semantics*

#### R3.3｜证明与语义后承有什么关系？
- 简短回答：Γ ⊢ φ 与 Γ ⊨ φ；可靠性与完备性见 C2

#### R3.4｜符号意义能否只靠符号之间的定义获得？
- 简短回答：解释无限后退与符号接地问题

- **R3.4a｜怎样让内部的「狗」符号可靠地指向现实中的狗？** → *symbol grounding*
- **R3.4b｜模型中的解释与现实中的对应是一回事吗？** → *不是；model vs environment*

#### R3.5｜怎样判断一个表征的含义已经失效？
- 简短回答：grounding check / semantic drift；检测与反馈见 O1.6

### R4｜大量知识如何组织成可以操作的结构？
- 简短回答：Knowledge Representation

#### R4.1｜事实与规则如何组织？
- 简短回答：knowledge base / Horn clauses / logic programming

#### R4.2｜概念层级如何组织？
- 简短回答：ontology / description logic / taxonomy

#### R4.3｜对象关系如何组织？
- 简短回答：semantic network / knowledge graph / relational schema

#### R4.4｜常识与例外如何表示？
- 简短回答：default / exception / nonmonotonic representation

#### R4.5｜行动与世界变化如何表示？
- 简短回答：STRIPS / situation calculus / event calculus

- **R4.5a｜前置条件和行动后效怎样形式化？** → *precondition / effect*
- **R4.5b｜哪些事实在行动后保持不变？** → *frame problem*
- **R4.5c｜时间约束、顺序和持续如何表达？** → *temporal logic / interval*

#### R4.6｜如何把知识与不确定性结合？
- 简短回答：Bayesian networks / factor graphs / probabilistic programs

### R5｜形式对象是否必须是显式离散符号？
- 简短回答：比较表示方案，而非新旧排序

#### R5.1｜连续空间怎样表示知识？
- 简短回答：vectors / embeddings / latent spaces

#### R5.2｜概率分布可否视为表示？
- 简短回答：distribution / belief state

#### R5.3｜图、程序、几何能否成为表示？
- 简短回答：graph / program / coordinate / manifold

#### R5.4｜如何将离散结构与连续表示组合？
- 简短回答：neuro-symbolic / structured latent models

#### R5.5｜同一对象有多种表征时怎么办？
- 简短回答：multiple views / translation / alignment

- **R5.5a｜图像、语言、动作如何共享对象指称？** → *multimodal alignment*
- **R5.5b｜局部空间、全局坐标如何建立映射？** → *geometry / coordinate transformation*

### R6｜什么才算一套好的表征？
- 简短回答：在任务、语义、表达力与计算成本之间权衡

#### R6.1｜要表达的内容是否表达得了？
- 简短回答：expressiveness / representational adequacy

#### R6.2｜任务需要的信息是否保留？
- 简短回答：sufficiency / relevant information

#### R6.3｜是否能压缩掉无关细节？
- 简短回答：abstraction / information bottleneck / MDL

#### R6.4｜能否被有效组合与重用？
- 简短回答：compositionality / modularity

#### R6.5｜变换后，表示应当保持什么、相应改变什么？
- 简短回答：invariance / equivariance

#### R6.6｜表征是否让求解更容易？
- 简短回答：computational suitability / factorization

- **R6.6a｜坐标改变能否简化证明或优化？** → *analytic geometry / reparameterization*
- **R6.6b｜因子分解能否减少全局计算？** → *conditional independence / locality*
- **R6.6c｜坏表示会制造什么困难？** → *spurious coupling / combinatorial explosion*

#### R6.7｜它是否有可解释、可验证的意义？
- 简短回答：interpretability / consistency / grounding

#### R6.8｜环境改变以后仍然有效吗？
- 简短回答：transferability / robustness / adaptation

#### R6.9｜是否存在对所有任务都最好的表征？
- 简短回答：不存在脱离目标与资源的万能表征

---

## II｜Computation：什么是计算，简单规则如何产生复杂过程？
- 简短回答：回答「怎么算」

### C1｜什么叫机械地执行一个过程？
- 简短回答：algorithm / effective procedure

#### C1.1｜计算的最基本要素是什么？
- 简短回答：状态、指令、变换、控制流

- **C1.1a｜什么是一步计算？** → *transition relation / reduction rule*
- **C1.1b｜重复、递归和分支怎样形式化？** → *loop / recursion / conditional*
- **C1.1c｜什么叫计算结束与输出？** → *termination / result*

#### C1.2｜有哪些等价的计算形式模型？
- 简短回答：recursive functions / λ-calculus / Turing machines

- **C1.2a｜函数应用能表达计算吗？** → *Church λ-calculus*
- **C1.2b｜有限控制怎样借助可扩展存储表达一般计算？** → *Turing machine；区别于有限自动机*
- **C1.2c｜这些形式模型与直观的有效计算是什么关系？** → *模型间等价性可证明；Church–Turing thesis 连接直观有效计算与形式模型*

#### C1.3｜算法与程序有什么区别？
- 简短回答：抽象步骤 vs 形式实现

#### C1.4｜什么是确定性、非确定性、随机计算？
- 简短回答：deterministic / nondeterministic / randomized

#### C1.5｜有限精度计算与数学实数计算有什么距离？
- 简短回答：floating point / numerical analysis

### C2｜什么叫合法的推导与形式证明？
- 简短回答：形式规则与元理论

#### C2.1｜怎样保证可推导结论是前提的语义后果？
- 简短回答：soundness：Γ ⊢ φ ⇒ Γ ⊨ φ

#### C2.2｜所有语义后果都能由规则推出吗？
- 简短回答：completeness：Γ ⊨ φ ⇒ Γ ⊢ φ；依赖具体系统

#### C2.3｜什么是不同的证明系统？
- 简短回答：Hilbert / Natural Deduction / Sequent Calculus

#### C2.4｜规则为何可以对证明本身进行计算？
- 简短回答：proof transformations

#### C2.5｜证明存在与找到证明是一个问题吗？
- 简短回答：不是；区分存在性、构造方法与 proof search；自动搜索见 F1

### C3｜证明、程序、类型之间为何有联系？
- 简短回答：proofs as computational objects

#### C3.1｜证明可以被怎样构造？
- 简短回答：introduction / elimination rules

#### C3.2｜证明里哪些步骤是冗余的？
- 简短回答：Prawitz normalization / detours

#### C3.3｜相继式演算中，显式使用中间命题的割规则如何消去？
- 简短回答：Gentzen cut elimination

#### C3.4｜命题为什么能对应类型？
- 简短回答：Curry–Howard

- **C3.4a｜证明为什么对应程序？** → *constructive logic / typed λ-calculus*
- **C3.4b｜化简证明为何对应执行程序？** → *normalization / reduction*

#### C3.5｜怎样将证明检查转化为类型检查？
- 简短回答：proof terms / dependent types / trusted kernel；系统应用见 F1.5

#### C3.6｜函数式编程为什么与逻辑关系密切？
- 简短回答：λ-abstraction / types / functional semantics

### C4｜什么原则上能够计算？
- 简短回答：computability / decidability

#### C4.1｜所有明确定义的问题都有算法吗？
- 简短回答：否；halting problem

#### C4.2｜什么叫可判定与半可判定？
- 简短回答：decider / recognizer；后者对非成员可能不终止

#### C4.3｜为什么有些形式系统不能证明一切算术真命题？
- 简短回答：Gödel incompleteness；一致、有效公理化且足以表达算术的理论存在不可判定命题

#### C4.4｜可证明性限制与不可计算性是什么关系？
- 简短回答：有关联但不等价

#### C4.5｜怎样通过归约证明不可解？
- 简短回答：computability reduction

### C5｜能算的东西为什么可能算不动？
- 简短回答：computational complexity

#### C5.1｜时间和空间消耗怎样度量？
- 简短回答：complexity classes / asymptotics

#### C5.2｜P、NP、NP-hard 分别刻画什么？
- 简短回答：P：多项式时间判定；NP：给定多项式长度的证书后，可在多项式时间内验证「是」的判定问题类；NP-hard：所有 NP 问题可多项式时间归约到它；P 是否等于 NP 未知

#### C5.3｜证明搜索为什么可能指数增长？
- 简短回答：combinatorial search

#### C5.4｜概率图的难度为什么取决于结构？
- 简短回答：treewidth / elimination order

#### C5.5｜平均困难与最坏情况困难有何不同？
- 简短回答：average-case / worst-case

#### C5.6｜允许近似或随机化后能得到什么？
- 简短回答：approximation / randomized algorithms

#### C5.7｜何时受限于数据搬运而不是算术量？
- 简短回答：memory/communication complexity

### C6｜复杂计算有哪些可复用的通用机制？
- 简短回答：组合小步骤、分解与复用；不同求解任务的使用条件见 F1／F3／F4

#### C6.1｜没有直接答案时如何搜索？
- 简短回答：enumeration / graph search

#### C6.2｜怎样丢弃不可能的候选？
- 简短回答：constraints / pruning / propagation

#### C6.3｜怎样把全局问题拆成局部问题？
- 简短回答：decomposition / dynamic programming

#### C6.4｜局部结果怎样传播为全局结论？
- 简短回答：message passing / variable elimination

#### C6.5｜连续参数怎样逐步求优？
- 简短回答：gradient / Newton / convex optimization

#### C6.6｜搜索预算有限时如何选择？
- 简短回答：heuristics / bounded rationality

#### C6.7｜计算结果怎样被检查？
- 简短回答：invariants / tests / proof checking；区分测试证据与形式保证

### C7｜基础计算原语与高层计算策略有什么区别？
- 简短回答：规则可给定，策略可学习

#### C7.1｜计算原语由什么层次规定？
- 简短回答：形式模型 / 指令集 / 编程语言 / 算子库

#### C7.2｜复杂推理的顺序是否必须人工写死？
- 简短回答：否；可搜索、可学习

#### C7.3｜算法能否编译、优化和复用？
- 简短回答：program transformation / compilation

#### C7.4｜同一任务是否存在多种计算路径？
- 简短回答：algorithm selection / meta-reasoning

#### C7.5｜学习内部计算策略是否等于突破可计算性？
- 简短回答：否；可改变实现的函数、求解策略与资源分配，仍受相同计算模型的边界约束

---

## III｜Representation × Computation：给定表征与计算，一个系统能获得什么能力？
- 简短回答：分成两种问题情境，不分成互斥技术阵营

---

### A｜Formal World：在给定或明确建模的世界中，系统能推导、预测、优化、决策到什么程度？
- 简短回答：形式知识、规则、模型与目标作为研究条件

#### F1｜从已有前提怎样推出必然结论？（Deduction）
- 简短回答：演绎/证明/自动推理

##### F1.1｜自动证明器究竟要保证什么？
- 简短回答：在 C2 的可靠性与完备性基础上，明确输入、查询与输出的含义

- **F1.1a｜当前任务是在求后承、有效性还是可满足性？** → *entailment / validity / satisfiability*
- **F1.1b｜怎样将后承查询转成反驳任务？** → *Γ ⊨ φ ⇔ Γ ∪ {¬φ} 不可满足；经典逻辑*
- **F1.1c｜证明器怎样为其结论提供可检查的依据？** → *proof object / proof certificate；可靠性基础见 C2.1*
- **F1.1d｜超时或搜索失败能否说明结论为假？** → *通常不能；区分反例、穷尽搜索与资源耗尽*

##### F1.2｜怎样把证明演算组织为机械搜索？
- 简短回答：proof calculi / search rules；演算基础见 C2.3

- **F1.2a｜公理模式与少量规则怎样形成证明搜索任务？** → *Hilbert systems / axiom instantiation*
- **F1.2b｜怎样用引入与消去规则指导证明构造？** → *natural deduction / goal-directed tactics*
- **F1.2c｜怎样将目标拆成相继式子目标？** → *sequent calculus / backward proof search*
- **F1.2d｜如何用子句及归结规则推导矛盾？** → *resolution*
- **F1.2e｜怎样为含变量的项求共同实例？** → *unification / substitution；区别于单向匹配*

##### F1.3｜证明怎样从「存在」变成「被找到」？
- 简短回答：proof search

- **F1.3a｜前向推理和后向推理何时合适？** → *forward/backward chaining*
- **F1.3b｜如何控制证明搜索的分支？** → *heuristics / tactics / pruning*
- **F1.3c｜失败的证明尝试能提供什么信息？** → *nogoods / learned clauses*
- **F1.3d｜机器何时需要构造中间引理？** → *lemma generation / proof planning*

##### F1.4｜证明结构怎样影响搜索、存储与检查？
- 简短回答：proof representation / proof complexity；正规化基础见 C3

- **F1.4a｜消除证明迂回能为搜索提供什么约束？** → *normal forms / subformula property；依赖具体演算，见 C3.2*
- **F1.4b｜消去中间引理是否总能缩短证明？** → *否；cut elimination 可能使证明显著膨胀，见 C3.3*
- **F1.4c｜共享子证明与重用引理怎样节省表示？** → *proof DAG / lemma reuse / proof compression*
- **F1.4d｜证明结构能揭示哪些复杂性？** → *proof length / proof complexity*

##### F1.5｜怎样构造可信的自动推理系统？
- 简短回答：ATP / SAT / SMT / proof assistants

- **F1.5a｜布尔可满足性怎样自动判定？** → *SAT / DPLL / CDCL*
- **F1.5b｜包含算术等理论约束时怎么办？** → *SMT / theory solvers*
- **F1.5c｜如何用类型系统表达定理？** → *dependent type theory*
- **F1.5d｜候选证明不可靠时怎样验证？** → *Lean / Coq / trusted kernel*
- **F1.5e｜自动证明与程序验证如何结合？** → *formal verification*

##### F1.6｜演绎推理有什么表达与计算边界？
- 简短回答：decidability / expressiveness / complexity

- **F1.6a｜一阶逻辑和命题逻辑的求解界限有何不同？** → *first-order validity vs SAT*
- **F1.6b｜怎样在表达力、完备性与求解成本间取舍？** → *restricted fragments / complete procedures / incomplete heuristics*
- **F1.6c｜相对给定证书的检查高效，是否意味着证书一定短？** → *否；verification vs search / proof length*

##### F1.7｜证明正确是否意味着关于现实的判断正确？
- 简短回答：不是；须验证前提、规格和接地

#### F2｜不完整、可撤销的知识怎样推理？
- 简短回答：Nonmonotonic / Commonsense Reasoning

##### F2.1｜未知是否应被当作假？
- 简短回答：open-world vs closed-world assumptions；这是知识库语义约定，不等同于 Formal World / Open World 的问题情境划分（第 2 节 A/B）

##### F2.2｜在通常情况下成立的规则怎样表达？
- 简短回答：default logic / defeasible reasoning

##### F2.3｜新事实与旧结论冲突时，怎样撤销结论或修正信念？
- 简短回答：nonmonotonic inference / belief revision；区分推理关系与知识库修正

##### F2.4｜多条规则冲突时如何处理优先级？
- 简短回答：priority rules / argumentation

##### F2.5｜行动后哪些常识默认保持？
- 简短回答：frame problem / inertia

##### F2.6｜知识不一致时还能推理吗？
- 简短回答：paraconsistent / inconsistency-tolerant approaches

##### F2.7｜「不知道是否成立」与「已知不成立」有什么区别？
- 简短回答：前者未决，后者已有否定知识；epistemic logic / ignorance vs known falsity

#### F3｜包含概率的不确定模型怎样推理？（Probabilistic Reasoning）
- 简短回答：概率本身不意味着开放世界

##### F3.1｜如何表示不确定信念？
- 简短回答：probability / conditional distribution / belief

- **F3.1a｜概率的形式规则如何建立？** → *Kolmogorov axioms*
- **F3.1b｜概率与频率、主观信念有什么联系？** → *interpretations of probability*
- **F3.1c｜什么是假设、证据、先验与似然？** → *Bayesian formulation*

##### F3.2｜高维联合分布怎样避免直接列出？
- 简短回答：graphical factorization

- **F3.2a｜有向依赖怎样表达？** → *Bayesian network / DAG*
- **F3.2b｜无向相容结构怎样表达？** → *Markov random field*
- **F3.2c｜一般因子分解怎样表达？** → *factor graph*
- **F3.2d｜怎样利用条件独立？** → *d-separation / Markov properties*

##### F3.3｜给定新证据，信念怎样更新？
- 简短回答：Bayes / conditioning / marginalization

- **F3.3a｜观察变量后怎样求剩余变量的分布？** → *posterior inference*
- **F3.3b｜怎样比较竞争假设？** → *posterior odds / Bayes factor*
- **F3.3c｜估计隐状态与学习模型参数有什么联系？** → *latent-state inference / parameter estimation；Bayesian 方法可联合推断*

##### F3.4｜局部计算如何产生全局答案？
- 简短回答：message passing / elimination

- **F3.4a｜边缘化怎样分解为局部求和与乘法？** → *sum-product / distributive law*
- **F3.4b｜怎样寻找全部未观测变量的联合最可能赋值？** → *MPE / joint MAP / max-product；树上可精确求解*
- **F3.4c｜树形图为何容易精确推理？** → *belief propagation on trees*
- **F3.4d｜怎样通过变量消元组织计算？** → *variable elimination*
- **F3.4e｜如何把复杂图变成团树？** → *junction tree*
- **F3.4f｜只对部分变量求最可能赋值时，为什么还要边缘化？** → *marginal MAP；其余变量求和，sum 与 max 通常不可交换*

##### F3.5｜时间序列怎样进行隐状态估计？
- 简短回答：sequential Bayesian inference

- **F3.5a｜当前观测怎样更新状态？** → *filtering*
- **F3.5b｜未来数据怎样修正过去判断？** → *smoothing*
- **F3.5c｜离散隐状态怎样建模？** → *HMM / forward-backward / Viterbi*
- **F3.5d｜线性高斯系统怎样精确估计？** → *Kalman filter / RTS smoothing*
- **F3.5e｜非线性非高斯怎么办？** → *particle filter / approximation*

##### F3.6｜精确推断为什么可能代价极高？
- 简短回答：treewidth / induced cliques / state size

- **F3.6a｜图有环是否必然无法计算？** → *否；关键是依赖结构和消元次序*
- **F3.6b｜局部求和乘法为何造成指数成本？** → *large intermediate factors*
- **F3.6c｜离散图模型的树宽如何影响精确消元成本？** → *固定单变量状态数时，通用消元成本随诱导宽度指数增长；最优宽度对应树宽*

##### F3.7｜精确推断代价过高时怎么办？
- 简短回答：approximate inference

- **F3.7a｜如何通过采样近似分布？** → *MCMC / importance sampling*
- **F3.7b｜如何通过优化近似分布？** → *variational inference / ELBO*
- **F3.7c｜环图能否迭代传递消息？** → *loopy belief propagation；一般不保证收敛或精确*
- **F3.7d｜重复推断能否学习成直接映射？** → *amortized inference（详见 O4）*

##### F3.8｜已知概率模型的结论何时可信？
- 简短回答：model adequacy / calibration / inference error

#### F4｜怎样根据问题结构选择搜索、约束与优化方法？
- 简短回答：Search / Constraint / Optimization；通用机制见 C6

##### F4.1｜搜索空间怎样表示？
- 简短回答：state graph / search tree / feasible region

##### F4.2｜不同搜索方法何时完整、何时最优？
- 简短回答：BFS / DFS / uniform-cost search；分支、深度与代价条件

##### F4.3｜怎样用启发信息加速搜索并保留最优性？
- 简短回答：A-star / admissibility / consistency / reopening

##### F4.4｜怎样用约束而非枚举缩小空间？
- 简短回答：CSP / constraint propagation / SAT

##### F4.5｜什么结构使局部结果可以复用？
- 简短回答：dynamic programming / memoization / optimal substructure

##### F4.6｜连续优化何时有全局保证，何时只能得到局部结论？
- 简短回答：convexity / smoothness / gradient / Newton / stochastic optimization

##### F4.7｜非凸或离散—连续混合怎么办？
- 简短回答：relaxation / mixed-integer / sampling

##### F4.8｜什么时候接受近似解？
- 简短回答：approximation algorithms / anytime algorithms

##### F4.9｜找到候选后怎样检查有效性？
- 简短回答：constraints / certificates / proof checker

##### F4.10｜有了大量求解经验能否改善搜索？
- 简短回答：learned heuristics；系统展开见 O3/O4

#### F5｜演绎之外的推理，是否也能够严格形式化？
- 简短回答：非演绎推理的数学化

##### F5.1｜归纳能否有形式规则？
- 简短回答：hypothesis class / prior / inductive bias

##### F5.2｜从现象寻找解释能否形式化？
- 简短回答：abductive logic / model-based diagnosis / Bayesian hypothesis comparison

##### F5.3｜类比能否被写成结构映射问题？
- 简短回答：structure mapping / graph matching

##### F5.4｜因果能否超越相关性的形式查询？
- 简短回答：SCM / do-calculus / counterfactuals

##### F5.5｜新证据下可撤销的推断能否形式化？
- 简短回答：default / defeasible logic；规则与修正机制见 F2

##### F5.6｜为什么它们不等于「开放世界专属方法」？
- 简短回答：形式理论可以研究非演绎推断；真正难点是前提与真实环境的对应

##### F5.7｜何时需要一种以上的推理方式？
- 简短回答：演绎验证、归纳提规律、溯因提出解释、类比提出候选

#### F6｜给定状态、行动和目标，怎样决策与规划？
- 简短回答：Decision Theory / Planning / Control

##### F6.1｜什么叫行动结果「更好」？
- 简短回答：objective / utility / reward / cost

##### F6.2｜行动与状态怎样形成形式系统？
- 简短回答：transition system / state-space model

##### F6.3｜固定动作序列怎样达到目标？
- 简短回答：classical planning / STRIPS / PDDL

##### F6.4｜环境含随机性时怎样选择策略？
- 简短回答：MDP / Bellman optimality

##### F6.5｜只能看到部分状态时怎样决策？
- 简短回答：POMDP / belief-state planning

##### F6.6｜连续状态、输入与动力学怎样控制？
- 简短回答：optimal control / MPC

##### F6.7｜有限时域与无限时域有什么不同？
- 简短回答：finite horizon / discounted return / average reward

##### F6.8｜怎样在风险与收益之间权衡？
- 简短回答：risk-sensitive / constrained optimization

##### F6.9｜多个决策者的策略如何互相影响？
- 简短回答：game theory / stochastic games

##### F6.10｜求出计划与现实执行是一回事吗？
- 简短回答：不是；执行与反馈的困难详见 O6/O7

#### F7｜不同的推理与求解方法，能够在什么层面获得统一？
- 简短回答：代数结构、概率信念、因果查询、证明—程序与资源理性：统一各自适用的层面

##### F7.1｜「组合」与「聚合」能否形成统一代数？
- 简短回答：semiring

- **F7.1a｜候选如何合并？** → *⊕*
- **F7.1b｜局部约束如何组合？** → *⊗*
- **F7.1c｜逻辑满足性怎样落到两个运算？** → *(∨, ∧)*
- **F7.1d｜概率边缘化怎样落到两个运算？** → *(+, ×)*
- **F7.1e｜联合最可能赋值怎样落到两个运算？** → *(max, ×)；取对数后为 (max, +)；部分变量的 marginal MAP 另见 F3.4f*
- **F7.1f｜最短路径怎样落到两个运算？** → *(min, +)*
- **F7.1g｜同一代数模式为何不意味着同一复杂度？** → *dependency structure / treewidth*

##### F7.2｜概率能否统一不同的不确定推理？
- 简短回答：Bayes / posterior predictive / hierarchical models

##### F7.3｜因果能否统一观察、干预和反事实？
- 简短回答：SCM / causal hierarchy

##### F7.4｜证明与程序的对应统一了哪些结构？
- 简短回答：构造、类型与归约；对应依赖具体系统，基础见 C3

##### F7.5｜有限算力下应当推理到什么时候？
- 简短回答：metareasoning / value of computation

- **F7.5a｜一次额外搜索是否值得？** → *expected improvement vs cost*
- **F7.5b｜何时停止推理并行动？** → *bounded rationality / anytime decision*
- **F7.5c｜计算策略本身可以成为决策对象吗？** → *metareasoning*

##### F7.6｜统一计算模式与统一认知理论有什么区别？
- 简短回答：局部代数统一不等于统一全部智能

#### F8｜在明确的问题设定下，系统仍能通过经验改进什么？
- 简短回答：参数、模型、策略与求解过程；模型获取问题进一步见 O2—O4

##### F8.1｜给定变量时能否从样本估计参数？
- 简短回答：MLE / MAP / Bayesian estimation

##### F8.2｜给定假设空间能否归纳规律？
- 简短回答：formal statistical learning

##### F8.3｜规则完全明确的棋类能否学习策略？
- 简短回答：self-play / search-guided learning

##### F8.4｜MDP 的状态、行动等形式要素已规定，但转移或奖励未知时能否学习？
- 简短回答：model-free / model-based RL；给定问题形式不等于已知全部环境规律

##### F8.5｜已知概率图结构能否学习局部参数？
- 简短回答：MLE / Bayesian estimation；含隐变量或缺失数据时可用 EM 等方法

##### F8.6｜已知证明规则能否学习搜索方向？
- 简短回答：learned proof guidance

##### F8.7｜为什么「形式世界＝无学习」是错的？
- 简短回答：明确规定问题框架不等于知道所有参数和规律；形式化与学习是不同维度

#### F9｜形式求解如此成功，为什么仍不足以保证现实智能？
- 简短回答：计算扩展性、现实接地、模型适用性三类挑战；前者也发生在形式环境内部

##### F9.1｜模型已经给定，为什么仍然可能难以求解？
- 简短回答：计算复杂性、启发式设计与可扩展计算

- **F9.1a｜证明搜索为什么可能长到不可承受？** → *search branching / complexity*
- **F9.1b｜概率图为什么会产生巨大中间因子？** → *treewidth*
- **F9.1c｜人类手工启发式怎样受扩展性限制？** → *domain-specific bottleneck*
- **F9.1d｜《苦涩的教训》真正指出什么？** → *可扩展通用搜索与学习，长期常胜过过度依赖人工领域知识的办法；并非专指接地*
- **F9.1e｜这意味着符号推理无效吗？** → *否；可扩展的搜索、学习与形式验证可以共同使用*

##### F9.2｜形式推导正确，为什么仍不意味着认识了真实世界？
- 简短回答：形式语义与现实指称之间仍有接地问题

- **F9.2a｜逻辑符号是否天然对应真实对象？** → *不；须感知/解释/操作联系*
- **F9.2b｜语义在形式模型中成立，现实指称也成立吗？** → *不一定；须在真实任务中核查对应*
- **F9.2c｜感知与语言如何建立对象一致性？** → *perceptual / multimodal grounding*

##### F9.3｜即使建立了初步的现实对应，为什么仍不能依赖永久固定的模型？
- 简短回答：新对象、新机制、环境变化和模型失配；接地与模型有效性都需要持续核查

- **F9.3a｜新概念出现时现有词表够用吗？** → *open vocabulary / concept formation*
- **F9.3b｜环境变化时固定转移模型还可靠吗？** → *distribution shift / nonstationarity*
- **F9.3c｜错误假设应如何被发现与修正？** → *model criticism / belief revision / evidence checking*
- **F9.3d｜规则是否一定由人手写？** → *否；rule/structure/program learning*

##### F9.4｜三类挑战分别要求补充哪些能力？
- 简短回答：计算扩展推动求解策略学习；接地与失配推动模型校验和修正；自主行动还需协调信息与目标

- **F9.4a｜当原有表征与模型不足时，如何获得和修正知识？** → *O1 感知接地、O2 知识发现、O3 表征/模型学习与 O4 求解经验的巩固相互支持，不要求固定先后*
- **F9.4b｜如果能够选择观测与行动，又会出现什么新问题？** → *O5 信息获取 ↔ O6 行动选择 ↔ O7 反馈学习；数据依赖策略，目标可由外部给定或通过交互获取*

---

### B｜Open World：当现有模型可能不足以适应现实新情况时，系统怎样认识、适应并作用于世界？
- 简短回答：接地、模型获取与修正；若可行动，还需主动交互与反馈闭环

#### O1｜世界怎样进入内部计算系统？（Perception & Grounding）
- 简短回答：感知、定位、状态估计、多模态接地

##### O1.1｜真实世界给出的究竟是什么？
- 简短回答：observations rather than ground-truth symbols

- **O1.1a｜不同传感器如何产生观测？** → *image / audio / lidar / tactile / language*
- **O1.1b｜观测误差与物体属性如何区分？** → *noise / measurement model*
- **O1.1c｜怎样处理采样频率、延迟和时间对齐？** → *temporal alignment / synchronization*
- **O1.1d｜被观测到是否等于对象真实存在？** → *false positives / ambiguity*

##### O1.2｜连续信号如何形成可操作的对象和关系？
- 简短回答：perceptual representation

- **O1.2a｜哪些局部特征应被组合？** → *feature extraction / grouping*
- **O1.2b｜怎样形成对象、类别与实例？** → *detection / segmentation / tracking*
- **O1.2c｜对象之间的空间关系怎样估计？** → *3D geometry / relations*
- **O1.2d｜事件与行为如何从时间序列中识别？** → *temporal perception / event detection*

##### O1.3｜只看到一部分世界时怎样估计状态？
- 简短回答：state estimation / Bayesian filtering

- **O1.3a｜如何融合预测与新测量？** → *filtering / sensor fusion*
- **O1.3b｜怎样从相对观测恢复位置与地图？** → *SLAM / factor-graph optimization*
- **O1.3c｜动态对象怎样从静态环境中区分？** → *dynamic state estimation*
- **O1.3d｜尚未观测的区域与状态不确定性怎样表达？** → *belief state / occupancy uncertainty*

##### O1.4｜内部符号为什么指向现实对象？
- 简短回答：symbol grounding

- **O1.4a｜语言里的「树」怎样对应图像中的树？** → *visual-language grounding*
- **O1.4b｜一个新名字怎样绑定一个新实体？** → *reference resolution / entity linking*
- **O1.4c｜动作的含义怎样由实际后果确立？** → *action grounding / affordance*
- **O1.4d｜对象持久性怎样跨视角与时间保持？** → *object permanence / tracking*

##### O1.5｜不同表示之间如何对齐？
- 简短回答：multimodal alignment / geometry / semantics

- **O1.5a｜几何坐标与语义 token 怎样一致？** → *cross-modal correspondence*
- **O1.5b｜局部观测与全局地图怎样一致？** → *registration / SLAM*
- **O1.5c｜语言命令怎样落实到物理约束？** → *language-to-action grounding*

##### O1.6｜如何检测感知与接地失效？
- 简短回答：uncertainty / calibration / external feedback

- **O1.6a｜高置信度但错误怎么办？** → *calibration / OOD detection*
- **O1.6b｜训练过的概念为何在新场景中漂移？** → *dataset shift / semantic shift*
- **O1.6c｜怎样通过行动补充证据？** → *active perception（详见 O5）*

#### O2｜未知知识和规律怎样从经验中产生？（Knowledge Discovery & Reasoning）
- 简短回答：归纳、溯因、类比、因果与科学发现；形式化入口见 F5

##### O2.1｜Induction：有限经验凭什么支持一般规律？
- 简短回答：不是必然演绎，而是有条件的泛化

- **O2.1.1｜归纳为何需要正当性？** → *Hume's problem*
  - **O2.1.1a｜过去重复发生为什么不保证未来必然发生？** → *problem of induction*
  - **O2.1.1b｜没有归纳偏置，能否获得普遍更好的泛化？** → *inductive bias / no-free-lunch；依赖任务集合与平均方式等前提*
  - **O2.1.1c｜平稳性、交换性、光滑性假设从哪来？** → *domain assumptions*
- **O2.1.2｜归纳怎样变成数学问题？** → *statistical / Bayesian / algorithmic induction*
  - **O2.1.2a｜如何从样本估计分布参数？** → *MLE / method of moments*
  - **O2.1.2b｜如何利用先验修正假设可信度？** → *Bayesian posterior / MAP*
  - **O2.1.2c｜能否偏好较短的规律描述？** → *Solomonoff / Kolmogorov / MDL；区分不可计算的理想对象与可实施准则*
  - **O2.1.2d｜训练样本如何定义经验分布并形成学习目标？** → *empirical measure / sample frequencies / empirical risk*
- **O2.1.3｜在什么假设下，有限样本能够支持泛化？** → *generalization theory；明确采样条件、假设类与学习过程*
  - **O2.1.3a｜样本量与假设类容量如何影响误差？** → *PAC / VC dimension*
  - **O2.1.3b｜稳定性为何能支持泛化分析？** → *algorithmic stability*
  - **O2.1.3c｜偏差与方差如何权衡？** → *bias–variance*
  - **O2.1.3d｜分布变化后旧保证为什么可能失效？** → *distribution shift*
- **O2.1.4｜很多假设都能拟合数据时选择哪个？** → *model selection*
  - **O2.1.4a｜最大拟合度是否足够？** → *overfitting / regularization*
  - **O2.1.4b｜复杂度惩罚有何根据？** → *Occam / MDL / AIC / BIC*
  - **O2.1.4c｜不同模型怎样比较预测表现？** → *cross-validation / predictive checks*
  - **O2.1.4d｜何时应保留多个假设？** → *Bayesian model averaging / uncertainty*
- **O2.1.5｜能否发现结构而不只是参数？** → *structure induction*
  - **O2.1.5a｜变量关系如何形成图？** → *graph structure learning*
  - **O2.1.5b｜语言规则如何从例子归纳？** → *grammar induction*
  - **O2.1.5c｜程序和逻辑规则可以从例子发现吗？** → *program synthesis / inductive logic programming*
  - **O2.1.5d｜潜在机制能从观测中提出吗？** → *latent structure / scientific discovery*
- **O2.1.6｜怎样区分统计规律与科学解释？** → *testability / falsification / causality*
  - **O2.1.6a｜相关性为什么不等于机制？** → *confounding / identifiability*
  - **O2.1.6b｜发现反例后怎样修正规律？** → *model criticism / revision*
  - **O2.1.6c｜不同环境中的稳定规律为何更可信？** → *invariance / transportability*

##### O2.2｜Abduction：观察到结果，如何提出有解释力的假设？
- 简短回答：best explanation ≠ deductive certainty

- **O2.2.1｜到底要解释什么？** → *explanandum / observation / anomalies*
  - **O2.2.1a｜什么属于背景知识，什么是待解释现象？** → *problem framing*
  - **O2.2.1b｜异常是误差还是新机制？** → *anomaly diagnosis*
- **O2.2.2｜候选假设从哪里来？** → *hypothesis generation*
  - **O2.2.2a｜如何在已有模型中寻找隐藏原因？** → *diagnostic reasoning*
  - **O2.2.2b｜模型库不够时怎样创造新假设？** → *hypothesis invention / program search*
- **O2.2.3｜什么样的解释更值得相信？** → *likelihood / simplicity / coverage*
  - **O2.2.3a｜能解释全部观测还是只解释一部分？** → *explanatory coverage*
  - **O2.2.3b｜简单解释为何可能更优？** → *Occam / MDL*
  - **O2.2.3c｜怎样融入先验与不确定性？** → *Bayesian abduction*
- **O2.2.4｜巨大的解释空间怎样搜索？** → *abductive search / model-based diagnosis*
- **O2.2.5｜多个解释并存时怎么办？** → *posterior distribution / model averaging*
- **O2.2.6｜解释是否一定意味着因果？** → *否；区分逻辑解释、统计解释与因果解释*
- **O2.2.7｜怎样判定解释是否可识别？** → *equivalence / identifiability / experiments*

##### O2.3｜Analogy：如何把已知领域的结构迁移到陌生领域？
- 简短回答：结构映射与可检验的迁移

- **O2.3.1｜源领域与目标领域怎样表示？** → *structured representations*
- **O2.3.2｜什么元素可以建立对应？** → *correspondence / mapping*
- **O2.3.3｜何时应重视关系结构，而非表面相似？** → *structure mapping；对应关系须与任务相关*
- **O2.3.4｜不同例子中能抽象出共同图式吗？** → *schema abstraction*
- **O2.3.5｜源领域的哪些结论能够迁移？** → *analogical inference / case-based reasoning*
- **O2.3.6｜迁移的结论怎样适配新领域？** → *adaptation / refinement*
- **O2.3.7｜如何识别错误的类比？** → *causal mismatch / surface bias / negative transfer*

##### O2.4｜Causality：相关、干预和反事实怎样区分？
- 简短回答：causal inference / discovery

- **O2.4.1｜相关性为何不能说明因果？** → *confounding / selection bias*
- **O2.4.2｜因果关系怎样表示？** → *SCM / causal DAG / structural equations*
- **O2.4.3｜主动干预如何改变问题？** → *do-operator / intervention*
  - **O2.4.3a｜P(Y|X) 与 P(Y|do(X)) 有何区别？** → *observation vs intervention*
  - **O2.4.3b｜已知图结构时效应何时可识别？** → *backdoor / frontdoor / do-calculus*
- **O2.4.4｜未发生的另一种结果怎样定义？** → *counterfactual SCM*
  - **O2.4.4a｜如何比较「做了」与「没做」？** → *potential outcomes / counterfactuals*
  - **O2.4.4b｜个体反事实为何常不可直接验证？** → *fundamental problem of causal inference*
- **O2.4.5｜因果图怎样从经验发现？** → *causal discovery / invariance / experiments*
- **O2.4.6｜为什么某些机制可以跨环境迁移？** → *causal invariance / transportability*
- **O2.4.7｜行动如何帮助区分竞争的因果模型？** → *active causal learning（详见 O5）*

##### O2.5｜科学发现怎样把这些推理组合？
- 简短回答：hypothesis → prediction → experiment → revision

- **O2.5a｜观测异常怎样引出候选解释？** → *abduction*
- **O2.5b｜假设怎样推出可检验预测？** → *deduction*
- **O2.5c｜多次结果怎样形成一般规律？** → *induction*
- **O2.5d｜旧理论怎样启发新理论？** → *analogy*
- **O2.5e｜什么实验最能区分竞争理论？** → *experimental design*
- **O2.5f｜证据不足时何时承认不知道？** → *uncertainty / epistemic humility*

##### O2.6｜不同推理方式怎样相互约束？
- 简短回答：演绎验证条件推论，非演绎生成候选，实验检验现实

- **O2.6a｜推理得出的结论与学到的模型是什么关系？** → *推理生成或评价结论；学习更新可复用模型，二者可以交叠*
- **O2.6b｜形式上有效的论证能否纠正错误的前提？** → *不能独自保证；须新证据*
- **O2.6c｜为什么「归纳属于开放、演绎属于形式」不能当作严格划分？** → *二者都可形式化，且都服务现实认识*

#### O3｜经验如何形成、修正并组织系统的知识、内部表征与世界模型？（Representation & Model Learning）
- 简短回答：学到了什么：参数、表示、结构、规律和模型

##### O3.1｜哪些信息应该被编码进内部表示？
- 简短回答：task-relevant information / information bottleneck

- **O3.1a｜应当保留哪些可预测的因子？** → *sufficient / predictive representations*
- **O3.1b｜哪些噪声与偶然相关应当被抛弃？** → *regularization / invariance*

##### O3.2｜可以学习什么形式的表示？
- 简短回答：embedding / object / graph / latent distribution

- **O3.2a｜向量何以表示语义和相似性？** → *distributed representation*
- **O3.2b｜对象中心的结构是否更可组合？** → *object-centric representations*
- **O3.2c｜几何约束怎样进入潜在表示？** → *equivariance / 3D representations*
- **O3.2d｜离散概念和连续潜变量如何结合？** → *discrete latent / neuro-symbolic*

##### O3.3｜学习信号从哪里来？
- 简短回答：supervision / self-supervision / feedback

- **O3.3a｜人工标签是否是必要条件？** → *不是；self-supervised learning*
- **O3.3b｜从上下文预测缺失信息能学到什么？** → *masked / autoregressive modeling*
- **O3.3c｜不同视角的一致性如何形成表征？** → *contrastive / multi-view learning*
- **O3.3d｜行动后果能否监督表示学习？** → *predictive learning / control signals*
- **O3.3e｜无标签数据是否自动提供真实语义？** → *不；仍需验证与接地*
- **O3.3f｜学习信号怎样转化为可以优化的目标？** → *loss / empirical risk / regularization；泛化依据见 O2.1.3*
- **O3.3g｜损失怎样改变网络参数与内部表示？** → *backpropagation / autodiff 计算梯度；SGD 等优化器更新参数；条件见 F4.6*

##### O3.4｜哪些变化应当忽略，哪些应当保留？
- 简短回答：invariance / equivariance

- **O3.4a｜物体旋转后身份应否保持？** → *invariance*
- **O3.4b｜几何坐标变化后预测应怎样变化？** → *equivariance*
- **O3.4c｜任务不同会改变需要的不变性吗？** → *task-dependent invariance*

##### O3.5｜潜变量能否对应独立因素或可解释结构？
- 简短回答：disentanglement / identifiability

- **O3.5a｜统计独立是否意味着因果独立？** → *不一定*
- **O3.5b｜何种先验支持可辨识的表征？** → *inductive bias / interventions*

##### O3.6｜低层特征如何长出组合概念？
- 简短回答：hierarchy / compositionality

- **O3.6a｜局部模式如何形成全局对象？** → *hierarchical features*
- **O3.6b｜概念能否像程序一样组合？** → *modular / compositional learning*
- **O3.6c｜模型能否重用学过的子技能？** → *skill abstraction*

##### O3.7｜语言、视觉、动作的内部表示怎样相互接地？
- 简短回答：multimodal / embodied representations

##### O3.8｜如何评价学习到的表征？
- 简短回答：sufficiency / probing / OOD / downstream performance

- **O3.8a｜线性探针是否证明模型真正理解了概念？** → *只能提供局部证据*
- **O3.8b｜环境变化时表示是否稳健？** → *distribution shift tests*
- **O3.8c｜是否仍适合推理和规划？** → *reasoning/planning usefulness*

##### O3.9｜结构本身能否从经验中改变？
- 简短回答：structure learning

- **O3.9a｜图连接能否学习？** → *graph/structure induction*
- **O3.9b｜规则与程序能否学习？** → *rule induction / program synthesis*
- **O3.9c｜对象类别数量是否一定固定？** → *open-world concept discovery*

##### O3.10｜怎样学习能够支持预测的世界模型及其生成机制？
- 简短回答：状态与动力学学习 / generative modeling；生成器不一定是世界模型

- **O3.10a｜什么潜在状态足以总结历史？** → *latent state / recurrent state-space model*
- **O3.10b｜行动如何改变未来状态？** → *learned transition dynamics*
- **O3.10c｜未来有多个可能结果时怎么办？** → *stochastic generative modeling*
- **O3.10d｜怎样学习观测分布并生成近似样本？** → *VAE / GAN / autoregressive / diffusion / flow；这些是分布建模与生成方法，不自动保证动态或因果有效*
- **O3.10e｜怎样让世界模型支持长远预测？** → *rollout / latent dynamics*
- **O3.10f｜世界模型为什么会产生误差累积？** → *model bias / compounding error*
- **O3.10g｜怎样通过真实反馈重新校准？** → *system identification / adaptation*

#### O4｜系统如何从求解经验中改进计算，并积累可复用的知识与能力？（Learning Computation）
- 简短回答：学会怎样更有效地求解，并把可靠结果巩固为长期能力；也适用于形式环境

##### O4.1｜究竟有哪些「计算」可以通过经验改变？
- 简短回答：区分计算原语、参数、路由、策略与结构

- **O4.1.1｜固定的计算原语是什么？** → *arithmetic / logic / tensor operations / function call*
- **O4.1.2｜运算的系数怎样学习？** → *parameter learning / gradient descent*
- **O4.1.3｜输入相关的信息路由怎样学习？** → *attention / gating / routing*
  - **O4.1.3a｜Transformer 学习的是注意力公式本身吗？** → *通常不是；学习参数与输入依赖路由*
  - **O4.1.3b｜模型能否按输入选择不同模块？** → *conditional computation / MoE*
- **O4.1.4｜搜索顺序怎样从经验改进？** → *learned heuristic / learned policy*
- **O4.1.5｜规则和程序怎样从样例产生？** → *inductive program synthesis / program induction*
- **O4.1.6｜模型能否学会选择计算深度？** → *adaptive computation / early exit / test-time compute*
- **O4.1.7｜学习计算是否消除了可计算性与复杂性边界？** → *否；可改善特定任务分布的求解效率，通常不提供任意实例上的保证*

##### O4.2｜一次推理怎样形成持久知识？（Reasoning–Learning Bridge）
- 简短回答：生成—检验—抽象—巩固—再检验

- **O4.2.1｜推理产生了什么可被保存的结果？** → *candidate conclusion / proof / explanation / plan*
- **O4.2.2｜哪些候选结论值得相信？** → *proof checking / external tests / uncertainty*
- **O4.2.3｜结果中可复用的结构是什么？** → *schema / rule / skill / abstraction*
- **O4.2.4｜应该写入系统哪里？** → *parameter / rule / memory / policy*
- **O4.2.5｜旧知识与新知识冲突怎么办？** → *revision / conflict resolution*
- **O4.2.6｜持久化后是否真的提高未来能力？** → *generalization / retention / evaluation*
- **O4.2.7｜哪些推理并不需要被持久化？** → *ephemeral computation / context-dependent inference*
- **O4.2.8｜所有学习都必须先经过显式推理吗？** → *否；直接损失优化与显式推理驱动学习可以并存*

##### O4.3｜不同推理方式能怎样转化为学习？
- 简短回答：对应关系而非普遍等价

- **O4.3a｜演绎中的证明结构怎样成为规则？** → *explanation-based learning*
- **O4.3b｜归纳中的一般假设怎样形成模型？** → *inductive learning / generalization*
- **O4.3c｜溯因解释怎样成为诊断知识？** → *abductive learning / hypothesis revision*
- **O4.3d｜类比映射怎样成为迁移图式？** → *analogical learning / schema formation*
- **O4.3e｜概率更新怎样长期改变信念与参数？** → *Bayesian learning / estimation*
- **O4.3f｜怎样从因果查询走向模型修正与可行动知识？** → *证据与干预 → causal discovery / parameter update / intervention learning*
- **O4.3g｜规则例外怎样改变知识体系？** → *belief revision / default rule learning*

##### O4.4｜Slow Reasoning 能否转化为 Fast Inference？
- 简短回答：amortized inference / distillation

- **O4.4.1｜每次都运行复杂求解为什么昂贵？** → *per-instance search / inference cost*
- **O4.4.2｜能否收集求解器的输入—输出例子？** → *teacher generation / synthetic data*
- **O4.4.3｜能否训练一个快速近似映射？** → *fθ(x) ≈ Solve(x)*
- **O4.4.4｜怎样把搜索策略而非仅最终答案教给学生网络？** → *policy/value distillation*
- **O4.4.5｜什么时候仍应使用慢推理？** → *uncertain cases / novel problems / fallback search；须有可靠的分流与检查机制*
- **O4.4.6｜快思考与慢思考是符号/神经的严格二分吗？** → *不是；System 1/2 是启发性的认知类比*
- **O4.4.7｜快速近似可能在哪些输入上失败？** → *distribution shift / loss of guarantees*

##### O4.5｜可靠验证能否反过来驱动学习？
- 简短回答：Generator × Verifier

- **O4.5.1｜哪些机制能提供不同强度的检验信号？** → *proof checker / test / simulator / human / world feedback；分别核查其保证范围*
- **O4.5.2｜为什么证明检查有时比找到证明容易？** → *candidate vs verification*
- **O4.5.3｜如何将验证结果转换成训练信号？** → *reward / rejection / preference / RLVR*
- **O4.5.4｜验证器能否漏检错误或被利用？** → *specification gaming / reward hacking*
- **O4.5.5｜真实世界是否存在万能验证器？** → *不存在；有限规格与实证检验须结合*

##### O4.6｜推理与学习能否形成更高一级的闭环？
- 简短回答：learn → reason → verify → update

- **O4.6a｜学习改进推理，推理又如何生成新训练数据？** → *self-improvement loop*
- **O4.6b｜如何防止模型对自身错误结论反复强化？** → *external validation / uncertainty control*
- **O4.6c｜何时应当改表示，而不是继续加大搜索？** → *representation–computation co-design*

#### O5｜智能体能否主动决定自己将获得什么经验？（Active Information Acquisition）
- 简短回答：有可选择观测或行动时，数据获取依赖策略；与 O6/O7 构成闭环

##### O5.1｜哪些观测最值得付出成本？
- 简短回答：value of information

##### O5.2｜怎样挑选最有价值的标注样本？
- 简短回答：active learning

##### O5.3｜怎样设计能区分竞争假设的实验？
- 简短回答：optimal experimental design

##### O5.4｜怎样通过探索发现未知状态与规律？
- 简短回答：exploration / novelty seeking

##### O5.5｜主动改变观察位置能够减少歧义吗？
- 简短回答：active perception / viewpoint selection

##### O5.6｜行动能同时带来任务收益和知识吗？
- 简短回答：dual control

- **O5.6a｜探索与利用为什么冲突？** → *exploration–exploitation*
- **O5.6b｜为未来学习牺牲当前收益何时值得？** → *information gain vs cost*

##### O5.7｜行动怎样改变未来观测分布？
- 简短回答：policy-dependent data collection

##### O5.8｜未知环境中哪些探索应被禁止？
- 简短回答：safe exploration

##### O5.9｜怎样尽可能发现未被现有模型覆盖的新情况？
- 简短回答：novelty / anomaly detection / open-set recognition；无法保证发现所有未知

#### O6｜目标怎样转化为可执行的行动，如何应对真实反馈？（Decision × Planning × Control）
- 简短回答：行动选择、计划执行与反馈校正；与 O5/O7 相互耦合

##### O6.1｜目标究竟从哪里来？
- 简短回答：specified reward / preferences / constraints

- **O6.1a｜目标与代理指标为何可能不同？** → *reward misspecification*
- **O6.1b｜多个相冲突的目标如何协调？** → *multi-objective / constrained decision*
- **O6.1c｜内在动机与外部目标如何结合？** → *intrinsic motivation / goal learning*
- **O6.1d｜指令与目标含混时，怎样澄清任务意图？** → *instruction grounding / preference learning / clarification*
- **O6.1e｜目标与安全要求冲突时，怎样约束或修正行动？** → *constrained decision / human feedback / oversight*

##### O6.2｜不完备观测下怎样估计当前状态？
- 简短回答：belief / memory / state estimation（详见 O1）

##### O6.3｜行动的后果怎样预测？
- 简短回答：world model / uncertainty propagation

- **O6.3a｜模型错误如何影响远期预测？** → *compounding model bias*
- **O6.3b｜未来不止一种可能时如何规划？** → *scenario / stochastic planning*

##### O6.4｜怎样求得面向长期目标的计划或策略？
- 简短回答：planning / tree search / trajectory optimization / contingent policy；部分可观测时可依据信念决策

- **O6.4a｜什么时候用符号任务规划？** → *task planning / PDDL*
- **O6.4b｜什么时候用连续轨迹优化？** → *trajectory planning / optimal control*
- **O6.4c｜高层意图与低层控制如何分层？** → *hierarchical planning / options*

##### O6.5｜计算出的动作怎样变成可执行的物理控制？
- 简短回答：actuator / dynamics / system identification

- **O6.5a｜执行器延迟怎样影响控制？** → *actuation dynamics / delay modeling*
- **O6.5b｜规划轨迹与真实动力学为何不一致？** → *model mismatch / tracking error*
- **O6.5c｜如何将感知不确定性传到控制约束？** → *robust / chance-constrained control*

##### O6.6｜存在扰动和模型误差时，为什么通常需要闭环？
- 简短回答：feedback / receding horizon / MPC

- **O6.6a｜状态偏离预期后怎么办？** → *replanning / feedback correction*
- **O6.6b｜闭环稳定性怎样分析？** → *Lyapunov / robust stability*
- **O6.6c｜规划频率和执行频率如何匹配？** → *real-time control*

##### O6.7｜怎样同时规划任务、控制和信息获取？
- 简短回答：belief-space planning / dual control

##### O6.8｜与其他行动者共处时怎样预测？
- 简短回答：interactive planning / game theory

##### O6.9｜什么叫真正完成任务？
- 简短回答：closed-loop success / robustness / safety

#### O7｜行动反馈怎样改进未来决策策略？（Reinforcement Learning）
- 简短回答：Learning × Decision × Interaction；与 O5/O6 共同形成反馈闭环

##### O7.1｜奖励和价值究竟表达了什么？
- 简短回答：reward / return / value function

- **O7.1a｜即时收益与长期收益怎样权衡？** → *discounted return / horizon*
- **O7.1b｜奖励是否真实反映目标？** → *reward alignment / misspecification*

##### O7.2｜什么是能够支持决策的状态与行动？
- 简短回答：MDP / representation / action space

- **O7.2a｜状态缺失时策略会怎样失败？** → *partial observability / aliasing*
- **O7.2b｜连续动作与离散动作差别是什么？** → *continuous/discrete control*

##### O7.3｜长期结果应该归功于哪次行动？
- 简短回答：credit assignment / temporal difference

- **O7.3a｜奖励延迟时如何更新？** → *TD learning / eligibility traces*
- **O7.3b｜稀疏奖励为什么难学？** → *sparse reward / hierarchy*

##### O7.4｜未知环境中如何探索？
- 简短回答：exploration–exploitation / intrinsic reward

- **O7.4a｜怎样估计价值、模型或未充分探索区域的不确定性？** → *visit count / posterior / ensemble / epistemic uncertainty*
- **O7.4b｜安全探索何时可能？** → *constraint satisfaction / risk budget*

##### O7.5｜价值函数和策略怎样学习？
- 简短回答：value-based / policy-based / actor–critic

- **O7.5a｜通过 Bellman 更新能学到什么？** → *Q-learning / TD*
- **O7.5b｜直接优化策略参数能得到什么？** → *policy gradient*
- **O7.5c｜价值估计怎样帮助策略改进？** → *actor–critic*

##### O7.6｜怎样学习环境模型并用它规划？
- 简短回答：model-based RL / learned dynamics / Dyna

##### O7.7｜不能在线试错时怎样学习？
- 简短回答：offline RL / imitation / distribution shift

- **O7.7a｜数据没有覆盖的动作为什么危险？** → *extrapolation error*
- **O7.7b｜模仿能否提供初始策略？** → *behavior cloning / imitation learning*

##### O7.8｜部分可观测时策略需要什么？
- 简短回答：belief / recurrent policy / memory

##### O7.9｜怎样提高学习效率，并检验训练与执行的稳定性和安全性？
- 简短回答：sample efficiency / convergence conditions / safe RL / robust evaluation

- **O7.9a｜仿真中学到的策略为何可能在现实中失效？** → *sim-to-real gap*
- **O7.9b｜奖励漏洞如何产生错误行为？** → *reward hacking*
- **O7.9c｜如何评价长期而非单步表现？** → *episodic / closed-loop evaluation*

#### O8｜环境不断变化时，能力怎样保持、迁移和升级？（Lifelong Adaptation）
- 简短回答：Transfer × Continual × Meta × Memory

##### O8.1｜Transfer Learning：哪些能力能够跨世界复用？
- 简短回答：跨域共享结构

- **O8.1.1｜究竟迁移什么？** → *features / parameters / rules / policy / skills*
- **O8.1.2｜源领域与目标领域差在哪里？** → *domain shift / task shift*
- **O8.1.3｜哪些机制可以实现迁移？** → *pretraining / fine-tuning / adapters / alignment*
- **O8.1.4｜少量新数据怎样快速适配？** → *few-shot / domain adaptation*
- **O8.1.5｜应该选择迁移哪些知识？** → *transfer selection / relevance*
- **O8.1.6｜为什么迁移有时降低表现？** → *negative transfer / mismatched assumptions*
- **O8.1.7｜新分布上的泛化边界是什么？** → *OOD / distribution generalization*

##### O8.2｜Continual Learning：不断学习为什么会遗忘？
- 简短回答：稳定性—可塑性

- **O8.2.1｜任务、分布、概念怎样随时间变化？** → *nonstationarity / concept drift*
- **O8.2.2｜怎样既保留旧知识又吸收新知识？** → *stability–plasticity tradeoff*
- **O8.2.3｜旧能力为什么会被新训练破坏？** → *catastrophic forgetting / interference*
- **O8.2.4｜哪些记忆方法可以缓解遗忘？** → *replay / regularization / consolidation*
- **O8.2.5｜旧结构什么时候可以复用？** → *modularity / transfer*
- **O8.2.6｜模型是否需要扩展？** → *dynamic architecture / growth*
- **O8.2.7｜怎样评价几十次任务后的综合表现？** → *forward/backward transfer / lifetime metrics*

##### O8.3｜Meta-Learning：能否学习「怎样学习」？
- 简短回答：跨任务适应机制

- **O8.3.1｜元层究竟学习什么对象？** → *initialization / optimizer / inductive bias / update rule*
- **O8.3.2｜怎样定义任务分布？** → *meta-training task distribution*
- **O8.3.3｜少量经验怎样触发快速适应？** → *few-shot adaptation*
- **O8.3.4｜怎样优化跨任务表现？** → *meta-objective / bilevel optimization*
- **O8.3.5｜面对新任务的泛化依据是什么？** → *shared structure / task similarity*
- **O8.3.6｜为什么不能保证适应任意新世界？** → *out-of-distribution limits*

##### O8.4｜长期记忆应该保存什么？
- 简短回答：experiences / beliefs / rules / skills / failures

- **O8.4a｜事件记忆和语义记忆有何区别？** → *episodic / semantic memory*
- **O8.4b｜什么时候检索，什么时候更新参数？** → *retrieval vs consolidation*
- **O8.4c｜互相矛盾的记忆怎样处理？** → *belief revision / provenance*

##### O8.5｜系统怎样发现已有能力可能失效？
- 简短回答：change detection / model monitoring / external feedback；自评仍需校验

#### O9｜其他智能体加入后，为什么「世界」更难预测？（Multi-Agent Intelligence）
- 简短回答：环境中存在具有目标与策略的其他主体

##### O9.1｜他人的行动应被建模为噪声还是策略？
- 简短回答：intentional agents / game theory

##### O9.2｜合作与竞争如何改变价值函数？
- 简短回答：cooperative / competitive games

##### O9.3｜其他主体也在学习时怎么办？
- 简短回答：nonstationarity / opponent modeling

##### O9.4｜局部信息怎样通过通信协调？
- 简短回答：communication / distributed inference

##### O9.5｜如何实现分布式决策与共同目标？
- 简短回答：consensus / decentralized control / MARL

##### O9.6｜多主体的规则、承诺与信任如何维持？
- 简短回答：norms / coordination / mechanism design

##### O9.7｜学习系统怎样处理欺骗和战略行为？
- 简短回答：adversarial robustness / game theory

#### O10｜真实世界的正确性与可靠性究竟怎样评价？
- 简短回答：形式正确不自动保证现实正确

##### O10.1｜预测准确能够支持哪种程度的理解判断？
- 简短回答：task sufficiency / mechanism tests / causal understanding；理解须先明确操作性标准

##### O10.2｜置信度是否反映真实错误概率？
- 简短回答：probabilistic calibration

##### O10.3｜训练分布外时会发生什么？
- 简短回答：OOD generalization / stress testing

##### O10.4｜表示是否真正指向现实对象？
- 简短回答：grounding evaluation

##### O10.5｜开环误差与闭环失败为什么不同？
- 简短回答：feedback-induced distribution shift

##### O10.6｜长时运行时误差怎样积累？
- 简短回答：compounding error / drift / forgetting

##### O10.7｜哪些安全条件能形式证明？
- 简短回答：formal constraints / reachability

##### O10.8｜形式证明依赖的现实假设怎样被核查？
- 简短回答：system validation / assumptions monitoring

##### O10.9｜验证器自身不完备时怎么办？
- 简短回答：red teaming / external testing / human oversight

##### O10.10｜鲁棒表现与平均指标应怎样权衡？
- 简短回答：tail risk / worst-case / reliability

#### O11｜怎样把相关能力组合为能完成任务的智能体？（Integrated Agent）
- 简短回答：按任务协调感知、模型、求解、行动与学习；不要求每个系统覆盖所有能力

##### O11.1｜感知如何形成可信的内部状态？
- 简短回答：Perception + Representation

##### O11.2｜模型怎样支持预测、解释和推理？
- 简短回答：World Model + Inference

##### O11.3｜怎样利用目标选择行动？
- 简短回答：Decision + Planning + Control

##### O11.4｜行动反馈怎样更新模型和技能？
- 简短回答：Learning + Interaction

##### O11.5｜怎样把快速近似与必要的检查结合？
- 简短回答：amortized reasoning + proof checking / empirical testing；检查方式取决于任务与可用证据

##### O11.6｜认知循环与行动循环怎样耦合？
- 简短回答：经验 → 表征／推理 → 验证 → 更新；目标 → 决策／执行 → 反馈；共享状态、记忆与资源

##### O11.7｜现代模型与方法怎样落入既有问题树？
- 简短回答：分解其表征、学习目标、计算机制与交互方式；具体例子见第 7 节

---

**继续阅读**：[在线站点](https://vincentwong3.github.io/ai-research/)（侧栏目录、折叠与搜索） · [叙事版](docs/map.md)（从具体困难开始） · [关于这份地图](docs/about.md) · [版本记录](CHANGELOG.md) · [CC BY-NC 4.0](LICENSE)
