export function SectionHead({
  eyebrow,
  title,
  description,
  copy,
  action,
  ai = false,
}: {
  eyebrow?: string;
  description?: string;
  title: string;
  copy?: string;
  action?: React.ReactNode;
  ai?: boolean;
}) {
  return (
    <div className="section-head">
      <div>
        {eyebrow ? <span className={`eyebrow ${ai ? "ai" : ""}`}>{eyebrow}</span> : null}
        <h2 className="h2" style={{ marginTop: eyebrow ? 16 : 0 }}>
          {title}
        </h2>
        {copy ? <p className="lead">{copy}</p> : null}
        {description ? <p className="lead">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
