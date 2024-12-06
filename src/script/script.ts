import { UPDATE_RANKINGS_INTERVAL } from './consts.js';
import { updateRankings } from './update-rankings.js';

void updateRankings();
setInterval(updateRankings, UPDATE_RANKINGS_INTERVAL);
