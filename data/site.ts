import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Heart,
  Layers3,
  Mail,
  Palette,
  Radar,
  Search,
  Workflow
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type FocusItem = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  issue: string;
  title: string;
  slug: string;
  summary: string;
  role: string;
  dimension: string;
  why: string;
  how: string;
  reflection: string;
  highlights?: string[];
  tags: string[];
  mediaType: "video" | "image" | "code";
  mediaSrc: string;
  posterSrc?: string;
  demoHref: string;
  githubHref?: string;
  privacyNote?: string;
};

export type AiDimension = {
  index: string;
  title: string;
  philosophy: string;
  reflection: string;
  tags: string[];
  icon: LucideIcon;
};

export type Note = {
  title: string;
  body: string;
};

export type Reflection = {
  index: string;
  title: string;
  body: string;
  tag: string;
};

export type ExperienceItem = {
  period: string;
  place: string;
  title: string;
  body: string;
  link?: {
    label: string;
    href: string;
  };
};

export type EditorialPlate = {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  stats: string[];
};

export type ResumeWorkItem = {
  period: string;
  company: string;
  title: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  major: string;
};

export type ResumeProfile = {
  eyebrow: string;
  title: string;
  stats: string[];
  work: ResumeWorkItem[];
  education: EducationItem[];
};

