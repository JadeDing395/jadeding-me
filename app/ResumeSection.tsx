"use client";

import type { ResumeProfile } from "@/data/site";

export function ResumeSection({ profile }: { profile: ResumeProfile }) {
  return (
    <section id="resume" className="section-block resume-section">
      <div className="resume-heading">
        <p className="editorial-label">{profile.eyebrow}</p>
        <h2>{profile.title}</h2>
      </div>

      <div className="resume-stat-row">
        {profile.stats.map((stat) => (
          <span key={stat}>{stat}</span>
        ))}
      </div>

      <div className="resume-layout resume-layout-no-education">
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
      </div>
    </section>
  );
}
