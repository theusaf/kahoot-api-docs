$Content about the question when the question starts, including the type, layout, and remaining time left in the question.
## LiveEventQuestionStartContent
<span class="type">String[JSON Object]</span>
The content describing the [LiveEventQuestionStart](#/enum/LiveEventQuestionStart).

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
    <td>The layout of the question.</td>
  </tr>
  <tr>
    <td>quizQuestionAnswers</td>
    <td>Array[Number]</td>
    <td></td>
    <td>An array of numbers, signifying the number of answer choices in each question</td>
  </tr>
  <tr>
    <td>timeAvailable</td>
    <td>Number</td>
    <td>20000</td>
    <td>How much time is left before the question ends.</td>
  </tr>
</table>
