import { NA, EU, NZ, FLAG_CDN_NA, FLAG_CDN_EU, FLAG_CDN_NZ } from '../consts.js';
export function getFlagImgHtmlDivElement(streamer) {
    const flagImgHtmlDivElement = document.createElement('img');
    if (streamer.country === NA)
        flagImgHtmlDivElement.src = FLAG_CDN_NA;
    else if (streamer.country === EU)
        flagImgHtmlDivElement.src = FLAG_CDN_EU;
    else if (streamer.country === NZ)
        flagImgHtmlDivElement.src = FLAG_CDN_NZ;
    flagImgHtmlDivElement.alt = `${streamer.country} Flag`;
    flagImgHtmlDivElement.classList.add('flag');
    return flagImgHtmlDivElement;
}
//# sourceMappingURL=get-html-image-elements.js.map