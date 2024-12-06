import type { Streamer, Country } from '../types.js';
import { NA, EU, NZ } from '../consts.js';

export function getCountries(streamers: readonly Streamer[]): readonly Country[] {
  let naSubs = 0;
  let euSubs = 0;
  let nzSubs = 0;

  streamers.forEach((streamer) => {
    if (streamer.country === NA) naSubs += streamer.subs;
    else if (streamer.country === EU) euSubs += streamer.subs;
    else if (streamer.country === NZ) nzSubs += streamer.subs;
  });

  return [
    { name: NA, subs: naSubs },
    { name: EU, subs: euSubs },
    { name: NZ, subs: nzSubs }
  ];
}
