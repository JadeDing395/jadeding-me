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
  summary: string;
  role: string;
  dimension: string;
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
    { label: "Resume", href: "#resume" },
    { label: "Focus", href: "#focus" },
    { label: "AI Dimensions", href: "#dimensions" },
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
      summary:
        "围绕游戏美术寻访流程做的一套 AI 工作台：从交互沟通里反推 ICP，再把渠道选择、JD 生成、候选人命中、触达文稿、入库维护、关系图谱和市场洞察串起来。",
      role: "Conversational ICP / AI Sourcing / Market Insight",
      dimension: "AI 人才寻访",
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
      summary:
        "链接飞书招聘 API，每日自动抓取最新招聘信息并实时更新，把原本重复做表、汇总、发进展的工作变成可按权限查看、可下钻分析的动态看板。",
      role: "Feishu API / Scope Permission / Interactive Analytics",
      dimension: "招聘数据看板",
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
      summary:
        "在公司内部围绕重复咨询和信息触达做的 AI Agent 实践：内推小助手实时回答内推流程、岗位信息和链接；每日自动抓取并推送热点新闻与游戏公众号文章，帮助团队更快捕捉市场变化。",
      role: "Feishu Aily / AI Agent / HR Ops Automation",
      dimension: "HR 知识库与服务自动化",
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
      summary:
        "面向游戏美术招聘的入站处理流水线：从邮箱自动下载简历和作品附件 → 安全解压归档 → 统一命名 → AI 识别姓名与岗位 → 按 JD 履历评分 → 上传飞书招聘并匹配岗位 → 分配面试官筛选。",
      role: "Inbound Pipeline / AI Grading / Feishu Hire Integration",
      dimension: "招聘工作流",
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
      summary:
        "围绕 Boss 直聘做的半自动化探索：用插件和本地自动化减少重复点击、信息整理和流程切换，AI 辅助判定候选人、筛选合适的人并主动打招呼，关键判断仍然由人完成。",
      role: "Chrome Extension / Outbound Sourcing / Workflow Automation",
      dimension: "招聘工作流",
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
      summary:
        "零依赖的个人 AI 工作台：集中管理所有 AI 工具和 Skill，支持应用宫格、分类搜索、收藏、本地项目扫描、开发工具连接（Cindy / Codex / Claude Code / Trae），并能通过本地 Agent 帮你 commit、推送和打 release tag。",
      role: "Tool Orchestration / Skill Management / Dev Tool Integration",
      dimension: "AI 工具链与基础设施",
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
      summary:
        "原生 macOS 桌宠：透明悬浮、跨屏拖拽、点击不同部位有不同反应、右缘吸附隐身、英语单词卡片、喝水提醒、会前十分钟日历提醒。纯属个人娱乐，但探索了 AI 作为日常陪伴的可能性。",
      role: "macOS Desktop Pet / Habit Reminder / Calendar Integration",
      dimension: "个人 AI 陪伴",
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
