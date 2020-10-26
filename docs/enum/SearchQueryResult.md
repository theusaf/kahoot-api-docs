$The JSON results of the search query.
## SearchQueryResult
<span class="type">JSON Object</span>

The JSON results of the search query.

<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>cursor</td>
    <td>Number</td>
    <td></td>
    <td>The new 'cursor' location to start the next search</td>
  </tr>
  <tr>
    <td>entities</td>
    <td>JSON Array[<a href="/enum/SearchQueryEntity">SearchQueryEntity</a>]</td>
    <td></td>
    <td>The results of the query</td>
  </tr>
  <tr>
    <td>pageTimestamp</td>
    <td><a href="https://en.wikipedia.org/wiki/Unix_time"></a>Date (ms)</td>
    <td></td>
    <td>The time the result was generated.</td>
  </tr>
  <tr>
    <td>totalHits</td>
    <td>Number</td>
    <td></td>
    <td>The total number of quizzes that match the query.</td>
  </tr>
</table>
