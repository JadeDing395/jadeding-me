"use client";

import { Eye, EyeOff, GraduationCap } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { ResumeProfile } from "@/data/site";

export function ResumeSection({ profile }: { profile: ResumeProfile }) {
  const searchParams = useSearchParams();
  const hiddenFromUrl = ["0", "hide", "false"].includes(searchParams.get("resume") ?? "");
  const [isHidden, setIsHidden] = useState(false);

  if (hiddenFromUrl) {
    return null;
  }

  if (isHidden) {
    return (
      <section id="resume" className="section-block resume-section resume-section-collapsed">
        <div className="resume-hidden-line">
          <div>
            <p className="editorial-label">{profile.eyebrow}</p>
            <h2>履历已隐藏</h2>
          </div>
          <button type="button" className="resume-toggle" onClick={() => setIsHidden(false)}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            显示履历
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="resume" className="section-block resume-section">
      <div className="resume-heading">
        <p className="editorial-label">{profile.eyebrow}</p>
        <h2>{profile.title}</h2>
        <button type="button" className="resume-toggle" onClick={() => setIsHidden(true)}>
          <EyeOff className="h-4 w-4" aria-hidden="true" />
          隐藏本段
        </button>
      </div>

      <div className="resume-stat-row">
        {profile.stats.map((stat) => (
          <span key={stat}>{stat}</span>
        ))}
      </div>

      <div className="resume-layout">
        <div className="resume-work-list">
          {profile.work.map((item) => (
            <article key={`${item.period}-${item.company}`} className="resume-work-item">
              <div className="resume-work-meta">
                <span>{item.period}</span>
                <strong>{item.company}</strong>
              </div>
              <div className="resume-work-copy">
                <h3>{item.title}</h3>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <aside className="education-panel" aria-label="教育背景">
          <div className="education-panel-heading">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
            <span>Education</span>
          </div>
          {profile.education.map((item) => (
            <article key={`${item.school}-${item.degree}`} className="education-item">
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <span>{item.major}</span>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
