import * as React from 'react'
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from "react";

const ANIMATED_LOGO_ID = 'animatedLogo'
const POOL_SVG_ICON_ID = 'POOL_SVG_ICON'

const style: React.CSSProperties = {
    width: '200px',
    position: 'absolute',
    top: '40%',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto'
}

const Icon = () => (
    <svg id={POOL_SVG_ICON_ID} viewBox="0 0 259.78 158.85" style={{ display: 'none' }}>
        <g className="lines" fill="none" fillRule="evenodd" stroke="#1d1d1b">
            <path
                strokeDasharray="260.32"
                strokeDashoffset="259.946px;"
                d="M0 42.67h13.98v116.18H0z"
            ></path>
            <path
                strokeDasharray="385.277"
                strokeDashoffset="385.277px;"
                d="M99.23 150a25.1 25.1 0 10-25.1 25.11A25.1 25.1 0 0099.23 150m-25.1-36.21A36.21 36.21 0 1137.91 150a36.21 36.21 0 0136.22-36.21"
                transform="translate(-19.98 -70.57)"
            ></path>
            <path
                strokeDasharray="378.871"
                strokeDashoffset="378.871px;"
                d="M109.73 150a35.61 35.61 0 11-35.6-35.6 35.6 35.6 0 0135.6 35.6zm-10.93 0a24.68 24.68 0 11-24.68-24.68A24.68 24.68 0 0198.8 150z"
                transform="translate(-19.98 -70.57)"
            ></path>
            <path
                strokeDasharray="385.287"
                strokeDashoffset="385.287px;"
                d="M174.88 150a25.1 25.1 0 10-25.1 25.11 25.1 25.1 0 0025.1-25.11m-25.1-36.21A36.21 36.21 0 11113.57 150a36.21 36.21 0 0136.22-36.21"
                transform="translate(-19.98 -70.57)"
            ></path>
            <path
                strokeDasharray="378.871"
                strokeDashoffset="378.871px;"
                d="M185.39 150a35.61 35.61 0 11-35.6-35.6 35.6 35.6 0 0135.6 35.6zm-10.92 0a24.68 24.68 0 11-24.68-24.68A24.68 24.68 0 01174.46 150z"
                transform="translate(-19.98 -70.57)"
            ></path>
            <path
                strokeDasharray="385.287"
                strokeDashoffset="385.287px;"
                d="M250.54 150a25.1 25.1 0 10-25.1 25.11 25.1 25.1 0 0025.1-25.11m-25.1-36.21A36.21 36.21 0 11189.23 150a36.21 36.21 0 0136.22-36.21"
                transform="translate(-19.98 -70.57)"
            ></path>
            <path
                strokeDasharray="378.946"
                strokeDashoffset="378.946px;"
                d="M261 150a35.61 35.61 0 11-35.6-35.6A35.6 35.6 0 01261 150zm-10.92 0a24.68 24.68 0 11-24.68-24.68A24.68 24.68 0 01250.12 150z"
                transform="translate(-19.98 -70.57)"
            ></path>
            <path
                strokeDasharray="260.32"
                strokeDashoffset="260.32px;"
                d="M245.8 0h13.98v116.18H245.8z"
            ></path>
        </g>
    </svg>
);

export const AnimatedLogo = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {

    const fillAnimatedLogo = () => {
        const SVG_COLOR = '#1d1d1b';
        const animatedLogoNode = document.querySelector(`#${ANIMATED_LOGO_ID}`);
        if (!animatedLogoNode) return;
        const svgPaths = animatedLogoNode.querySelectorAll('svg path');
        svgPaths.forEach(svgPath => {
            svgPath.setAttribute('fill', SVG_COLOR);
        });
    }

    const animation = () => {
        const animatedLogoNode = document.querySelector(`#${ANIMATED_LOGO_ID}`) as HTMLElement | null;
        if (!animatedLogoNode) return;
        animatedLogoNode.style.display = 'block';
        const svgIconNode = document.querySelector(`#${POOL_SVG_ICON_ID}`) as HTMLElement | null;
        if (svgIconNode) {
            svgIconNode.style.display = 'block';
        }

        anime({
            targets: `#${ANIMATED_LOGO_ID} .lines path`,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: (el: any, i: number) => {
                return i * 150;
            },
            direction: 'normal',
            loop: 1,
            complete: function () {
                fillAnimatedLogo();
                setTimeout(() => {
                    animatedLogoNode.style.display = 'none';
                    if (onAnimationComplete) onAnimationComplete();
                }, 400);
            },
        });
    }

    useEffect(() => {
        animation();
    }, []);

    return <div id={ANIMATED_LOGO_ID} style={style}>
        <Icon />
    </div>
}
