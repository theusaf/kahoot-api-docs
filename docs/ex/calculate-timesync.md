## Calculating the timesync
The following explains how to calculate values for <a href="#/enum/LiveTimesyncDataSync">LiveTimesyncDataSync</a>

*Providing a constant value like 0 for lag and offset might work without issue. Needs more testing to figure out the effect of this value on the game.*
**This calculation only needs to be done once (during handshake). The client then uses these values for the remaining messages.**

<div class="navigation">
  <div>
    <span>Sections</span>
    <a link="?scrollTo=client">Client</a>
    <a link="?scrollTo=host">Host</a>
  </div>
</div>

<a link="?scrollTo=client" class="nam"></a>
### Client
- l: `ROUND((CURRENT_DATE_MS - SERVER_TS.tc - SERVER_TS.p) / 2)`
- o: `(SERVER_TS.ts - SERVER_TS.tc - l)`

<a link="?scrollTo=host" class="nam"></a>
### Host
Coming soon
