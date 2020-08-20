## LiveHandshakeClient
JSON data sent to Kahoot's socket to establish a connection.
<div class="navigation">
  <div>
  </div>
</div>

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>advice</td>
    <td>JSON object</td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "inverval": 0,
<!--   -->  "timeout": 60000
<!--   -->}
        </code>
      </pre>
    </td>
    <td>Advice for the server for connection timings.</td>
  </tr>
  <tr>
    <td>channel</td>
    <td><a href="#/enum/LiveMessageChannel">LiveMessageChannel</a></td>
    <td>/meta/handshake</td>
    <td>The channel to send the message to.</td>
  </tr>
  <tr>
    <td>ext</td>
    <td><a href="#/enum/LiveTimesyncData">LiveTimesyncData</a></td>
    <td><a href="#/enum/LiveTimesyncData?scrollTo=first-handshake">LiveTimesyncData#first-handshake</a></td>
    <td>The channel to send the message to.</td>
  </tr>
  <tr>
    <td>id</td>
    <td>String[Number]</td>
    <td>0</td>
    <td>The sent message counter.</td>
  </tr>
</table>
