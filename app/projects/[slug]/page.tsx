import {
  ArrowLeft,
  ArrowUpRight,
  BookOpenText,
  CirclePlay,
  Code2,
  Lightbulb,
  Sparkles,
  Target
} from "lucide-react";
import { site } from "@/data/site";

export function generateStaticParams() {
  return site.aiProjects.map((project) => ({
    slug: project.slug
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = site.aiProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-paper text-ink">
        <div className="project-detail-container">
          <p>项目未找到</p>
          <a href="/" className="back-button">
            <ArrowLeft className="h-4 w-4" />
            返回主页
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper text-ink project-detail-page">
      <div className="paper-texture" aria-hidden="true" />

      {/* 顶部导航 */}
      <nav className="site-nav" aria-label="主导航">
        <a href="/" className="nav-brand" aria-label="回到首页">
          <span>{site.brandName}</span>
          <span>{site.fullName}</span>
        </a>
        <div className="nav-links">
          <a href="/#ai-lab">← 返回 AI Lab</a>
        </div>
      </nav>

      <div className="project-detail-container">
        {/* 返回按钮 */}
        <a href="/#ai-lab" className="back-button">
          <ArrowLeft className="h-4 w-4" />
          返回 AI Lab
        </a>

        {/* 项目标题区 */}
        <header className="project-detail-header">
          <div className="project-detail-meta">
            <span className="project-issue">{project.issue}</span>
            <span className="project-dimension">{project.dimension}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="project-detail-summary">{project.summary}</p>
          <div className="project-detail-role">{project.role}</div>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>

        {/* 媒体展示 */}
        <section className="project-detail-media">
          {project.mediaType === "video" && (
            <div className="media-stage project-video-stage">
              <video
                src={project.mediaSrc}
                poster={project.posterSrc}
                controls
                playsInline
              />
              <div className="media-badge">
                <CirclePlay className="h-4 w-4" aria-hidden="true" />
                演示视频
              </div>
            </div>
          )}
          {project.mediaType === "image" && (
            <div className="media-stage project-image-stage">
              <img src={project.mediaSrc} alt={`${project.title} 项目截图`} />
              <div className="media-badge">项目截图</div>
            </div>
          )}
          {project.mediaType === "code" && (
            <div className="media-stage code-stage">
              <div className="code-line w-10/12" />
              <div className="code-line w-7/12" />
              <div className="code-line accent w-9/12" />
              <div className="code-line w-6/12" />
              <div className="code-mark">
                <Code2 className="h-9 w-9" aria-hidden="true" />
              </div>
              <p className="code-placeholder-note">产品演示待补充</p>
            </div>
          )}
          {project.privacyNote && (
            <p className="project-note">{project.privacyNote}</p>
          )}
        </section>

        {/* Why - 为什么做 */}
        <section className="project-detail-section">
          <div className="section-label">
            <Target className="h-5 w-5" aria-hidden="true" />
            <span>Why · 为什么做</span>
          </div>
          <div className="project-detail-content">
            <p>{project.why}</p>
          </div>
        </section>

        {/* How - 怎么做的 */}
        <section className="project-detail-section">
          <div className="section-label">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <span>How · 怎么做的</span>
          </div>
          <div className="project-detail-content">
            <p>{project.how}</p>
          </div>
        </section>

        {/* 核心功能 */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="project-detail-section">
            <div className="section-label">
              <Lightbulb className="h-5 w-5" aria-hidden="true" />
              <span>核心能力</span>
            </div>
            <ul className="project-highlights-detail">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 思考与沉淀 */}
        <section className="project-detail-section reflection-section">
          <div className="section-label">
            <BookOpenText className="h-5 w-5" aria-hidden="true" />
            <span>思考与沉淀</span>
          </div>
          <div className="project-detail-content reflection-content">
            <p>{project.reflection}</p>
          </div>
        </section>

        {/* 相关链接 */}
        <section className="project-detail-links">
          {project.githubHref && (
            <a href={project.githubHref} target="_blank" rel="noreferrer" className="detail-link">
              <Code2 className="h-4 w-4" aria-hidden="true" />
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {project.demoHref && project.mediaType !== "code" && (
            <a href={project.demoHref} target="_blank" rel="noreferrer" className="detail-link">
              <CirclePlay className="h-4 w-4" aria-hidden="true" />
              查看演示
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </section>

        {/* 底部返回 */}
        <div className="project-detail-footer">
          <a href="/#ai-lab" className="back-button large">
            <ArrowLeft className="h-4 w-4" />
            返回 AI Lab 查看更多项目
          </a>
        </div>
      </div>

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
