## KahootPY
KahootPY is a python package for interacting with Kahoot. It is based on kahoot.js-updated and is made by [theusaf](https://github.com/theusaf). KahootPY is also event/callback based.

You can see the package at [GitHub](https://github.com/theusaf/KahootPY) or at [PyPI](https://pypi.org/project/KahootPY/)

KahootPY does not support Kahoot! challeges, only live games and is not updated to use this documentation.

To understand how to use it, you can check out [kahoot.js-updated's docs](https://github.com/theusaf/kahoot.js-updated/blob/master/Documentation-Old.md)

Basic usage:
```py
from kahoot import client
bot = client()
bot.join(12345,"hello")
def QuestionStartCallback(question):
  question.answer(0)
  # bot.answerQuestion also works
bot.on("questionStart",QuestionStartCallback)
```
