## LiveFeedbackPacketContent
<span class="type">Stringified JSON</span>
Information about the feedback.

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>totalScore</td>
    <td>Number</td>
    <td></td>
    <td>The final score of the player</td>
  </tr>
  <tr>
    <td>nickname</td>
    <td>String</td>
    <td></td>
    <td>The name of the player.</td>
  </tr>
  <tr>
    <td>fun</td>
    <td>Number</td>
    <td>1 - 5</td>
    <td>A number rating how fun the quiz was</td>
  </tr>
  <tr>
    <td>learning</td>
    <td>Number</td>
    <td>0, 1</td>
    <td>A number rating whether the quiz helped the player learn anything.</td>
  </tr>
  <tr>
    <td>recommend</td>
    <td>Number</td>
    <td>0, 1</td>
    <td>A number rating whether the player recommends the quiz</td>
  </tr>
  <tr>
    <td>overall</td>
    <td>Number</td>
    <td>-1 - 1</td>
    <td>Overall feeling about the quiz. -1 = bad, 1 = good.</td>
  </tr>
</table>
