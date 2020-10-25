$A tutorial on how to generate a friendly name when the friendly name generator is enabled. This uses the namerator api to fetch a random name from Kahoot!
## Getting a random "namerator" name

Send a request to [`https://apis.kahoot.it/namerator`](https://apis.kahoot.it/namerator)

The server should respond with JSON:

<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>description</th>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>The random name for use in games with the friendly nickname generator enabled</td>
  </tr>
</table>
