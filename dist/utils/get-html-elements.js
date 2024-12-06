import { RANKING_ELEMENT_ID } from '../consts.js';
export function getRankingHtmlElement(innerHtml) {
    const rankingDivHtmlElement = document.getElementById(RANKING_ELEMENT_ID);
    if (rankingDivHtmlElement !== null)
        rankingDivHtmlElement.innerHTML = innerHtml;
    return rankingDivHtmlElement;
}
//# sourceMappingURL=get-html-elements.js.map