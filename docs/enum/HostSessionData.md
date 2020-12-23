$The session information when creating a live game
## HostSessionData
<span class="type">JSON text</span>

The session information when creating a live game

### Payload
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>gameMode</td>
    <td>String</td>
    <td>normal</td>
    <td>Signifies the game type, either <code>normal</code> or <code>team</code> for team mode</td>
  </tr>
  <tr>
    <td>namerator</td>
    <td>Boolean</td>
    <td>false</td>
    <td>Whether the friendly nickname generator is enabled</td>
  </tr>
  <tr>
    <td>orgId</td>
    <td>String</td>
    <td>(empty string)</td>
    <td>The id of the organization hosting the game</td>
  </tr>
  <tr>
    <td>participantId</td>
    <td>Boolean</td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>smartPractice</td>
    <td>Boolean</td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>themeId</td>
    <td>Boolean</td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>twoFactorAuth</td>
    <td>Boolean</td>
    <td>false</td>
    <td>Whether two-factor auth is enabled</td>
  </tr>
</table>
