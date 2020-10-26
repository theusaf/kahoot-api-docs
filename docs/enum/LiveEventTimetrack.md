$Information about the current time on the server when the action was recieved
## LiveEventTimetrack
Information about the current time on the server when the action was recieved

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>channel</td>
    <td><a href="/enum/LiveMessageChannel">LiveMessageChannel</a></td>
    <td></td>
    <td>The channel that the client's message channel was in.</td>
  </tr>
  <tr>
    <td>ext</td>
    <td>JSON Object</td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "timetrack": <a href="https://en.wikipedia.org/wiki/Unix_time">Server date</a>
<!--   -->}
        </code>
      </pre>
    </td>
    <td>The time information when the message was recieved. For some packets (such as leaving), this may be an empty object.</td>
  </tr>
  <tr>
    <td>id</td>
    <td>String[Number]</td>
    <td></td>
    <td>The number signifying the client action's message id that this message is in response to.</td>
  </tr>
  <tr>
    <td>successful</td>
    <td>Boolean</td>
    <td>true</td>
    <td>Whether the action was successful.</td>
  </tr>
</table>
