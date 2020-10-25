$The main JSON object for some Kahoot live events. (to client)
## LiveBaseMessageResponse
The main JSON object for some Kahoot live events. (to client)

### Data
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>channel</td>
    <td><a href="#/enum/LiveMessageChannel">LiveMessageChannel</a></td>
    <td></td>
    <td>The channel section for the message. This value should be listed under 'Channel' in each event.</td>
  </tr>
  <tr>
    <td>ext</td>
    <td>JSON Object</td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "ack": CLIENT_MESSAGE_ACK
<!--   -->}
        </code>
      </pre>
    </td>
    <td>Connection information. In the ping/pong system, ack is incremented by 1.</td>
  </tr>
  <tr>
    <td>successful</td>
    <td>Boolean</td>
    <td>true</td>
    <td>Whether the message this message is replying to was a success.</td>
  </tr>
  <tr>
    <td>id</td>
    <td>String[Number]</td>
    <td></td>
    <td>A count of how many messages have been sent to the server. Mostly used for debugging.</td>
  </tr>
</table>
