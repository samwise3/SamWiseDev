import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    title: string;
    description?: string;
    longDescription?: string;
    src?: string; // external link
    to?: string; // internal route; takes precedence over src for the title link
    imgsrc?: string;
    alt?: string;
    tags?: string[];
    meta?: React.ReactNode;
}

function Card({
    title,
    description,
    longDescription,
    imgsrc,
    alt,
    src,
    to,
    tags = [],
    meta,
}: CardProps): React.ReactElement {
    const [expanded, setExpanded] = useState(false);

    let titleContent: React.ReactNode = title;
    if (to) {
        titleContent = <Link to={to}>{title}</Link>;
    } else if (src) {
        titleContent = <a href={src} target="_blank" rel="noopener noreferrer">{title} ↗</a>;
    }

    return (
        <div className="custom-card">
            <div className="custom-card-content">
                <h3 className="custom-card-title">{titleContent}</h3>
                {description && <p className="custom-card-desc">{description}</p>}
                {meta && <div className="card-meta">{meta}</div>}
                {tags.length > 0 && (
                    <div className="card-tags">
                        {tags.map((tag, idx) => (
                            <span className="card-tag" key={idx}>{tag}</span>
                        ))}
                    </div>
                )}
                {longDescription && (
                    <div className="card-toggle-row">
                        <button
                            className="card-toggle-btn"
                            onClick={() => setExpanded(e => !e)}
                            aria-expanded={expanded}
                        >
                            {expanded ? 'Hide details' : 'Show details'}
                            <span className={`card-toggle-icon${expanded ? ' open' : ''}`}>▼</span>
                        </button>
                    </div>
                )}
                {expanded && longDescription && (
                    <div className="card-long-desc">
                        {longDescription}
                    </div>
                )}
            </div>
            {imgsrc && (
                <img
                    className="custom-card-img"
                    src={imgsrc}
                    alt={alt || title}
                />
            )}
        </div>
    );
}

export default Card;
