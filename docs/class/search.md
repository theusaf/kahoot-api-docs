$Search for quizzes using Kahoot!'s discover API. Learn all the options to fully customize your searches.
## Search
Search for public Kahoot!s on Discover!

<div class="navigation">
  <div>
    <span>Options</span>
    <a link="?scrollTo=query" class="nav">query</a>
    <a link="?scrollTo=cursor" class="nav">cursor</a>
    <a link="?scrollTo=limit" class="nav">limit</a>
    <a link="?scrollTo=limit" class="nav">topics</a>
    <a link="?scrollTo=limit" class="nav">grades</a>
    <a link="?scrollTo=limit" class="nav">orderBy</a>
    <a link="?scrollTo=creator" class="nav">creator</a>
    <a link="?scrollTo=searchCluster" class="nav">searchCluster</a>
    <a link="?scrollTo=includeExtendedCounters" class="nav">includeExtendedCounters</a>
  </div>
</div>

### Important Notes:
- The base path for all Kahoot! searches is: [https://(create).kahoot.it/rest/kahoots/](https://kahoot.it/rest/kahoots/)
  - The subdomain can be ignored, and can be set to any Kahoot! subdomain.
- All searches will return a [SearchQueryResult](#/enum/SearchQueryResult)
- All "options" are querystring options.
  - Example: `https://kahoot.it/rest/kahoots/?query=foo%20bar&cursor=50&limit=5`

### Options

<div>
  <a link="?scrollTo=query" class="nam">query</a>
  <div class="info">
    The search query to use. There are some queries that do not work. See <a href="#/ex/search?scrollTo=correction">Search Example#correction</a>
    <table>
      <tr>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>String</td>
        <td></td>
        <td>This string is the main query string to use. If left empty, all quizzes will be returned.</td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=cursor" class="nam">cursor</a>
  <div class="info">
    The index to start the query at.
    <table>
      <tr>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>Number</td>
        <td>0 <em>(Min: 0)</em></td>
        <td>When searching, Kahoot! will return the results in their list starting from this index. Results before this index will be omitted. If this number exceeds the number of results for the query, an empty list will be returned.</td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=limit" class="nam">limit</a>
  <div class="info">
    The number of results that should be returned.
    <table>
      <tr>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>Number</td>
        <td>10 <em>(Min: 0, Max: 100)</em></td>
        <td>The number of quizzes to return from the index. If the number of results is less than the limit, this will have no effect. A good number to use is <code>25</code>. Higher numbers may result in incomplete JSON.</td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=topics" class="nam">topics</a>
  <div class="info">
    The topics to filter by.
    <table>
      <tr>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="#/enum/SearchSubjectValue">SearchSubjectValue</a></td>
        <td></td>
        <td>The subject(s) to filter results by.</td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=searchCluster" class="nam">searchCluster</a>
  <div class="info">
    <table>
      <tr>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>Number</td>
        <td>1</td>
        <td>(Needs research)</td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=includeExtendedCounters" class="nam">includeExtendedCounters</a>
  <div class="info">
  <table>
    <tr>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Boolean</td>
      <td>false</td>
      <td>(Needs research)</td>
    </tr>
  </table>
  </div>
</div>
