export default function LongSocialCard({ id, name, url, desc, icon }) {
  return (
    <div className={`card long-card ${id}`} role="listitem">
      <div className="icon" aria-hidden>{icon}</div>
      <a href={url} target="_blank" rel="noopener" aria-label={`${name} — ${desc || ""}`}>
        <span className="name">{name}</span>
        {desc && <span className="desc">{desc}</span>}
      </a>
    </div>
  );
}