import { h } from '@stencil/core';

export function renderHrefHandler(href: string) {
    return (
        <a
            href={href}
            style={{
                display: 'block',
                position: 'absolute',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0'
            }}
        >
        </a>
    )
}