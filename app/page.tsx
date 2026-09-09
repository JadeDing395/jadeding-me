"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  BookOpenText,
  CirclePlay,
  Code2,
  Dot,
  Layers3,
  MoveRight,
  Palette,
  Search,
  Sparkles
} from "lucide-react";
import { Portrait } from "@/app/Portrait";
import { ProjectDemoActions } from "@/app/ProjectDemoActions";
import { site } from "@/data/site";

const coverRibbonItems = [
  { label: "Game Art", Icon: Palette },
  { label: "Talent Maps", Icon: Search },
  { label: "Recruiting Ops", Icon: Layers3 },
  { label: "AI Lab", Icon: BrainCircuit }
];

function ProjectMedia({
  type,
  title,
  src,
  poster
}: {
  type: "video" | "image" | "code";
  title: string;
  src: string;
  poster?: string;
}) {
  if (type === "video") {
    return (
      <div className="media-stage project-video-stage" aria-label={`${title} 视频展示`}>
        <video src={src} poster={poster} muted autoPlay loop playsInline />
        <div className="media-badge">
          <CirclePlay className="h-4 w-4" aria-hidden="true" />
          Short Film
        </div>
      </div>
    );
  }

  if (type === "code") {
    return (
      <div className="media-stage code-stage" aria-label={`${title} GitHub 展示占位`}>
        <div className="code-line w-10/12" />
        <div className="code-line w-7/12" />
        <div className="code-line accent w-9/12" />
        <div className="code-line w-6/12" />
        <div className="code-mark">
          <Code2 className="h-9 w-9" aria-hidden="true" />
        </div>
      </div>
    );
  }

  return (
    <div className="media-stage project-image-stage" aria-label={`${title} 图文展示`}>
      <img src={src} alt={`${title} 项目截图`} />
      <div className="media-badge">Project Screenshot</div>
    </div>
  );
}

function TalentMapMedia() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const hotspots = [
    { label: "作品集", x: "26%", y: "29%" },
    { label: "团队需求", x: "64%", y: "39%" },
    { label: "候选人关系", x: "49%", y: "62%" },
    { label: "AI 工具", x: "82%", y: "29%" }
  ];

  return (
    <figure className="editorial-plate-image">
      <img src={site.editorialPlate.imageSrc} alt={site.editorialPlate.imageAlt} />
      <div className="talent-map-hotspots" aria-label="人才地图信息节点">
        {hotspots.map((hotspot, index) => (
          <button
            key={hotspot.label}
            type="button"
            className={`talent-map-hotspot${activeHotspot === index ? " is-active" : ""}`}
            style={{ left: hotspot.x, top: hotspot.y }}
            onMouseEnter={() => setActiveHotspot(index)}
            onFocus={() => setActiveHotspot(index)}
            onMouseLeave={() => setActiveHotspot(null)}
            onBlur={() => setActiveHotspot(null)}
            aria-label={`查看${hotspot.label}`}
          >
            <span>{hotspot.label}</span>
          </button>
        ))}
      </div>
      <figcaption>AI-assisted game art recruiting map</figcaption>
    </figure>
  );
}

