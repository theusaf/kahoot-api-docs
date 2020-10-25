$The answer data for a LiveQuestionAnswer
## LiveQuestionAnswerContent
<span class="type">Stringified JSON</span>

The answer data for a [LiveQuestionAnswer](#/enum/LiveQuestionAnswer)

### Data
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>choice</td>
    <td>Number/String/Array</td>
    <td></td>
    <td>Values used to answer the question. Varies based on the <a href="#/enum/LiveQuestionType">question type</a>.</td>
  </tr>
  <tr>
    <td>questionIndex</td>
    <td>Number</td>
    <td></td>
    <td>The current question index.</td>
  </tr>
  <tr>
    <td>meta</td>
    <td>JSON</td>
    <td></td>
    <td>Metadata about the answer:

```json
{
  "lag": 30
}
```
&nbsp;
      Currently used for lag.
    </td>
  </tr>
  <tr>
    <td>type</td>
    <td><a href="#/enum/LiveQuestionType">LiveQuestionType</a></td>
    <td></td>
    <td>The type of the question.</td>
  </tr>
</table>
