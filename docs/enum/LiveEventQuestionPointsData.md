## LiveEventQuestionPointsData
<span class="type">JSON Object</span>
Information about the points data and answer streak.

*It should be noted that point bonuses have been disabled by Kahoot! and can only be activated using custom host scripts or extensions.*

<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>questionPoints</td>
    <td>Number</td>
    <td></td>
    <td>The number of points earned in the question. (needs testing - Does this include bonus answer streak points?)</td>
  </tr>
  <tr>
    <td>totalPointsWithBonuses</td>
    <td>Number</td>
    <td></td>
    <td>The number of points earned (including bonuses)</td>
  </tr>
  <tr>
    <td>totalPointsWithoutBonuses</td>
    <td>Number</td>
    <td></td>
    <td>The number of points earned (without bonuses)</td>
  </tr>
  <tr>
    <td>answerStreakPoints</td>
    <td>JSON Object</td>
    <td>
      <table>
        <tr>
          <th>parameter</th>
          <th>type</th>
          <th>default</th>
          <th>description</th>
        </tr>
        <tr>
          <td>streakLevel</td>
          <td>Number</td>
          <td></td>
          <td>How many questions were answered correctly in a row.</td>
        </tr>
        <tr>
          <td>streakBonus</td>
          <td>Number</td>
          <td>0</td>
          <td>Bonus points awarded by the streakLevel</td>
        </tr>
        <tr>
          <td>totalStreakPoints</td>
          <td>Number</td>
          <td>0</td>
          <td>The total streak points earned.</td>
        </tr>
        <tr>
          <td>previousStreakLevel</td>
          <td>Number</td>
          <td></td>
          <td>The previous steak level</td>
        </tr>
        <tr>
          <td>previousStreakBonus</td>
          <td>Number</td>
          <td>0</td>
          <td>The previous streak bonus</td>
        </tr>
      </table>
    </td>
    <td>Information about the answer streaks.</td>
  </tr>
</table>
