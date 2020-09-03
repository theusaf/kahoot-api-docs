## LiveEventJoinResponse
<span class="extends"><a href="#/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/controller</code></span>

<div class="navigation">
  <div>
    <span>Variations</span>
    <a link="?scrollTo=success" class="nav">Success</a>
    <a link="?scrollTo=duplicate" class="nav">Duplicate name</a>
    <a link="?scrollTo=missingSession" class="nav">Session Not Found</a>
    <a link="?scrollTo=reconnect" class="nav">ReconnectError</a>
  </div>
</div>

### Variations

<a link="?scrollTo=success" class="nam"></a>
**Success**
### Data
<table>
  <tr>
    <th>Parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>loginResponse</td>
    <td></td>
  </tr>
  <tr>
    <td>cid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The player's unique id</td>
  </tr>
</table>

- No response needed

<a link="?scrollTo=duplicate" class="nam"></a>
**Duplicate**
<table>
  <tr>
    <th>Parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>loginResponse</td>
    <td></td>
  </tr>
  <tr>
    <td>description</td>
    <td>String</td>
    <td>Duplicate name</td>
    <td>A description of the error</td>
  </tr>
  <tr>
    <td>error</td>
    <td>String</td>
    <td>USER_INPUT</td>
    <td>The error.</td>
  </tr>
</table>

- No response needed, should try to login using a different name

<a link="?scrollTo=missingSession" class="nam"></a>
**Session Not Found**
<table>
  <tr>
    <th>Parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>loginResponse</td>
    <td></td>
  </tr>
  <tr>
    <td>description</td>
    <td>String</td>
    <td>Player not found</td>
    <td>A description of the error</td>
  </tr>
  <tr>
    <td>error</td>
    <td>String</td>
    <td>NONEXISTING_SESSION</td>
    <td>The error.</td>
  </tr>
</table>

<a link="?scrollTo=reconnect" class="nam"></a>
**ReconnectError**
<table>
  <tr>
    <th>Parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>loginResponse</td>
    <td></td>
  </tr>
  <tr>
    <td>description</td>
    <td>String</td>
    <td>Internal error registering controller</td>
    <td>A description of the error</td>
  </tr>
  <tr>
    <td>error</td>
    <td>String</td>
    <td>RESTART</td>
    <td>The error.</td>
  </tr>
</table>

- (needs testing) No response needed, try joining instead of reconnecting?
- may require a new connection.
