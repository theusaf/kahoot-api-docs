$An event signifying the start of the quiz
## LiveEventQuizStart
<span class="extends"><a href="/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/player</code></span>
An event signifying the start of the quiz

## Data
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>gameid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The gameid the client is connected to</td>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="/enum/LiveEventID">LiveEventID</a></td>
    <td>9</td>
    <td></td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>message</td>
    <td></td>
  </tr>
  <tr>
    <td>content</td>
    <td>String[JSON Object]</td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "quizType": "quiz",
<!--   -->  "quizQuestionAnswers": [4,4,...],
<!--   -->  "quizTitle": "..."
<!--   -->}
        </code>
      </pre>
    </td>
    <td>
      <p>Information about the quiz.</p>
      <ul>
        <li>quizType - The type of quiz. (Not used, always 'quiz')</li>
        <li>quizQuestionAnswers - A list of numbers stating how many answers are in each question.</li>
        <li>quizTitle - The name of the quiz.</li>
      </ul>
    </td>
  </tr>
</table>