export const site = {
  brandName: "JadeDing",
  fullName: "丁玉洁",
  role: "游戏美术招聘与人才运营",
  mood: "Game Art Hiring / Recruiting Ops / AI Explorer",
  headline: "让合适的创作者，遇见合适的游戏团队。",
  intro:
    "目前在心动网络，长期专注游戏领域招聘，尤其关注美术岗位、招聘运营与候选人体验。持续探索 AI 如何帮助招聘更高效，也更有温度。",
  portrait: {
    src: "/portrait/pointer-frames/frame-001.jpg",
    fallbackSrc: "/profile-placeholder.svg",
    alt: "JadeDing 的编辑感插画形象"
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Focus", href: "#focus" },
    { label: "AI Dimensions", href: "#dimensions" },
    { label: "Reflections", href: "#reflections" },
    { label: "AI Lab", href: "#ai-lab" },
    { label: "Contact", href: "#contact" }
  ] satisfies NavLink[],
  coverLines: [
    "X.D. Network",
    "Game Art Hiring",
    "Talent Operations",
    "AI Recruiting Tools"
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%E7%8E%89%E6%B4%81-%E4%B8%81-281655119/",
      icon: BriefcaseBusiness
    },
    {
      label: "GitHub",
      href: "https://github.com/JadeDing395",
      icon: Code2
    },
    {
      label: "Email",
      href: "mailto:hello@jadeding.com",
      icon: Mail
    }
  ] satisfies SocialLink[],
  focusItems: [
    {
      label: "01 / Hiring",
      title: "游戏美术岗位理解",
      description: "围绕 2D、3D 美术以及 TA 等方向，拆解岗位需求、作品集线索与团队阶段。",
      icon: Palette
    },
    {
      label: "02 / Matching",
      title: "人才识别与匹配",
      description: "从作品质量、项目经验、表达方式与长期潜力中，寻找更接近真实需求的匹配。",
      icon: Search
    },
    {
      label: "03 / Operations",
      title: "招聘运营与流程体验",
      description: "关注渠道、mapping、数据、招聘数据库与复盘，让流程更清晰，也让候选人体验更体面。",
      icon: Layers3
    },
    {
      label: "04 / AI",
      title: "AI 招聘工具探索",
      description: "用 AI 处理信息整理、画像拆解、流程自动化和内容生成，把时间还给判断与沟通。",
      icon: BrainCircuit
    }
  ] satisfies FocusItem[],
  aiDimensions: [
    {
      index: "01",
      title: "AI 人才寻访",
      philosophy: "招聘的起点不是关键词，而是对「什么样的人能成事」的清晰判断。",
      reflection:
        "从填表搜索到对话式 Reverse ICP，我越来越相信寻访的核心是理解需求，而不是堆砌关键词。AI 帮我把模糊的岗位描述结构化、可复用，但最终拍板的仍然是人对人的判断。",
      tags: ["Reverse ICP", "Multi-Channel Sourcing", "AI Scoring", "Talent Pool"],
      icon: Radar
    },
    {
      index: "02",
      title: "招聘数据看板",
      philosophy: "看板的核心不是图表，而是「谁该看到什么」的视角设计。",
      reflection:
        "同一个招聘漏斗，管理层看趋势、HR 看自己的交付、BP 看部门缺口。做看板的过程让我意识到，权限和视角设计本身就是对招聘业务的深度理解——数据只有被对的人在对的场景看到，才有价值。",
      tags: ["Feishu API", "Permission Scope", "Drill-down", "Auto ETL"],
      icon: BarChart3
    },
    {
      index: "03",
      title: "HR 知识库与服务自动化",
      philosophy: "AI 回答不是终点，「回答→工单→沉淀→再回答」的闭环才是。",
      reflection:
        "群里每天都有人问重复的问题，一开始我想做个能回答的机器人就够了。但真正有价值的是闭环：AI 答不了就自动建工单，人工解决后沉淀回知识库，下一次就能自动回答。每一次人工兜底，都应该让系统变得更聪明。",
      tags: ["RAG", "Ticket Loop", "Feishu Aily", "FAQ Automation"],
      icon: Bot
    },
    {
      index: "04",
      title: "招聘工作流",
      philosophy: "出站找人、入站处理是两条流水线，但 AI 都只做机械劳动，人保留判断。",
      reflection:
        "主动出击找对的人，和让收到的简历不被淹没，是完全不同的两种场景。但它们共享同一个设计原则：AI 处理筛选、归档、打分这些机械劳动，把时间还给人和人之间的沟通。关键节点永远留人工确认，不盲目追求全自动化。",
      tags: ["Inbound Pipeline", "Outbound Outreach", "AI Grading", "Human-in-the-loop"],
      icon: Workflow
    },
    {
      index: "05",
      title: "AI 工具链与基础设施",
      philosophy: "用 AI 工具的人很多，认真打理自己工具链的人很少。",
      reflection:
        "我做的每一个实验、写的每一条 Skill，都不应该是一次性的。把它们沉淀进工作台，让它们能跨开发工具的 session 复用、能自动 commit 和推送、能持续扫描本地新项目——这是我自己的 AI 操作系统，也是效率的复利来源。",
      tags: ["MCP", "Skill Library", "Dev Tool Integration", "Local-first"],
      icon: Boxes
    },
    {
      index: "06",
      title: "个人 AI 陪伴",
      philosophy: "AI 不只是生产力，也可以是有温度的日常陪伴。",
      reflection:
        "这部分纯属个人娱乐，但它让我理解了一件事：一个会眨眼的桌宠、一句随机的鼓励、会前十分钟的温柔提醒，技术上不复杂，但它改变了我和电脑相处的方式。AI 的价值不只在效率，也在情绪和陪伴。",
      tags: ["Desktop Pet", "Habit Tracker", "Calendar Reminder", "Just for Fun"],
      icon: Heart
    }
  ] satisfies AiDimension[],
  notes: [
    {
      title: "长期在游戏语境里积累",
      body: "从研发、发行到美术岗位，持续沉淀岗位理解、人才地图和候选人沟通经验。"
    },
    {
      title: "招聘运营不只看结果",
      body: "渠道、数据、人才库、流程节奏和复盘都很重要，它们共同决定招聘能否持续运转。"
    },
    {
      title: "对 AI 保持实用主义好奇",
      body: "AI 不是替代人的答案，更像一组新的工作台，帮助我们更早看见线索。"
    }
  ] satisfies Note[],
  reflections: [
    {
      index: "01",
      title: "招聘的核心是理解，不是搜索技巧",
      body: "关键词、布尔搜索、渠道技巧都是术。真正的道是理解——理解这个岗位要解决什么问题，理解什么样的人在什么团队里能成事。AI 可以把搜索效率提高 10 倍，但判断错了，效率越高只会越快找到错的人。",
      tag: "招聘哲学"
    },
    {
      index: "02",
      title: "AI 解放机械劳动，人保留判断",
      body: "很多人做 AI 招聘工具追求「全自动化」，但我觉得这是错的。招聘的本质是人和人的连接。我的所有工具都遵循同一个原则：AI 处理筛选、归档、整理这些机械劳动，关键节点永远留人工确认。",
      tag: "AI 观"
    },
    {
      index: "03",
      title: "效率的复利在于沉淀，不在于工具数量",
      body: "今天试这个 AI，明天试那个，每个用几天就放弃，这不是效率。真正的复利来自沉淀——把每一次实验、每一条 Skill 都整理好，让它们能被复用、被优化。我的 AI Workbench 就是这个思路：它不是又一个工具，而是我所有工具的容器。",
      tag: "效率思考"
    },
    {
      index: "04",
      title: "AI 不该只有效率，也该有温度",
      body: "我们总在讨论 AI 怎么提高生产力，但很少讨论 AI 怎么让人更开心。我做软软这个桌宠，技术上很简单，但它是我每天用得最多的 AI 项目——因为它真的在陪伴我。一句随机的鼓励、会前十分钟的温柔提醒，这些不能帮你多招一个人，但能让工作没那么孤单。",
      tag: "AI 温度"
    }
  ] satisfies Reflection[],
  experienceItems: [
    {
      period: "2019.08 - Now",
      place: "心动网络",
      title: "游戏招聘 / 美术招聘 / 招聘运营",
      body:
        "心动网络以游戏研发、发行与 TapTap 平台生态为核心。我目前在这里长期负责游戏招聘，重点聚焦美术岗位、招聘运营与候选人关系维护。",
      link: {
        label: "XD / TapTap",
        href: "https://www.xd.com/about-us/business?lang=zh"
      }
    },
    {
      period: "2016.08 - 2019.08",
      place: "沐瞳 / 香蕉计划 / 刃游",
      title: "HR / 招聘",
      body:
        "积累游戏、娱乐与文化行业招聘经验，覆盖渠道拓展、人才分析、招聘数据、员工沟通与企业文化活动。"
    }
  ] satisfies ExperienceItem[],
  editorialPlate: {
    eyebrow: "Visual Essay",
    title: "一张正在生长的人才地图。",
    body:
      "作品集、渠道线索、团队需求、候选人关系和 AI 工具，是我每天处理的真实材料。把这些信息整理清楚，判断和沟通才会更快发生。",
    imageSrc: "/editorial/talent-map-editorial.png",
    imageAlt: "AI 辅助游戏美术招聘的人才地图编辑插画",
    stats: ["Game Art Hiring", "AI Exploration", "Recruiting Ops"]
  } satisfies EditorialPlate,
  resumeProfile: {
    eyebrow: "Resume",
    title: "游戏招聘现场里的长期积累。",
    stats: ["2016 - Now", "Game Industry", "Art Hiring", "Recruiting Ops"],
    work: [
      {
        period: "2019.08 - Now",
        company: "心动网络",
        title: "HR / 游戏招聘 / 美术招聘 / 招聘运营",
        bullets: [
          "心动网络以游戏研发、发行与 TapTap 平台生态为核心；我主要支持游戏业务的人才招聘与运营工作。",
          "前期覆盖研发项目组和海外发行团队招聘，理解项目节奏、团队配置与岗位需求。",
          "2020 年起重点专注游戏美术招聘，长期覆盖角色、2D、3D 美术以及 TA 等方向，沉淀岗位画像、作品集判断和人才地图。",
          "运营脉脉、LinkedIn、ArtStation 等渠道，结合岗位特点做渠道选择、行业人才分析、mapping 与招聘数据库维护。"
        ]
      },
      {
        period: "2016.08 - 2019.08",
        company: "沐瞳 / 香蕉计划 / 刃游",
        title: "HR / 招聘",
        bullets: [
          "积累游戏、娱乐、影视与文化行业招聘经验。",
          "覆盖多业务、多岗位的人才寻访和招聘交付，参与渠道拓展、人才分析、招聘数据汇总与 mapping。",
          "协助员工沟通、员工关系维护和企业文化活动，形成对业务现场和候选人体验的早期理解。"
        ]
      }
    ],
    education: [
      {
        school: "华东理工大学",
        degree: "硕士研究生",
        major: "公共管理专业"
      },
      {
        school: "华东政法大学",
        degree: "本科 / 学士学位",
        major: "金融学"
      }
    ]
  } satisfies ResumeProfile,
  aiProjects: [
    {
      issue: "AI 01",
      title: "Jchi · 对话式 AI 人才寻访工作台",
      slug: "jchi",
      summary:
        "围绕游戏美术寻访流程做的一套 AI 工作台：从交互沟通里反推 ICP，再把渠道选择、JD 生成、候选人命中、触达文稿、入库维护、关系图谱和市场洞察串起来。",
      role: "Conversational ICP / AI Sourcing / Market Insight",
      dimension: "AI 人才寻访",
      why: "传统招聘工具都是「填表搜索」——你填一堆关键词，系统返回一堆简历。但真实的寻访不是这样的：需求往往是模糊的，HR 和用人经理之间要反复沟通才能对齐「到底要找什么样的人」。我想做一个能「对话」的工具，像一个懂行的资深 recruiter 一样，通过追问帮你把模糊的需求慢慢澄清成清晰的人才画像，然后再去搜索。",
      how: "核心是 Reverse ICP（反向人才画像）：不是先有画像再找人，而是通过对话逐步构建画像。AI 会追问地区、风格、经验、项目类型等关键维度，每一步都给出建议而不是空等输入。画像确认后，系统会根据画像特点推荐最合适的搜索渠道（不同渠道的人才分布完全不同），并生成平台化的搜索词——比如招二次元画师，会自动去搜鸣潮、原神、明日方舟等项目出来的人。命中候选人后，AI 会基于候选人背景生成专属触达文稿，而不是千篇一律的模板。",
      reflection: "做这个项目最大的收获是理解了「AI 不应该替代人的判断，而应该把人从机械劳动中解放出来」。AI 可以帮你整理信息、生成草稿、推荐渠道，但最终判断「这个人合不合适」「要不要打招呼」仍然是人。另一个洞察是：招聘的核心不是搜索技巧，而是对「什么样的人能成事」的理解。Jchi 把这种隐性知识显性化、结构化，让经验可以沉淀和复用。还有人脉关系图谱——我相信 6 度分隔理论，把候选人的项目、公司、同事关系可视化后，能找到很多意想不到的建联路径。",
      highlights: [
        "对话式追问地区、风格、经验等条件，把模糊需求整理成可保存的人才画像。",
        "画像确认后建议搜索渠道，也可生成招聘 JD，并把画像沉淀为后续复用资产。",
        "命中候选人后生成专属触达文稿，可按候选人国家或语境自动选择语言。",
        "合适人选可入库、加星并定期维护，结合项目、公司和关系形成可用的人脉图谱。"
      ],
      tags: ["Reverse ICP", "Channel Strategy", "AI JD", "Outreach", "Talent Graph"],
      mediaType: "video",
      mediaSrc: "/project-media/jchi-demo.mp4",
      posterSrc: "/project-media/jchi-home-safe.png",
      demoHref: "/project-media/jchi-demo.mp4",
      githubHref: "https://github.com/JadeDing395/Scouter",
      privacyNote: "公开演示使用虚构候选人样例。"
    },
    {
      issue: "AI 02",
      title: "Feishu Hire Dashboard · 招聘数据看板",
      slug: "feishu-dashboard",
      summary:
        "链接飞书招聘 API，每日自动抓取最新招聘信息并实时更新，把原本重复做表、汇总、发进展的工作变成可按权限查看、可下钻分析的动态看板。",
      role: "Feishu API / Scope Permission / Interactive Analytics",
      dimension: "招聘数据看板",
      why: "招聘团队每周都要花大量时间做表、汇总、发进展。同一个招聘漏斗，管理层看趋势、HR 看自己的交付、BP 看部门缺口，每个人要的视角都不一样。用 Excel 做出来的表是静态的，没法交互，也没法按权限控制谁能看到什么。我想做一个动态看板，让数据自己说话，把人从重复的做表工作中解放出来。",
      how: "通过飞书招聘 API 每日自动同步数据，减少手工拉表。核心设计是「权限即视角」：按不同身份设置 scope 权限，不同角色进入后只看到自己负责部门或范围内的招聘进展。所有核心数据支持下钻，能从整体 KPI、漏斗、渠道、部门和 HR 维度动态查看细节。提供不同视觉风格和展示模式，满足复盘、管理汇报、个人跟进等不同使用场景。",
      reflection: "做看板的过程让我意识到，数据可视化的核心不是图表好不好看，而是「谁该看到什么」的视角设计。同一个数据，给管理层看和给执行层看，完全是两个产品。权限设计本身就是对招聘业务的深度理解——数据只有被对的人在对的场景看到，才有价值。另一个收获是：自动化的价值不在于「快」，而在于「准」和「可持续」。手工做表难免出错，而且一旦做表的人请假，数据就断了。自动化让数据变成基础设施，而不是某个人的兼职。",
      highlights: [
        "每日自动同步飞书招聘数据，减少手工拉表、做日报周报和重复汇总的时间。",
        "按不同身份设置 scope 权限，不同角色进入后只看到自己负责部门或范围内的招聘进展。",
        "所有核心数据支持下钻，能从整体 KPI、漏斗、渠道、部门和 HR 维度动态查看细节。",
        "提供不同视觉风格和展示模式，满足复盘、管理汇报、个人跟进等不同使用场景，并重点优化交互体验。"
      ],
      tags: ["Feishu API", "Permission Scope", "Drill-down", "Dashboard UX", "Auto Sync"],
      mediaType: "image",
      mediaSrc: "/project-media/feishu-dashboard-demo-poster.jpg",
      posterSrc: "/project-media/feishu-dashboard-demo-poster.jpg",
      demoHref: "/project-media/feishu-dashboard-demo.mp4",
      githubHref: "https://github.com/JadeDing395/feishu-hire-dashboard"
    },
    {
      issue: "AI 03",
      title: "HR AI Agents · 信息答疑与洞察自动化",
      slug: "hr-ai-agents",
      summary:
        "在公司内部围绕重复咨询和信息触达做的 AI Agent 实践：内推小助手实时回答内推流程、岗位信息和链接；每日自动抓取并推送热点新闻与游戏公众号文章，帮助团队更快捕捉市场变化。",
      role: "Feishu Aily / AI Agent / HR Ops Automation",
      dimension: "HR 知识库与服务自动化",
      why: "HR 群里每天都有人问重复的问题：「内推流程是什么？」「这个岗位的链接在哪？」「入职需要准备什么？」一开始我想做个能回答的机器人就够了，但后来发现，真正有价值的不是回答本身，而是「回答→工单→沉淀→再回答」的闭环。AI 答不了的问题自动建工单，人工解决后沉淀回知识库，下一次就能自动回答。每一次人工兜底，都应该让系统变得更聪明。",
      how: "用飞书 Aily 搭建「内推小助手」，基于 RAG 检索公司内部知识库，自动回答内推流程、岗位信息、内推链接等高频问题。答不了的问题自动创建工单，流转到对应 HR 处理。同时基于多维表格 AI Agent 自动抓取热点新闻、行业动态和游戏公众号文章，每日整理后推送给团队，帮助大家更快捕捉市场变化。",
      reflection: "这个项目让我理解了「AI 回答不是终点，闭环才是」。很多人做 AI 客服做到「能回答 80% 的问题」就停了，但剩下的 20% 才是关键——那些 AI 答不了的问题，恰恰是知识库的盲区。如果能把每一次人工兜底都沉淀回知识库，系统会越来越聪明，这才是真正的复利。另一个洞察是：HR 的价值不在于回答重复问题，而在于处理复杂的、需要判断力的情况。把重复劳动交给 AI，HR 才能把时间留给真正需要人的地方。",
      highlights: [
        "用飞书 Aily 搭建“内推小助手”，自动回答内推流程、岗位信息、内推链接等高频问题。",
        "把重复咨询和信息触达变成工具，降低 HR 反复沟通、查找链接和转发信息的成本。",
        "基于多维表格 AI Agent 自动抓取热点新闻、行业动态和游戏公众号文章，并每日推送给团队。",
        "把 AI 用在高频、重复、可标准化的工作上，让 HR 把时间留给判断、沟通和交付。"
      ],
      tags: ["Feishu Aily", "AI Agent", "Referral Bot", "News Push", "HR Ops"],
      mediaType: "image",
      mediaSrc: "/project-media/internal-ai-automation-safe.png",
      demoHref: "/project-media/internal-ai-automation-safe.png",
      privacyNote: "公开图为重绘版，已避开内部截图细节。"
    },
    {
      issue: "AI 04",
      title: "艺才流 ArtHire Flow · 入站简历自动化流水线",
      slug: "arthire-flow",
      summary:
        "面向游戏美术招聘的入站处理流水线：从邮箱自动下载简历和作品附件 → 安全解压归档 → 统一命名 → AI 识别姓名与岗位 → 按 JD 履历评分 → 上传飞书招聘并匹配岗位 → 分配面试官筛选。",
      role: "Inbound Pipeline / AI Grading / Feishu Hire Integration",
      dimension: "招聘工作流",
      why: "游戏美术招聘有个特殊的痛点：简历不只是一份 PDF，还附带大量作品附件——ZIP、RAR、百度网盘链接、个人网站……每天收到几十份简历，光下载、解压、重命名、归档就要花几个小时。而且美术简历的评估和普通岗位不一样，需要看作品质量、项目经验、风格匹配度，这些都需要专业判断。我想做一条流水线，把机械劳动自动化，把时间还给真正需要判断力的环节。",
      how: "从邮箱自动下载简历和作品附件，支持 ZIP/RAR 安全解压、SHA-256 跨候选人查重、统一命名归档。调用大模型从简历正文识别姓名与目标岗位，低置信度自动进入人工确认队列，不盲目自动处理。按真实 JD 做履历评分，评分结论自动写入飞书人才备注和 Obsidian 候选人笔记，形成可追溯的评估记录。评分通过后自动上传飞书招聘并加入匹配岗位，可直接安排对应面试官筛选。",
      reflection: "做这个项目最大的体会是「自动化的边界在哪里」。不是所有环节都适合自动化——比如简历评分，AI 可以给一个参考分，但最终判断还是要人。所以我设计了「低置信度自动进入人工确认队列」，关键节点永远留人工确认。另一个收获是：美术招聘的「作品」比「简历」更重要。普通招聘看履历，美术招聘看作品。所以流水线里专门做了作品附件的归档和管理，这是和普通简历处理系统最大的区别。还有 Obsidian 候选人笔记——把评估过程沉淀下来，下次看同一个人时能看到历史判断，这是招聘经验的复利。",
      highlights: [
        "自动从邮箱下载简历和作品附件，支持 ZIP/RAR 安全解压、SHA-256 跨候选人查重、统一命名归档。",
        "调用大模型从简历正文识别姓名与目标岗位，低置信度自动进入人工确认队列，不盲目自动处理。",
        "按真实 JD 做履历评分，评分结论自动写入飞书人才备注和 Obsidian 候选人笔记，形成可追溯的评估记录。",
        "评分通过后自动上传飞书招聘并加入匹配岗位，可直接安排对应面试官筛选，形成从收件到面试的完整闭环。"
      ],
      tags: ["Email Pipeline", "Portfolio Archiving", "AI Grading", "Feishu Hire", "Human-in-the-loop"],
      mediaType: "code",
      mediaSrc: "",
      demoHref: "https://github.com/JadeDing395",
      githubHref: "https://github.com/JadeDing395",
      privacyNote: "产品截图待补充，当前为代码占位卡片。"
    },
    {
      issue: "AI 05",
      title: "Boss Assistant · 出站主动寻访助手",
      slug: "boss-assistant",
      summary:
        "围绕 Boss 直聘做的半自动化探索：用插件和本地自动化减少重复点击、信息整理和流程切换，AI 辅助判定候选人、筛选合适的人并主动打招呼，关键判断仍然由人完成。",
      role: "Chrome Extension / Outbound Sourcing / Workflow Automation",
      dimension: "招聘工作流",
      why: "出站寻访是招聘中最耗时的环节之一：打开 Boss、搜索关键词、一个个点开候选人主页、判断合不合适、复制信息、写打招呼的话……每天重复几百次，机械劳动占了大部分时间。我想做一个助手，把这些重复操作自动化，让 recruiter 把时间花在真正需要判断力的地方——判断这个人合不合适、怎么写有针对性的触达。",
      how: "用 Chrome 插件和本地自动化减少重复点击、信息整理和流程切换。AI 辅助判定候选人匹配度，基于岗位要求和候选人背景给出匹配评分和理由。筛选合适的人后支持主动打招呼，AI 会根据候选人背景生成个性化的打招呼文案，而不是千篇一律的模板。保留人工判断节点，避免把候选人沟通完全交给自动化。",
      reflection: "做这个项目让我更深刻地理解了「出站和入站是两条完全不同的流水线」。入站是「处理收到的简历」，核心是效率和不遗漏；出站是「主动找对的人」，核心是判断和针对性。但它们共享同一个设计原则：AI 处理机械劳动，人保留判断。另一个体会是：招聘工具的「最后一公里」永远是人和人的沟通。AI 可以帮你找到对的人、写好草稿，但最终打动候选人的，还是你对她作品的理解、对她职业发展的真诚建议。工具只是让你有更多时间去做这些真正重要的事。",
      highlights: [
        "把重复打开、筛选、记录、跳转等高频动作做成辅助工具，降低机械操作成本。",
        "AI 辅助判定候选人匹配度，筛选合适的人后支持主动打招呼，提升出站寻访效率。",
        "保留人工判断节点，避免把候选人沟通完全交给自动化，兼顾效率和体验。",
        "适合与招聘数据、候选人库和后续触达流程串联，形成更完整的一线招聘工作台。"
      ],
      tags: ["Outbound Sourcing", "Boss Zhipin", "Chrome Extension", "Workflow UX", "Human-in-the-loop"],
      mediaType: "code",
      mediaSrc: "",
      demoHref: "https://github.com/JadeDing395/boss-assistant",
      githubHref: "https://github.com/JadeDing395/boss-assistant",
      privacyNote: "演示视频待补充，当前为代码占位卡片。"
    },
    {
      issue: "AI 06",
      title: "AI Workbench · 个人 AI 工具与 Skill 工作台",
      slug: "ai-workbench",
      summary:
        "零依赖的个人 AI 工作台：集中管理所有 AI 工具和 Skill，支持应用宫格、分类搜索、收藏、本地项目扫描、开发工具连接（Cindy / Codex / Claude Code / Trae），并能通过本地 Agent 帮你 commit、推送和打 release tag。",
      role: "Tool Orchestration / Skill Management / Dev Tool Integration",
      dimension: "AI 工具链与基础设施",
      why: "用 AI 工具的人很多，但认真打理自己工具链的人很少。我自己做了很多 AI 实验、写了很多 Skill，但它们散落在各个地方——有的在浏览器书签里，有的在本地文件夹里，有的在某个开发工具的配置里。每次想用的时候都要找半天。我想做一个自己的 AI 操作系统，把所有工具和 Skill 集中管理，让它们能跨工具复用、能持续沉淀、能形成效率的复利。",
      how: "零依赖的本地应用，应用宫格和列表双视图，支持分类、搜索、收藏、最近打开，所有 AI 工具一个入口管理。Skill 中心：读取 GitHub 候选、收藏元数据、同步 Obsidian，确认后安装到所选开发工具。统一检测 Cindy、Codex、Claude Code、WorkBuddy、Trae 等开发工具，不读取敏感配置。本地 Agent 支持 Git 状态、commit 和 release tag，自动扫描 DD 目录下的新项目并合并到工作台。",
      reflection: "这个项目是我对「个人知识管理」和「工具链」思考的集中体现。我越来越相信，效率的复利不在于你用了多少工具，而在于你有没有把工具沉淀成自己的系统。每一个实验、每一条 Skill，都不应该是一次性的——它们应该被整理、被复用、被持续优化。另一个洞察是：「本地优先」不只是技术选择，更是一种态度。我的数据、我的工具、我的思考，都应该在我自己的电脑上，而不是锁在某个 SaaS 平台里。这也是为什么这个工作台零依赖、完全本地运行。",
      highlights: [
        "应用宫格和列表双视图，支持分类、搜索、收藏、最近打开，所有 AI 工具一个入口管理。",
        "Skill 中心：读取 GitHub 候选、收藏元数据、同步 Obsidian，确认后安装到所选开发工具。",
        "统一检测 Cindy、Codex、Claude Code、WorkBuddy、Trae 等开发工具，不读取敏感配置。",
        "本地 Agent 支持 Git 状态、commit 和 release tag，自动扫描 DD 目录下的新项目并合并到工作台。"
      ],
      tags: ["Tool Orchestration", "Skill Library", "Git Automation", "Local-first", "Zero Dependency"],
      mediaType: "image",
      mediaSrc: "/project-media/ai-workbench-cover.png",
      demoHref: "/project-media/ai-workbench-cover.png",
      githubHref: "https://github.com/JadeDing395"
    },
    {
      issue: "AI 07",
      title: "软软 · 桌面陪伴桌宠",
      slug: "ruanruan",
      summary:
        "原生 macOS 桌宠：透明悬浮、跨屏拖拽、点击不同部位有不同反应、右缘吸附隐身、英语单词卡片、喝水提醒、会前十分钟日历提醒。纯属个人娱乐，但探索了 AI 作为日常陪伴的可能性。",
      role: "macOS Desktop Pet / Habit Reminder / Calendar Integration",
      dimension: "个人 AI 陪伴",
      why: "这部分纯属个人娱乐，但它让我理解了一件事：AI 不只是生产力工具，也可以是有温度的日常陪伴。一个会眨眼的桌宠、一句随机的鼓励、会前十分钟的温柔提醒——技术上不复杂，但它改变了我和电脑相处的方式。我每天对着电脑工作十几个小时，如果有个小角色在屏幕角落陪着我，工作就没那么孤单了。",
      how: "原生 macOS 应用，透明悬浮窗口，跨屏拖拽。悬停眨眼、呼吸、睡眠动画，点击头、手、身体、脚边各有不同反应和文案，有真实的陪伴感。拖到屏幕右缘自动吸附隐身，移入边缘唤回；位置和状态自动保存。英语卡片带「记住了 / 再看一次 / 5 分钟后」选择，喝水提醒带完成和延后，会前十分钟日历提醒。预留 AI 图像生成接入边界，未来可根据用户上传的参考图自动生成同风格角色帧。",
      reflection: "做这个项目最大的收获是理解了「AI 的价值不只在效率，也在情绪和陪伴」。我们总是讨论 AI 怎么提高生产力、怎么替代人，但很少有人讨论 AI 怎么让人更开心、更不孤单。软软技术上很简单，但它是我每天用得最多的 AI 项目——因为它真的在陪伴我。另一个体会是：「细节决定温度」。点击不同部位有不同反应、会眨眼会呼吸、拖到边缘会隐身——这些小细节加起来，就让一个简单的桌宠有了「活着」的感觉。技术不难，难的是有没有心去做这些细节。",
      highlights: [
        "悬停眨眼、呼吸、睡眠动画，点击头、手、身体、脚边各有不同反应和文案，有真实的陪伴感。",
        "拖到屏幕右缘自动吸附隐身，移入边缘唤回；位置和状态自动保存。",
        "英语卡片带「记住了 / 再看一次 / 5 分钟后」选择，喝水提醒带完成和延后，会前十分钟日历提醒。",
        "预留 AI 图像生成接入边界，未来可根据用户上传的参考图自动生成同风格角色帧。"
      ],
      tags: ["macOS", "Desktop Pet", "Habit Tracker", "Calendar", "Just for Fun"],
      mediaType: "image",
      mediaSrc: "/project-media/ruanruan-idle.png",
      demoHref: "/project-media/ruanruan-idle.png",
      privacyNote: "个人娱乐向项目，非专业主线。"
    }
  ] satisfies Project[],
  contactLine: "愿意聊聊游戏美术招聘、AI 工具，或一个正在被认真打磨的机会。"
};
