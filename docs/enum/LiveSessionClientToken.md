$The token JSON or "Not found" (if the session doesn't exist)
## LiveSessionClientToken
The token JSON or `Not found` (if the session doesn't exist)

<div class="navigation">
  <div>
    <span>HTTP Headers</span>
    <a link="?scrollTo=token" class="nav">x-kahoot-session-token</a>
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
    <td>challenge</td>
    <td>String[JS Function]</td>
    <td></td>
    <td>A JavaScript function which is used to decode the tokens.</td>
  </tr>
  <tr>
    <td>namerator</td>
    <td>Boolean</td>
    <td>false</td>
    <td>Whether the name generator is enabled for the game.</td>
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
    <td>twoFactorAuth</td>
    <td>Boolean</td>
    <td>false</td>
    <td>Whether two-factor authentification is enabled for the game</td>
  </tr>
  <tr>
    <td>gameMode</td>
    <td>String</td>
    <td>team</td>
    <td>When not in team mode, this item is absent from the response. Otherwise, it is set to team.</td>
  </tr>
</table>

### HTTP Headers
<a link="?scrollTo=token" class="nam">x-kahoot-session-token</a>
<div class="info">
  <p>An important token located in the HTTP headers of the request.</p>
  <span class="type">Base64 String</span>
</div>
