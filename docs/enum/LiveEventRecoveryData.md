$The recovery data, containing quiz info and the current event.
## LiveEventRecoveryData
<span class="type">JSON Object</span>

The recovery data, containing quiz info and the current event.
Data varies based on the type of event.
Recovery Data contains a `data` property, which is the event data as well as a `defaultQuizData` property, which contains basic information about the quiz, as well as the type of event happening.

<div class="navigation">
  <div>
    <span>Variations</span>
    <a link="?scrollTo=lobby" class="nav">Lobby</a>
    <a link="?scrollTo=QuizStart" class="nav">QuizStart</a>
    <a link="?scrollTo=QuestionReady" class="nav">QuestionReady</a>
    <a link="?scrollTo=QuestionStart" class="nav">QuestionStart</a>
    <a link="?scrollTo=QuestionEnd" class="nav">QuestionEnd</a>
    <a link="?scrollTo=QuizEnd" class="nav">QuizEnd</a>
    <a link="?scrollTo=feedback" class="nav">Feedback</a>
  </div>
</div>

### Variations
<a link="?scrollTo=lobby" class="nam">Lobby</a>
<div class="info">
  <table>
    <tr>
      <th>parameter</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td>{}</td>
      <td></td>
    </tr>
    <tr>
      <td>defaultQuizData</td>
      <td>JSON Object</td>
      <td>(See below)</td>
      <td>The default quiz data. Includes state and other info.</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>parameter</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          <tr>
            <td>quizType</td>
            <td>String</td>
            <td>quiz</td>
            <td></td>
          </tr>
          <tr>
            <td>quizQuestionAnswers</td>
            <td>Array[(Number|null)]</td>
            <td></td>
            <td>A list of numbers signifying the number of choices per question.</td>
          </tr>
          <tr>
            <td>didControllerLeave</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player left/was not connected.</td>
          </tr>
          <tr>
            <td>wasControllerKicked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player was kicked.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>state</td>
      <td>Number</td>
      <td>0</td>
      <td></td>
    </tr>
  </table>
</div>

<a link="?scrollTo=QuizStart" class="nam">QuizStart</a>
<div class="info">
  <table>
    <tr>
      <th>parameter</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td>(See below)</td>
      <td>The quiz start data</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>parameter</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          <tr>
            <td>quizType</td>
            <td>String</td>
            <td>quiz</td>
            <td></td>
          </tr>
          <tr>
            <td>quizQuestionAnswers</td>
            <td>Array[(Number|null)]</td>
            <td></td>
            <td>A list of numbers signifying the number of choices per question.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>defaultQuizData</td>
      <td>JSON Object</td>
      <td>(See below)</td>
      <td>The default quiz data. Includes state and other info.</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>parameter</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          <tr>
            <td>quizType</td>
            <td>String</td>
            <td>quiz</td>
            <td></td>
          </tr>
          <tr>
            <td>quizQuestionAnswers</td>
            <td>Array[(Number|null)]</td>
            <td></td>
            <td>A list of numbers signifying the number of choices per question.</td>
          </tr>
          <tr>
            <td>didControllerLeave</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player left/was not connected.</td>
          </tr>
          <tr>
            <td>wasControllerKicked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player was kicked.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>state</td>
      <td>Number</td>
      <td>1</td>
      <td></td>
    </tr>
  </table>
</div>

<a link="?scrollTo=QuestionReady" class="nam">QuestionReady</a>
<div class="info">
  <table>
    <tr>
      <th>parameter</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td>(See below)</td>
      <td>The question start data.</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>parameter</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          <td>getReady</td>
          <td>JSON Object[<a href="#/enum/LiveEventQuestionReadyContent">LiveEventQuestionReadyContent</a>]</td>
          <td></td>
          <td>The get ready information.</td>
        </table>
      </td>
    </tr>
    <tr>
      <td>defaultQuizData</td>
      <td>JSON Object</td>
      <td>(See below)</td>
      <td>The default quiz data. Includes state and other info.</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>parameter</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          <tr>
            <td>quizType</td>
            <td>String</td>
            <td>quiz</td>
            <td></td>
          </tr>
          <tr>
            <td>quizQuestionAnswers</td>
            <td>Array[(Number|null)]</td>
            <td></td>
            <td>A list of numbers signifying the number of choices per question.</td>
          </tr>
          <tr>
            <td>didControllerLeave</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player left/was not connected.</td>
          </tr>
          <tr>
            <td>wasControllerKicked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player was kicked.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>state</td>
      <td>Number</td>
      <td>2</td>
      <td></td>
    </tr>
  </table>
