$The JSON content for a LiveJoinPacket
## LiveJoinPacketContent
<span class="type">Stringified JSON</span>
The JSON content for a [LiveJoinPacket](#/enum/LiveJoinPacket) or a [LiveReloginPacket](#/enum/LiveReloginPacket)

```JSON
{
  "device": {
    "userAgent": UserAgent,
    "screen": {
      "width": width,
      "height": height
    }
  }
}
```
- [UserAgent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)
- [UserAgent Generator](https://npmjs.com/package/user-agents)
- Width and height are numbers and can be set to whatever
  - 1280x800 is a pretty common size
