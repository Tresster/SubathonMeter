import { RANKING_ELEMENT_ID } from '../consts.js';

export function getRankingHtmlElement(innerHtml: string): Readonly<HTMLElement | null> {
  const rankingDivHtmlElement = document.getElementById(RANKING_ELEMENT_ID);
  if (rankingDivHtmlElement !== null) rankingDivHtmlElement.innerHTML = innerHtml;

  return rankingDivHtmlElement;
}
