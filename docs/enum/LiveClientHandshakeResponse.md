$The JSON response to a handshake request sent by the client
## LiveClientHandshakeResponse
The JSON response to a handshake request sent by the <a href="/class/client">client</a>.
<span class="extends"><a href="/enum/LiveBaseMessageResponse">LiveBaseMessageResponse</a></span>
<span class="channel"><code>/meta/handshake</code></span>

<div class="navigation">
  <div>
    <span>Variations</span>
    <a link="?scrollTo=success" class="nav">Success</a>
    <a link="?scrollTo=fail" class="nav">Failure</a>
  </div>
</div>

The message contains the clientId which will be used in all future messages to and from the client.
- Parameters are merged with the base message.

<a link="?scrollTo=success" class="nam"></a>
### Success
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>clientId</td>
    <td>String</td>
    <td></td>
    <td>The unique client identifier used for future messages.</td>
  </tr>
  <tr>
    <td>minimumVersion</td>
    <td>String[Float]</td>
    <td>1.0</td>
    <td></td>
  </tr>
  <tr>
    <td>version</td>
    <td>String[Float]</td>
    <td>1.0</td>
    <td></td>
  </tr>
  <tr>
    <td>supportedConnectionTypes</td>
    <td>Array[<a href="/enum/ConnectionType">ConnectionType</a>]</td>
    <td>
      <pre>
        <code>
<!--   -->[
<!--   -->  "websocket",
<!--   -->  "long-polling",
<!--   -->  "callback-polling"
<!--   -->]
        </code>
      </pre>
    </td>
    <td>Connection types that the server supports.</td>
  </tr>
  <tr>
    <td>advice</td>
    <td><a href="/enum/LiveHandshakeAdvice">LiveHandshakeAdvice</a></td>
    <td></td>
    <td>Advice to the client to do an action.</td>
  </tr>
  <tr>
    <td>ext</td>
    <td>extension of <a href="/enum/LiveBaseMessageResponse">LiveBaseMessageResponse</a>.ext, merged with <a href="/enum/LiveHandshakeTimesync">LiveHandshakeTimesync</a></td>
    <td></td>
    <td>Timesync information.</td>
  </tr>
</table>

<a link="?scrollTo=fail" class="nam"></a>
### Failure
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>advice</td>
    <td><a href="/enum/LiveHandshakeAdvice?scrollTo=fail">LiveHandshakeAdvice#fail</a></td>
    <td></td>
    <td>Advice to the client to do an action.</td>
  </tr>
  <tr>
    <td>ext</td>
    <td>extension of <a href="/enum/LiveBaseMessageResponse">LiveBaseMessageResponse</a>.ext, merged with <a href="/enum/LiveHandshakeTimesync">LiveHandshakeTimesync</a></td>
    <td></td>
    <td>Timesync information.</td>
  </tr>
  <tr><td colspan="4"><strong>The following are merged with the parent data.</strong></td></tr>
  <tr>
    <td>error</td>
    <td>String</td>
    <td>403::handshake_denied</td>
    <td>The error. (Usually means that your ip was blocked for spamming too many clients in a short time)</td>
  </tr>
  <tr>
    <td>successful</td>
    <td>Boolean</td>
    <td>false</td>
    <td></td>
  </tr>
</table>
