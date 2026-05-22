"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";

type Person = {
  name: string;
  role: string;
  bio?: string;
  focus?: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function PersonModal({
  person,
  tone,
  titleId,
  onClose,
}: {
  person: Person;
  tone: "orange" | "blue";
  titleId: string;
  onClose: () => void;
}) {
  const isOrange = tone === "orange";
  const accentColor = isOrange ? "var(--orange-400)" : "var(--blue-400)";
  const accentBg = isOrange ? "rgba(249,115,22,0.12)" : "rgba(59,130,246,0.12)";
  const accentBorder = isOrange ? "rgba(249,115,22,0.22)" : "rgba(59,130,246,0.22)";
  const gradStart = isOrange ? "var(--orange-500)" : "var(--blue-500)";
  const gradEnd = isOrange ? "var(--orange-700)" : "var(--blue-700)";

  return (
    <div
      className="person-modal-backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        className="person-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(e) => e.stopPropagation()}
        style={{ padding: 0, overflow: "hidden" }}
      >
        {/* Coloured header band */}
        <div
          style={{
            background: `linear-gradient(135deg, ${gradStart}, ${gradEnd})`,
            padding: "28px 28px 24px",
            position: "relative",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close person details"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 8,
              color: "#fff",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={16} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Large avatar */}
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 16,
                background: "rgba(255,255,255,0.25)",
                border: "2px solid rgba(255,255,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.6rem",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {getInitials(person.name)}
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                Team Member
              </p>
              <h2 id={titleId} style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.2rem, 4vw, 1.5rem)", lineHeight: 1.1, margin: 0 }}>
                {person.name}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.8rem", fontWeight: 600, marginTop: 4 }}>
                {person.role}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px 28px", display: "grid", gap: 16 }}>
          {/* Bio */}
          <div
            style={{
              background: "var(--glass-card-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: 10,
              padding: "16px 18px",
            }}
          >
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
              Profile
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
              {person.bio ??
                `${person.name} contributes to Origin Infinity as ${person.role}. More details will be added soon.`}
            </p>
          </div>

          {/* Focus areas */}
          {person.focus?.length ? (
            <div
              style={{
                background: accentBg,
                border: `1px solid ${accentBorder}`,
                borderRadius: 10,
                padding: "16px 18px",
              }}
            >
              <p style={{ color: accentColor, fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
                Focus Areas
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {person.focus.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "var(--glass-bg)",
                      border: `1px solid ${accentBorder}`,
                      borderRadius: 6,
                      padding: "5px 12px",
                      fontSize: "0.83rem",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* Links */}
          {person.links?.length ? (
            <div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>
                Links
              </p>
              <div style={{ display: "grid", gap: 8 }}>
                {person.links.map((link) => (
                  <a
                    key={`${person.name}-${link.href}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: 8,
                      padding: "11px 14px",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ─── Card ───────────────────────────────────────────────────── */
export function PersonCard({
  person,
  index = 0,
  compact = false,
}: {
  person: Person;
  index?: number;
  compact?: boolean;
}) {
  const tone = (index % 2 === 0 ? "orange" : "blue") as "orange" | "blue";
  const isOrange = tone === "orange";

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const titleId = useId();

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const accentColor = isOrange ? "var(--orange-400)" : "var(--blue-400)";
  const accentBg = isOrange ? "rgba(249,115,22,0.10)" : "rgba(59,130,246,0.10)";
  const accentBorder = isOrange ? "rgba(249,115,22,0.20)" : "rgba(59,130,246,0.20)";
  const gradStart = isOrange ? "var(--orange-500)" : "var(--blue-500)";
  const gradEnd = isOrange ? "var(--orange-700)" : "var(--blue-700)";
  const glowShadow = isOrange ? "var(--glass-shadow-orange)" : "var(--glass-shadow-blue)";

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        aria-label={`Open details for ${person.name}`}
        style={{
          background: "var(--glass-card-bg)",
          border: "1px solid var(--glass-border)",
          borderRadius: 16,
          boxShadow: "var(--glass-shadow)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease",
          minHeight: compact ? 0 : 280,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.boxShadow = glowShadow;
          (e.currentTarget as HTMLElement).style.borderColor = accentBorder;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "var(--glass-shadow)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--glass-border)";
        }}
      >
        {/* Accent top bar */}
        <div
          style={{
            height: 4,
            background: `linear-gradient(90deg, ${gradStart}, ${gradEnd})`,
            flexShrink: 0,
          }}
        />

        {/* Card body */}
        <div style={{ padding: compact ? "16px 18px" : "22px 24px", display: "flex", flexDirection: "column", flex: 1, gap: 0 }}>

          {/* Header: avatar + name + role */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: compact ? 0 : 16 }}>
            {/* Avatar */}
            <div
              style={{
                width: compact ? 42 : 52,
                height: compact ? 42 : 52,
                borderRadius: 12,
                background: `linear-gradient(135deg, ${gradStart}, ${gradEnd})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: compact ? "0.95rem" : "1.1rem",
                color: "#fff",
                flexShrink: 0,
                boxShadow: isOrange
                  ? "0 4px 14px rgba(249,115,22,0.35)"
                  : "0 4px 14px rgba(59,130,246,0.35)",
              }}
            >
              {getInitials(person.name)}
            </div>

            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: compact ? "0.95rem" : "1.05rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.25,
                  margin: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {person.name}
              </p>
              <span
                style={{
                  display: "inline-block",
                  marginTop: 4,
                  background: accentBg,
                  border: `1px solid ${accentBorder}`,
                  borderRadius: 6,
                  padding: "2px 8px",
                  fontSize: "0.73rem",
                  fontWeight: 700,
                  color: accentColor,
                  letterSpacing: "0.02em",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                {person.role}
              </span>
            </div>
          </div>

          {/* Bio — hidden in compact */}
          {!compact && person.bio && (
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                margin: 0,
                flex: 1,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {person.bio}
            </p>
          )}

          {/* Focus pills — hidden in compact */}
          {!compact && person.focus?.length ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
              {person.focus.slice(0, 3).map((item) => (
                <span
                  key={item}
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    borderRadius: 6,
                    padding: "3px 9px",
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              ))}
              {person.focus.length > 3 && (
                <span
                  style={{
                    background: accentBg,
                    border: `1px solid ${accentBorder}`,
                    borderRadius: 6,
                    padding: "3px 9px",
                    fontSize: "0.75rem",
                    color: accentColor,
                    fontWeight: 600,
                  }}
                >
                  +{person.focus.length - 3} more
                </span>
              )}
            </div>
          ) : null}

          {/* Footer CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: compact ? 12 : 18,
              paddingTop: compact ? 10 : 14,
              borderTop: "1px solid var(--glass-border)",
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: accentColor,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              View profile
              <ArrowUpRight size={13} />
            </span>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Origin Infinity
            </span>
          </div>
        </div>
      </article>

      {isOpen && isMounted
        ? createPortal(
          <PersonModal
            person={person}
            tone={tone}
            titleId={titleId}
            onClose={() => setIsOpen(false)}
          />,
          document.body,
        )
        : null}
    </>
  );
}

export function PersonGrid({
  people,
  compact = false,
}: {
  people: Person[];
  compact?: boolean;
}) {
  return (
    <div className={`person-grid ${compact ? "person-grid-compact1" : ""}`}>
      {people.map((person, index) => (
        <PersonCard
          key={`${person.name}-${person.role}`}
          person={person}
          index={index}
          compact={compact}
        />
      ))}
    </div>
  );
}
