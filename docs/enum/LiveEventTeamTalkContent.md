$Content about the team talk/upcoming question
## LiveEventTeamTalkContent
<span class="type">String[JSON Object]</span>

Content about the team talk/upcoming question

### Content
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>questionIndex</td>
    <td>Number</td>
    <td></td>
    <td>The current question index</td>
  </tr>
  <tr>
    <td>quizQuestionAnswers</td>
    <td>Array[(Number|null)]</td>
    <td></td>
    <td>A list about the number of choices per question.</td>
  </tr>
  <tr>
    <td>gameBlockType</td>
    <td><a href="/enum/LiveQuestionType">LiveQuestionType</a></td>
    <td>quiz</td>
    <td>The type of the question</td>
  </tr>
  <tr>
    <td>gameBlockLayout</td>
    <td><a href="/enum/GameBlockLayout">GameBlockLayout</a></td>
    <td>CLASSIC</td>
    <td>The layout of the question</td>
  </tr>
  <tr>
    <td>teamTalkDuration</td>
    <td>Number</td>
    <td>5</td>
    <td>The time in seconds for the team talk.</td>
  </tr>
</table>
