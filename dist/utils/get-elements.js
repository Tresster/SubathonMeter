import { WINNING_SELECTOR, NA } from '../consts.js';
export function getWinningElement(winningCountry, badEmotesRandomUrl, goodEmotesRandomUrl) {
    const winningElement = document.querySelector(WINNING_SELECTOR);
    if (winningElement === null)
        return null;
    const isNaWinning = winningCountry.name === NA;
    winningElement.innerHTML = `${winningCountry.name} IS WINNING <img src="${isNaWinning ? goodEmotesRandomUrl : badEmotesRandomUrl}" alt="Emote" style="vertical-align: middle;">`;
    return winningElement;
}
//# sourceMappingURL=get-elements.js.map