</div>

<a link="?scrollTo=QuestionStart" class="nam">QuestionStart</a>
<div class="info">
  <table>
    <tr>
      <th>parameter</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object[<a href="#/enum/LiveEventQuestionStartContent">LiveEventQuestionStartContent</a>]</td>
      <td></td>
      <td>The question start data.</td>
    </tr>
    <tr>
      <td>defaultQuizData</td>
      <td>JSON Object</td>
      <td>(See below)</td>
      <td>The default quiz data. Includes state and other info.</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>parameter</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          <tr>
            <td>quizType</td>
            <td>String</td>
            <td>quiz</td>
            <td></td>
          </tr>
          <tr>
            <td>quizQuestionAnswers</td>
            <td>Array[(Number|null)]</td>
            <td></td>
            <td>A list of numbers signifying the number of choices per question.</td>
          </tr>
          <tr>
            <td>didControllerLeave</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player left/was not connected.</td>
          </tr>
          <tr>
            <td>wasControllerKicked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player was kicked.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>state</td>
      <td>Number</td>
      <td>3</td>
      <td></td>
    </tr>
  </table>
</div>

<a link="?scrollTo=QuestionEnd" class="nam">QuestionEnd</a>
<div class="info">
  <table>
    <tr>
      <th>parameter</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td>(See below)</td>
      <td>The question start data.</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>parameter</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          <tr>
            <td>revealAnswer</td>
            <td>JSON Object[<a href="#/enum/LiveEventQuestionEndContent">LiveEventQuestionEndContent</a>]</td>
            <td></td>
            <td>The question end content.</td>
          </tr>
          <tr>
            <td>timeUp</td>
            <td>JSON Object[<a href="#/enum/LiveEventTimeOver">LiveEventTimeOver</a>.content]</td>
            <td></td>
            <td>The time end content.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>defaultQuizData</td>
      <td>JSON Object</td>
      <td>(See below)</td>
      <td>The default quiz data. Includes state and other info.</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>parameter</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          <tr>
            <td>quizType</td>
            <td>String</td>
            <td>quiz</td>
            <td></td>
          </tr>
          <tr>
            <td>quizQuestionAnswers</td>
            <td>Array[(Number|null)]</td>
            <td></td>
            <td>A list of numbers signifying the number of choices per question.</td>
          </tr>
          <tr>
            <td>didControllerLeave</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player left/was not connected.</td>
          </tr>
          <tr>
            <td>wasControllerKicked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player was kicked.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>state</td>
      <td>Number</td>
      <td>4</td>
      <td></td>
    </tr>
  </table>
</div>

State 5 is essentially the same as state 4.

<a link="?scrollTo=QuizEnd" class="nam">QuizEnd</a>
<div class="info">
  <table>
    <tr>
      <th>parameter</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td>{}</td>
      <td></td>
    </tr>
    <tr>
      <td>defaultQuizData</td>
      <td>JSON Object</td>
      <td>(See below)</td>
      <td>The default quiz data. Includes state and other info.</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>parameter</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          <tr>
            <td>quizType</td>
            <td>String</td>
            <td>quiz</td>
            <td></td>
          </tr>
          <tr>
            <td>quizQuestionAnswers</td>
            <td>Array[(Number|null)]</td>
            <td></td>
            <td>A list of numbers signifying the number of choices per question.</td>
          </tr>
          <tr>
            <td>didControllerLeave</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player left/was not connected.</td>
          </tr>
          <tr>
            <td>wasControllerKicked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player was kicked.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>state</td>
      <td>Number</td>
      <td>6</td>
      <td></td>
    </tr>
  </table>
</div>

<a link="?scrollTo=feedback" class="nam">Feedback</a>
<div class="info">
  <table>
    <tr>
      <th>parameter</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td>{}</td>
      <td></td>
    </tr>
    <tr>
      <td>defaultQuizData</td>
      <td>JSON Object</td>
      <td>(See below)</td>
      <td>The default quiz data. Includes state and other info.</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>parameter</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          <tr>
            <td>quizType</td>
            <td>String</td>
            <td>quiz</td>
            <td></td>
          </tr>
          <tr>
            <td>quizQuestionAnswers</td>
            <td>Array[(Number|null)]</td>
            <td></td>
            <td>A list of numbers signifying the number of choices per question.</td>
          </tr>
          <tr>
            <td>didControllerLeave</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player left/was not connected.</td>
          </tr>
          <tr>
            <td>wasControllerKicked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the player was kicked.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>state</td>
      <td>Number</td>
      <td>7</td>
      <td></td>
    </tr>
  </table>
</div>
