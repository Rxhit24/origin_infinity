"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, X } from "lucide-react";

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

export function PersonCard({
  person,
  index = 0,
  compact = false,
}: {
  person: Person;
  index?: number;
  compact?: boolean;
}) {
  const tone = index % 2 === 0 ? "orange" : "blue";
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const modal = (
    <div className="person-modal-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
      <div
        className="person-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="person-modal-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close person details"
        >
          <X size={18} />
        </button>

        <div className="person-modal-header">
          <div className="person-avatar person-modal-avatar" aria-hidden="true">
            {getInitials(person.name)}
          </div>
          <div>
            <p className="person-modal-kicker">Person details</p>
            <h2 id={titleId} className="person-modal-title">
              {person.name}
            </h2>
            <p className="person-modal-role">{person.role}</p>
          </div>
        </div>

        <div className="person-modal-body">
          <section>
            <h3>Profile</h3>
            <p>
              {person.bio ??
                `${person.name} contributes to Origin Infinity as ${person.role}. More detailed profile information can be added from the site content file.`}
            </p>
          </section>

          {person.focus?.length ? (
            <section>
              <h3>Focus Areas</h3>
              <ul className="person-modal-list">
                {person.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section>
            <h3>Available Links</h3>
            {person.links?.length ? (
              <div className="person-link-list">
                {person.links.map((link) => (
                  <a key={`${person.name}-${link.href}`} href={link.href} target="_blank" rel="noreferrer">
                    <span>{link.label}</span>
                    <ExternalLink size={15} />
                  </a>
                ))}
              </div>
            ) : (
              <p>No public links are available for this person yet.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        className={`person-card ${compact ? "person-card-compact" : "person-card-featured"} ${
          tone === "orange" ? "person-card-orange" : "person-card-blue"
        }`}
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        aria-label={`Open details for ${person.name}`}
      >
        <span className="person-card-header">
          <span className="person-avatar" aria-hidden="true">
            {getInitials(person.name)}
          </span>
          <span>
            <span className="person-name">{person.name}</span>
            <span className="person-role">{person.role}</span>
          </span>
        </span>
        {person.bio ? <span className="person-bio">{person.bio}</span> : null}
        {person.focus?.length ? (
          <ul className="person-focus-list" aria-label={`${person.name} focus areas`}>
            {person.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        <span className="person-card-action">View details</span>
      </article>

      {isOpen && isMounted ? createPortal(modal, document.body) : null}
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
    <div className={`person-grid ${compact ? "person-grid-compact" : ""}`}>
      {people.map((person, index) => (
        <PersonCard key={`${person.name}-${person.role}`} person={person} index={index} compact={compact} />
      ))}
    </div>
  );
}
