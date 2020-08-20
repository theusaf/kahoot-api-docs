## LiveBaseMessage
The main JSON object for almost all Kahoot Live events

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
    <td>clientId</td>
    <td>String</td>
    <td></td>
    <td>The unique client identifier.</td>
  </tr>
  <tr>
    <td>data</td>
    <td>JSON Object</td>
    <td>(Varies)</td>
    <td>This is the data for each event.</td>
  </tr>
  <tr>
    <td>id</td>
    <td>String[Number]</td>
    <td></td>
    <td>A count of how many messages have been sent to the server. Mostly used for debugging.</td>
  </tr>
</table>
