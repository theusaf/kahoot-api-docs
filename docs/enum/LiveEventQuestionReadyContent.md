$Content about the upcoming question, including the type of question and the layout of the question.
## LiveEventQuestionReadyContent
<span class="type">String[JSON Object]</span>
The content describing the [LiveEventQuestionReady](#/enum/LiveEventQuestionReady).

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
    <td>The question index of the question</td>
  </tr>
  <tr>
    <td>gameBlockType</td>
    <td><a href="#/enum/LiveQuestionType">LiveQuestionType</a></td>
    <td>quiz</td>
    <td>The type of the question.</td>
  </tr>
  <tr>
    <td>gameBlockLayout</td>
    <td><a href="#/enum/GameBlockLayout">gameBlockLayout</a></td>
    <td>CLASSIC</td>
    <td>The layout of the question. May be nonexistent.</td>
  </tr>
  <tr>
    <td>quizQuestionAnswers</td>
    <td>Array[Number]</td>
    <td></td>
    <td>An array of numbers, signifying the number of answer choices in each question</td>
  </tr>
  <tr>
    <td>timeLeft</td>
    <td>Number</td>
    <td></td>
    <td>How much time is left before the question should be start</td>
  </tr>
</table>
