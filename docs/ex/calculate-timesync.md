$A tutorial on how to calculate the timesync information needed for some client messages
## Calculating the timesync
The following explains how to calculate values for <a href="/enum/LiveTimesyncDataSync">LiveTimesyncDataSync</a>

These calculations are actually [Cometd TimeSyncExtensions](https://github.com/cometd/cometd/blob/502ab5bd830e761f4340a5d5fb6924bc743c5d04/cometd-javascript/common/src/main/webapp/js/cometd/TimeSyncExtension.js#L52)

**This calculation only needs to be done once (during handshake). The client then uses these values for the remaining messages.**

- l: `ROUND((CURRENT_DATE_MS - SERVER_TS.tc - SERVER_TS.p) / 2)`
- o: `(SERVER_TS.ts - SERVER_TS.tc - l)`
