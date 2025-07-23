import React from 'react';

interface CardProps {
    title: string;
    description?: string;
    src: string;
    imgsrc?: string;
    alt?: string;
}

function Card({ title, description, imgsrc, alt, src }: CardProps): React.ReactElement {
    return (
        <div className="custom-card">
            {imgsrc && (
            <img className="custom-card-img" src={imgsrc} alt={alt || title} />
            )}
            <div className="custom-card-content">
            <h3 className="custom-card-title">
                <a href={src} target="_blank" rel="noopener noreferrer">{title}</a>
            </h3>
            {description && <p className="custom-card-desc">{description}</p>}
            </div>
        </div>
    );
}

export default Card;