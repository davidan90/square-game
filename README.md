# Square Game

## How to play?

The game consists in checking the square with a different color. If you choose the correct square, you will pass to the next level. Keep in mind that you will have a countdown of 3 seconds to find the right square. If the countdown ends or you select the wrong box, the app will show you a table with the top 10 users and an input to write your nickname. When you fill the input, press Enter to restart the game.

## Commands

Install dependencies:

```bash
npm i
```

Dev mode:

```bash
npm start
```

Build:

```bash
npm run build
```

Deploy in GH pages:

```bash
npm run deploy
```

## Notes

-   Project created using CRA with the Typescript template to start as fast as possible.
-   I did not use Redux or Mobx for the app state management because the project it's small.
-   Users service simulate the Backend saving users in LocalStorage.
-   The root components folder it's created to share commons components.
-   I implemented i18n. However, I only add english language.

### Pending

-   QA tasks as unit testing or e2e tests.
-   Improve styles.
