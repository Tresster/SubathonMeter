import type { Streamer } from '../types.js';
import { CUTEDOG, CUTEDOG_LINEAR_GRADIENT } from '../consts.js';

export function getHeaderHtmlDivElement(): Readonly<HTMLDivElement> {
  const headerHtmlDivElement = document.createElement('div');
  headerHtmlDivElement.classList.add('header');
  headerHtmlDivElement.innerHTML = `
        <span class="name">NAME</span>
        <span class="subs">SUBS</span>
      `;

  return headerHtmlDivElement;
}

export function getEntryHtmlDivElement(): HTMLDivElement {
  const entryHtmlDivElement = document.createElement('div');
  entryHtmlDivElement.classList.add('entry');

  return entryHtmlDivElement;
}

export function getOverlayHtmlDivElement(
  streamer: Streamer,
  shuffledGradients: readonly string[],
  percentage: number,
  index: number
): Readonly<HTMLDivElement> {
  const overlayHtmlDivElement = document.createElement('div');
  overlayHtmlDivElement.classList.add('overlay');
  overlayHtmlDivElement.style.width = `${percentage}%`;

  if (streamer.name === CUTEDOG) {
    overlayHtmlDivElement.style.background = CUTEDOG_LINEAR_GRADIENT; // blue color for CuteDog_
  } else {
    const randomGradient = shuffledGradients[index % shuffledGradients.length];
    overlayHtmlDivElement.style.background = randomGradient;
  }

  return overlayHtmlDivElement;
}