"use client";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faCompress, faQrcode, faBook, faVideo, faMusic, faPenNib, faWandMagicSparkles, faSearch, faArrowUpRightFromSquare, faGrip, faGlobe, faDesktop, faCode, faStar, faXmark, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects, type Project } from "@/data/tools";
const icons = { faceSmile: faFaceSmile, compress: faCompress, qrcode: faQrcode, book: faBook, video: faVideo, music: faMusic, penNib: faPenNib, wandMagicSparkles: faWandMagicSparkles };
const filters = [
  { name: "All projects", icon: faGrip, value: "All" },
  { name: "Web apps", icon: faGlobe, value: "Web App" },
  { name: "Desktop apps", icon: faDesktop, value: "Desktop Utility" },
  { name: "Developer tools", icon: faCode, value: "Developer Tool" },
  { name: "Favorites", icon: faStar, value: "Featured" },
];
function AppIcon({ project }: { project: Project }) {
  return <span className={`app-icon icon-${project.iconName}`}><FontAwesomeIcon icon={icons[project.iconName]} /></span>;
}
export default function Desktop() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);
  const [about, setAbout] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const shown = projects.filter(p => (filter === "All" || (filter === "Featured" ? p.featured : p.category === filter)) && `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(query.toLowerCase()));
  const title = filters.find(f => f.value === filter)?.name || "All projects";
  useEffect(() => {
    if (selected || about) { opener.current = document.activeElement as HTMLElement; dialog.current?.showModal(); }
    else if (dialog.current?.open) { dialog.current.close(); opener.current?.focus(); }
  }, [selected, about]);
  function close() { setSelected(null); setAbout(false); }
  function reset() { setFilter("All"); setQuery(""); }
  return <div className="desktop">
<main className="workspace">
<section className="library" aria-label="Project library">
        <div className="window-bar"><div className="window-brand"><img src="/logo-sm.svg" alt="" /><span>MiuBitz</span></div><span>Project Library</span><span className="window-count">{projects.length} projects</span></div>
        <div className="library-body">
          <aside className="sidebar"><span className="sidebar-label">LIBRARY</span><nav aria-label="Project categories">{filters.map(f => <button key={f.value} className={filter === f.value ? "active" : ""} onClick={() => setFilter(f.value)} aria-label={f.name} title={f.name} aria-pressed={filter === f.value}><FontAwesomeIcon icon={f.icon} /><span>{f.name}</span><small>{projects.filter(p => f.value === "All" || (f.value === "Featured" ? p.featured : p.category === f.value)).length}</small></button>)}</nav></aside>
          <div className="library-content">
            <div className="library-toolbar"><div><h2>{title}</h2><p>Find your next handy little tool.</p></div><label className="search"><FontAwesomeIcon icon={faSearch} /><input type="search" placeholder="Search projects…" aria-label="Search projects" value={query} onChange={e => setQuery(e.target.value)} /></label></div>
            <div className="app-grid">{shown.map(project => <button className="app-tile" key={project.id} onClick={() => setSelected(project)} aria-label={`Open ${project.name} details`}><span className="icon-holder"><AppIcon project={project} />{project.featured && <span className="favorite-dot" title="Featured project">★</span>}</span><strong>{project.name}</strong><span className="app-category">{project.category === "Desktop Utility" ? "Desktop app" : project.category}</span></button>)}</div>
            {shown.length === 0 && <div className="empty-state"><FontAwesomeIcon icon={faSearch} /><h3>No projects found</h3><p>Try a different search or category.</p><button onClick={reset}>Show all projects</button></div>}
            <div className="library-status"><span>{shown.length} {shown.length === 1 ? "project" : "projects"}<span className="status-divider">·</span>Click an app to explore</span><span><i /> All open source</span></div>
          </div>
        </div>
      </section>
</main>
    <footer className="dock-area"><nav className="dock" aria-label="Quick launch"><button className="dock-home" onClick={reset} aria-label="All projects" data-tooltip="Project library"><FontAwesomeIcon icon={faGrip} /><i /></button><span className="dock-divider" />{projects.filter(p => p.featured).slice(0, 4).map(p => <button key={p.id} onClick={() => setSelected(p)} aria-label={`Open ${p.name} details`} data-tooltip={p.name}><AppIcon project={p} /></button>)}<span className="dock-divider" /><button className="dock-about" onClick={() => setAbout(true)} aria-label="About" data-tooltip="About"><FontAwesomeIcon icon={faCircleInfo} /></button><a className="dock-github" href="https://github.com/MiuBitz" target="_blank" rel="noopener noreferrer" aria-label="MiuBitz on GitHub" data-tooltip="GitHub"><FontAwesomeIcon icon={faGithub} /></a></nav></footer>
    <dialog ref={dialog} className="project-dialog" onCancel={e => { e.preventDefault(); close(); }} onClick={e => { if (e.target === e.currentTarget) close(); }} aria-labelledby="dialog-title">
      <div className="detail-window"><div className="detail-bar"><span>{selected ? "Project details" : "About this desktop"}</span><button onClick={close} aria-label="Close window" autoFocus><FontAwesomeIcon icon={faXmark} /></button></div>
      {selected ? <div className="detail-content"><AppIcon project={selected} /><span className="detail-category">{selected.category}</span><h2 id="dialog-title">{selected.name}</h2><p>{selected.description}</p><div className="detail-meta"><span>Free & open source</span><span>{selected.website ? "Runs in your browser" : "Desktop / developer project"}</span></div><div className="detail-actions"><a className="launch-button" href={selected.website || selected.github} target="_blank" rel="noopener noreferrer">{selected.website ? "Launch app" : "View project"}<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a><a className="source-button" href={selected.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />Source code</a></div></div> : <div className="detail-content"><span className="about-mark">✦</span><span className="detail-category">The person behind the pixels</span><h2 id="dialog-title">Hi, I’m Kasun Miu.</h2><p>I build small tools for everyday workflows. MiuBitz is a home for those experiments - web apps, desktop utilities, and little things that make work easier.</p><div className="detail-actions"><a className="launch-button" href="https://kasunmiu.github.io/" target="_blank" rel="noopener noreferrer">Meet the maker <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a><a className="source-button" href="https://github.com/MiuBitz" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />GitHub</a></div></div>}
      </div>
    </dialog>
  </div>;
}




