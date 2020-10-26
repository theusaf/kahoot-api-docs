$How to use this API documentation.
## Getting Started
How to use this API documentation.

Depending on what you want to create, you should head over to the **Classes** section.
- [`Client`](/class/client) - For joining/interacting with live games
- [`Host`](/class/host) - For hosting live games
- [`Search`](/class/search) - For searching for public Kahoot quizzes.
- [`Creator`](/class/creator) - For creating Kahoot quizzes.

*All live classes send messages as part of a list, although most lists will only contain a single message.*

### Client
The first step is establishing a connection, take a look at [CreateHandshake](//class/client?scrollTo=connection). After doing that, just listen for the various events and respond to the events.
