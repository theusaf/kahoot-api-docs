[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/theusaf/kahoot-api-docs/issues)
[![HitCount](https://hits.dwyl.com/theusaf/kahoot-api-docs.svg)](https://hits.dwyl.com/theusaf/kahoot-api-docs)


## Welcome
Welcome to the Kahoot API Documentation by [@theusaf](https://github.com/theusaf).

**This documentation is currently a work in progress**

### What is this?
This documentation lists events, urls, and functions used to interact with [Kahoot](https://kahoot.com)'s services.

Kahoot's API uses mostly [JSON](https://www.json.org/json-en.html) and relies on [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) for most of its functions. Other functions, such as searching use HTTP `GET` and `POST` requests.

More specifically, Kahoot uses something called [CometD](https://cometd.org/), but this documentation uses plain websockets instead.

There is a long-polling alternative for WebSockets. However, this documentation does not cover this at the moment.

### Prerequisites:
- JavaScript, Node.JS, Python, Etc.
- JSON
- Making HTTP requests
- WebSockets

### Disclaimer:
This documentation is not an official documentation for Kahoot and may be outdated, incorrect or incomplete.

---

Some examples use [kahoot.js-updated](https://npmjs.com/package/kahoot.js-updated) and other similar projects to help you understand how to quickly create bots without knowing the API.

*This documentation is not affiliated with Kahoot! AS.*
