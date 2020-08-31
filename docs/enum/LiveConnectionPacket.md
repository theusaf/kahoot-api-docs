## LiveConnectionPacket
A JSON message asking for connection information.
<span class="extends"><a href="#/enum/LiveBaseMessageResponse">LiveBaseMessageResponse</a></span>
<span class="channel"><code>/meta/connect</code></span>

Most connection packets contain no extra information. The first connection packet (after handshake) contains the following advice packet:

### Advice
```json
{
  "inverval": 0,
  "reconnect": "retry",
  "timeout": 30000
}
```

*`advice` is part of message root, not in `data`*