function DimensionSection() {
  // 为每个维度找到对应的项目
  const getProjectsByDimension = (dimensionTitle: string) => {
    return site.aiProjects.filter((p) => p.dimension === dimensionTitle);
  };

  const scrollToProject = (slug: string) => {
    // 先滚动到 AI Lab 板块
    const aiLabSection = document.getElementById("ai-lab");
    if (aiLabSection) {
      aiLabSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="dimensions" className="section-block dimensions-section">
      <div className="section-heading wide">
        <p className="editorial-label">AI Dimensions</p>
        <h2>我对 AI 的探索，落在六个维度上。</h2>
        <p>
          不是零散的工具尝试，而是有清晰脉络的持续探索。每个维度背后都有一套我自己的方法论和思考，也对应着具体的项目实践。
        </p>
      </div>

      <div className="dimension-grid">
        {site.aiDimensions.map((dim) => {
          const Icon = dim.icon;
          const dimensionProjects = getProjectsByDimension(dim.title);
          return (
            <article key={dim.index} className="dimension-card">
              <div className="dimension-card-head">
                <span className="dimension-index">{dim.index}</span>
                <div className="dimension-icon">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3>{dim.title}</h3>
              </div>
              <p className="dimension-philosophy">{dim.philosophy}</p>
              <p className="dimension-reflection">{dim.reflection}</p>
              <div className="dimension-tags">
                {dim.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {dimensionProjects.length > 0 && (
                <div className="dimension-projects">
                  <p className="dimension-projects-label">相关项目</p>
                  <div className="dimension-project-links">
                    {dimensionProjects.map((project) => (
                      <a
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="dimension-project-link"
                      >
                        {project.title.split("·")[0].trim()}
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <div className="paper-texture" aria-hidden="true" />

      <nav className="site-nav" aria-label="主导航">
        <a href="#top" className="nav-brand" aria-label="回到首页">
          <span>{site.brandName}</span>
          <span>{site.fullName}</span>
        </a>
        <div className="nav-links">
          {site.navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="top" className="cover-section">
        <div className="cover-kicker fade-up delay-0">
          <span>Issue 01</span>
          <Dot className="h-4 w-4" aria-hidden="true" />
          <span>Personal Brand</span>
        </div>

        <div className="cover-ribbon fade-up delay-1" aria-label="工作领域索引">
          <div className="cover-ribbon-track">
            {[...coverRibbonItems, ...coverRibbonItems].map(({ label, Icon }, index) => (
              <div className="cover-ribbon-item" key={`${label}-${index}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cover-grid">
          <div className="cover-copy">
            <p className="fade-up delay-1 editorial-label">Recruitment / Game Art / AI</p>
            <h1 className="fade-up delay-2">{site.brandName}</h1>
            <div className="fade-up delay-3 title-lockup">
              <span>{site.fullName}</span>
              <strong>{site.role}</strong>
            </div>
            <p className="fade-up delay-4 cover-headline">{site.headline}</p>
            <p className="fade-up delay-5 cover-intro">{site.intro}</p>

            <div className="fade-up delay-6 cover-actions">
              <a className="primary-link" href="#ai-lab">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                看 AI 项目
                <MoveRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a className="secondary-link" href={site.socialLinks[1].href} target="_blank" rel="noreferrer">
                <Code2 className="h-4 w-4" aria-hidden="true" />
                GitHub
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="fade-up delay-3 cover-portrait-wrap">
            <div className="cover-lines" aria-hidden="true">
              {site.coverLines.map((line, index) => (
                <span key={line}>0{index + 1} / {line}</span>
              ))}
            </div>
            <div className="portrait-frame">
              <Portrait src={site.portrait.src} fallbackSrc={site.portrait.fallbackSrc} alt={site.portrait.alt} />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-block about-section">
        <div className="section-heading">
          <p className="editorial-label">About</p>
          <h2>专业、好奇，也在意人的感受。</h2>
        </div>
        <div className="note-grid">
          {site.notes.map((note, index) => (
            <article key={note.title} className="note-card">
              <span>0{index + 1}</span>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block editorial-plate-section" aria-label="视觉叙事">
        <div className="editorial-plate">
          <div className="editorial-plate-copy">
            <p className="editorial-label">{site.editorialPlate.eyebrow}</p>
            <h2>{site.editorialPlate.title}</h2>
            <p>{site.editorialPlate.body}</p>
            <div className="plate-stat-row">
              {site.editorialPlate.stats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </div>
          </div>
          <TalentMapMedia />
        </div>
      </section>

      {/* 简洁工作经历 */}
      <section id="experience" className="section-block experience-section">
        <div className="section-heading">
          <p className="editorial-label">Experience</p>
          <h2>工作经历</h2>
        </div>
        <div className="experience-list">
          {site.experienceItems.map((item) => (
            <article key={item.period} className="experience-item">
              <div className="experience-period">{item.period}</div>
              <div className="experience-content">
                <h3>{item.place}</h3>
                <p className="experience-title">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="focus" className="section-block focus-section">
        <div className="section-heading wide">
          <p className="editorial-label">Focus</p>
          <h2>美术招聘、人才运营与 AI 工具。</h2>
        </div>
        <div className="focus-list">
          {site.focusItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="focus-row">
                <div className="focus-index">{item.label}</div>
                <div className="focus-icon">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <DimensionSection />

      {/* 个人思考与沉淀 */}
      <section id="reflections" className="section-block reflections-section">
        <div className="section-heading wide">
          <p className="editorial-label">Reflections</p>
          <h2>一些关于招聘、AI 和工作的思考。</h2>
        </div>

        <div className="reflection-grid">
          {site.reflections.map((reflection) => (
            <article key={reflection.index} className="reflection-card">
              <span className="reflection-card-index">{reflection.index} / Reflection</span>
              <h3>{reflection.title}</h3>
              <p>{reflection.body}</p>
              <span className="reflection-card-tag">{reflection.tag}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="ai-lab" className="section-block ai-section">
        <div className="section-heading wide">
          <p className="editorial-label">AI Experiments</p>
          <h2>AI 项目与招聘工具实践。</h2>
          <p>
            七个项目，按上方六个维度排列。每个项目卡片右上角标注所属维度，涉及候选人或真实业务信息的画面，公开版均已做脱敏处理。
          </p>
        </div>

        <div className="project-list">
          {site.aiProjects.map((project) => (
            <article key={project.title} className="project-card">
              <a href={`/projects/${project.slug}`} className="project-card-link" aria-label={`查看 ${project.title} 详情`}>
                <ProjectMedia type={project.mediaType} title={project.title} src={project.mediaSrc} poster={project.posterSrc} />
              </a>
              <div className="project-copy">
                <div className="project-copy-head">
                  <p className="project-issue">{project.issue}</p>
                  <span className="project-dimension">{project.dimension}</span>
                </div>
                <h3>
                  <a href={`/projects/${project.slug}`}>{project.title}</a>
                </h3>
                <p>{project.summary}</p>
                <div className="project-role">{project.role}</div>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.privacyNote ? <p className="project-note">{project.privacyNote}</p> : null}
                <div className="project-card-actions">
                  <a href={`/projects/${project.slug}`} className="view-detail-link">
                    查看详情
                    <MoveRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <ProjectDemoActions project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-block contact-section">
        <div>
          <p className="editorial-label">Back Cover</p>
          <h2>保持联系</h2>
          <p>{site.contactLine}</p>
        </div>
        <div className="contact-actions">
          {site.socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {link.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {site.brandName}</span>
        <span>
          <BookOpenText className="h-4 w-4" aria-hidden="true" />
          {site.mood}
        </span>
      </footer>
    </main>
  );
}
