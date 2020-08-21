## LiveBaseEvent
The main JSON object for almost all Kahoot Live events. (to and from client)

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
    <td>data</td>
    <td>JSON Object</td>
    <td>(Varies)</td>
    <td>This is the data for each event. May be nonexistent.</td>
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
    <td>Time data when the message was sent.</td>
  </tr>
</table>
