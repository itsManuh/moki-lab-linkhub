export default function SocialCard({ id, name, url, desc, icon, badge }) {
  return (
    <div className={`card ${id}`} role="listitem">
      <div className="icon" aria-hidden>{icon}</div>
      <a href={url} target="_blank" rel="noopener" aria-label={`${name} — ${desc || ""}`}>
        <span className="name">{name}</span>
        {desc && <span className="desc">{desc}</span>}
      </a>
      {badge && <span className="badge">{badge}</span>}
    </div>
  );
}
