import React, { useState } from 'react';

interface CardProps {
    title: string;
    description?: string;
    longDescription?: string;
    src: string;
    imgsrc?: string;
    alt?: string;
    tags?: string[];
}

function Card({
    title,
    description,
    longDescription,
    imgsrc,
    alt,
    src,
    tags = [],
}: CardProps): React.ReactElement {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="custom-card">
            {imgsrc && (
                <img className="custom-card-img" src={imgsrc} alt={alt || title} />
            )}
            <div className="custom-card-content">
                <h3 className="custom-card-title">
                    <a href={src} target="_blank" rel="noopener noreferrer">{title}</a>
                </h3>
                {tags.length > 0 && (
                    <div className="card-tags">
                        {tags.map((tag, idx) => (
                            <span className="card-tag" key={idx}>{tag}</span>
                        ))}
                    </div>
                )}
                {description && <p className="custom-card-desc">{description}</p>}
                <div className="card-toggle-row">
                    {longDescription && (
                        <>
                            <button
                                className="card-toggle-btn"
                                onClick={() => setExpanded(e => !e)}
                                aria-expanded={expanded}
                                aria-label={expanded ? "Hide details" : "Show details"}
                            >
                                <span
                                    style={{
                                        display: 'inline-block',
                                        transition: 'transform 0.2s',
                                        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'
                                    }}
                                >
                                    ▼
                                </span>
                            </button>
                        </>
                    )}
                </div>
                {expanded && longDescription && (
                    <div className="card-long-desc">
                        {longDescription}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;