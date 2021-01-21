$A message sent to answer the two-step authentification.
## LiveTwoStepAnswered
<span class="extends"><a href="/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/controller/(gameid)</code></span>

A message sent to answer the two-step authentification.

### Data
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="/enum/LiveEventID">LiveEventID</a></td>
    <td>50</td>
    <td></td>
  </tr>
  <tr>
    <td>cid</td>
    <td>String</td>
    <td></td>
    <td>The cid of the player answering the two-factor auth</td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>message</td>
    <td></td>
  </tr>
  <tr>
    <td>gameid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The gameid the client is connected to.</td>
  </tr>
  <tr>
    <td>host</td>
    <td>String</td>
    <td>kahoot.it</td>
    <td>The domain playing the game</td>
  </tr>
  <tr>
    <td>content</td>
    <td>String[JSON Object]</td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "sequence": "0123"
<!--   -->}
        </code>
      </pre>
    </td>
    <td>The sequence information. The <code>sequence</code> is a string of 4 numbers (0,1,2,3) representing the sequence of (red,blue,yellow,green) on the host's screen. The numbers do not repeat.</td>
  </tr>
</table>
