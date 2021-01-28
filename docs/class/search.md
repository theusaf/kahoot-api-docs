$Search for quizzes using Kahoot!'s discover API. Learn all the options to fully customize your searches.
## Search
Search for public Kahoot!s on Discover!

<div class="navigation">
  <div>
    <span>Options</span>
    <a link="?scrollTo=query" class="nav">query</a>
    <a link="?scrollTo=cursor" class="nav">cursor</a>
    <a link="?scrollTo=limit" class="nav">limit</a>
    <a link="?scrollTo=topics" class="nav">topics</a>
    <a link="?scrollTo=grades" class="nav">grades</a>
    <a link="?scrollTo=usage" class="nav">usage</a>
    <a link="?scrollTo=language" class="nav">language</a>
    <a link="?scrollTo=orderBy" class="nav">orderBy</a>
    <a link="?scrollTo=includeKahoot" class="nav">includeKahoot</a>
    <a link="?scrollTo=creator" class="nav">creator</a>
    <a link="?scrollTo=searchCluster" class="nav">searchCluster</a>
    <a link="?scrollTo=includeExtendedCounters" class="nav">includeExtendedCounters</a>
  </div>
</div>

### Important Notes:
- The base path for all Kahoot! searches is: [https://(create).kahoot.it/rest/kahoots/](https://kahoot.it/rest/kahoots/)
  - The subdomain can be ignored, and can be set to any Kahoot! subdomain.
- All searches will return a [SearchQueryResult](/enum/SearchQueryResult)
- All "options" are querystring options.
  - Example: `https://kahoot.it/rest/kahoots/?query=foo%20bar&cursor=50&limit=5`

### Options

<div>
  <a link="?scrollTo=query" class="nam">query</a>
  <div class="info">
    The search query to use. There are some queries that do not work. See <a href="/ex/search?scrollTo=correction">Search Example#correction</a>
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
        <td>0 <em>(Min: 0)</em> <em>(Max: 9999)</em></td>
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
        <td><a href="/enum/SearchSubjectValue">SearchSubjectValue</a></td>
        <td></td>
        <td>The subject(s) to filter results by.</td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=grades" class="nam">grades</a>
  <div class="info">
    The grades to filter by
    <table>
      <tr>
        <th>Type</th>
        <th>default</th>
        <th>description</th>
      </tr>
      <tr>
        <td>String</td>
        <td></td>
        <td>
          <p>A string of grade(s) to filter by.</p>
          <p>Grades are from grades 1-12 and are formatted as <code>grade_nn</code> where nn is a two digit number like <code>05</code> or <code>12</code>.</p>
          <p>Each grade is separated by a comma and uri-encoded: <code>grade_01,grade_10</code> => <code>grade01%2Cgrade_10</code></p>
        </td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=usage" class="nam">usage</a>
  <div class="info">
    Filters the results by the type of user who created it
    <table>
      <tr>
        <th>Type</th>
        <th>default</th>
        <th>description</th>
      </tr>
      <tr>
        <td>String</td>
        <td></td>
        <td>
          <p>A list of usage(s) split by uri-encoded commas from the following list:</p>
          <ul style="text-align: left">
            <li>teacher</li>
            <li>student</li>
            <li>business</li>
            <li>social</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=language" class="nam">language</a>
  The languages to filter by
  <div class="info">
    <table>
      <tr>
        <th>Type</th>
        <th>default</th>
        <th>description</th>
      </tr>
      <tr>
        <td><a href="/enum/SearchLanguage">SearchLanguage</a></td>
        <td></td>
        <td>This can be a list/single language, separated by commas and uri-endoded.</td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=orderBy" class="nam">orderBy</a>
  How to sort the results.
  <div class="info">
    <table>
      <tr>
        <th>type</th>
        <th>default</th>
        <th>description</th>
      </tr>
      <tr>
        <td>String</td>
        <td>relevance</td>
        <td>
          <p>One of:</p>
          <ul style="text-align: left">
            <li><code>relevance</code> - How relevant the result is to the query</li>
            <li><code>plays</code> - The number of plays the quiz has</li>
            <li><code>quality</code> - Sort by the ratings given through the feedback feature?</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=includeKahoot" class="nam">includeKahoot</a>
  Whether to include the quiz data along with the card information in the response
  <div class="info">
    <table>
      <tr>
        <th>type</th>
        <th>default</th>
        <th>description</th>
      </tr>
      <tr>
        <td>Boolean</td>
        <td>false</td>
        <td></td>
      </tr>
    </table>
  </div>
</div>

<div>
  <a link="?scrollTo=creator" class="nam">creator</a>
  <div class="info">
    The username of the creator of the Kahoot.
    <table>
      <tr>
        <th>Type</th>
        <th>default</th>
        <th>description</th>
      </tr>
      <tr>
        <td>String</td>
        <td></td>
        <td>The creator's username. Useful for finding Kahoots made by a specific account.</td>
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
