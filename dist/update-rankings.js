import { gradients, goodEmotes, badEmotes, API_URL, SEVEN_CDN, EMOTE_SIZE, EMOTE_FORMAT, CUTEDOG } from './consts.js';
import { shuffleArray } from './utils/shuffle-array.js';
import { getCountries } from './utils/get-countries.js';
import { getWinningElement } from './utils/get-elements.js';
import { getRankingHtmlElement } from './utils/get-html-elements.js';
import { getHeaderHtmlDivElement, getEntryHtmlDivElement, getOverlayHtmlDivElement } from './utils/get-html-div-elements.js';
import { getFlagImgHtmlDivElement } from './utils/get-html-image-elements.js';
// do the stuff xdd
export async function updateRankings() {
    try {
        const response = await fetch(API_URL);
        const streamersUnsorted = (await response.json());
        const streamersSorted = [...streamersUnsorted].sort((streamer1, streamer2) => streamer2.subs - streamer1.subs);
        const badEmotesRandomIndex = Math.floor(Math.random() * badEmotes.length);
        const badEmotesRandomUrl = `${SEVEN_CDN}/${badEmotes[badEmotesRandomIndex]}/${EMOTE_SIZE}x.${EMOTE_FORMAT}`;
        const goodEmotesRandomIndex = Math.floor(Math.random() * goodEmotes.length);
        const goodEmotesRandomUrl = `${SEVEN_CDN}/${goodEmotes[goodEmotesRandomIndex]}/${EMOTE_SIZE}x.${EMOTE_FORMAT}`;
        const countries = getCountries(streamersSorted);
        const maxCountrySubs = Math.max(...countries.map((country) => country.subs));
        const winningCountry = countries.find((country) => country.subs === maxCountrySubs);
        if (winningCountry === undefined) {
            console.log('no winning country');
            return;
        }
        const winningElement = getWinningElement(winningCountry, badEmotesRandomUrl, goodEmotesRandomUrl);
        if (winningElement === null) {
            console.log('failed to get winningHeader');
            return;
        }
        const rankingHtmlElement = getRankingHtmlElement('');
        if (rankingHtmlElement === null) {
            console.log('failed to get rankingDiv');
            return;
        }
        const headerHtmlDivElement = getHeaderHtmlDivElement();
        rankingHtmlElement.appendChild(headerHtmlDivElement);
        //main logic
        const shuffledGradients = shuffleArray(gradients);
        const totalSubs = streamersSorted.reduce((partialSum, streamer) => partialSum + streamer.subs, 0);
        streamersSorted.forEach((streamer, index) => {
            const percentage = (streamer.subs / totalSubs) * 100;
            const overlayHtmlDivElement = getOverlayHtmlDivElement(streamer, shuffledGradients, percentage, index);
            const entryHtmlDivElemen = getEntryHtmlDivElement();
            entryHtmlDivElemen.appendChild(overlayHtmlDivElement);
            if (streamer.name === CUTEDOG)
                entryHtmlDivElemen.classList.add('glass-effect');
            const flagImgHtmlDivElement = getFlagImgHtmlDivElement(streamer);
            entryHtmlDivElemen.appendChild(flagImgHtmlDivElement);
            entryHtmlDivElemen.innerHTML += `
          <span class="name">${streamer.name}</span>
          <span class="subs">${streamer.subs}</span>
        `;
            rankingHtmlElement.appendChild(entryHtmlDivElemen);
        });
    }
    catch (error) {
        console.log(`Error at updateRankings --> ${error instanceof Error ? error : 'error'}`);
        getRankingHtmlElement(`<div class="entry">Unable to load rankings</div>`);
    }
}
//# sourceMappingURL=update-rankings.js.map