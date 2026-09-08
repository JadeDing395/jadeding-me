"use client";

import { CirclePlay, Code2, ExternalLink, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/site";

function isLocalMedia(href: string) {
  return href.startsWith("/") && /\.(mp4|mov|webm|png|jpe?g|gif)$/i.test(href);
}

function isVideo(href: string) {
  return /\.(mp4|mov|webm)$/i.test(href);
}

export function ProjectDemoActions({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const canPreview = useMemo(() => isLocalMedia(project.demoHref), [project.demoHref]);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="project-actions">
        {canPreview ? (
          <button type="button" onClick={() => setIsOpen(true)}>
            <CirclePlay className="h-4 w-4" aria-hidden="true" />
            查看演示
          </button>
        ) : (
          <a href={project.demoHref} target="_blank" rel="noreferrer">
            <CirclePlay className="h-4 w-4" aria-hidden="true" />
            查看演示
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}

        {project.githubHref ? (
          <a href={project.githubHref} target="_blank" rel="noreferrer">
            <Code2 className="h-4 w-4" aria-hidden="true" />
            GitHub
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : null}
      </div>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div className="demo-modal" role="dialog" aria-modal="true" aria-label={`${project.title} 演示预览`}>
              <button type="button" className="demo-modal-backdrop" onClick={() => setIsOpen(false)} aria-label="关闭预览" />
              <div className="demo-modal-panel">
                <div className="demo-modal-header">
                  <div>
                    <p>{project.issue}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <button type="button" className="demo-modal-close" onClick={() => setIsOpen(false)} aria-label="关闭预览">
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="demo-modal-stage">
                  {isVideo(project.demoHref) ? (
                    <video src={project.demoHref} poster={project.posterSrc} controls autoPlay playsInline />
                  ) : (
                    <img src={project.demoHref} alt={`${project.title} 演示图`} />
                  )}
                </div>
                {project.privacyNote ? <p className="demo-modal-note">{project.privacyNote}</p> : null}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
