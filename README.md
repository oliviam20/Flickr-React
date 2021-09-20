# Flickr React App

This uses the Flickr public api.

```
http://api.flickr.com/services/feeds/photos_public.gne
```

[Live Demo - Netlify](https://flickr-react-app.netlify.app/)

_note to myself_ - deployed using cb86 account for heroku

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Outcomes

1. Designed and implemented a responive web app.

2. Used React and Context for state management.

3. Used ReactCSSTransitionGroup for transitions.

4. Can fetch images from the flickr API and used the `tags` query parameter to search the query, and display the results.

5. The app can locally run and deployed.

6. One of the requirements requires the app to update results as user types. Initially had api calls every time user makes changes but this impacted performance as it was calling the api multiple times in quick succession. Resolved this by using `debounce` from `lodash` to ["group multiple sequential calls in a single one"](https://css-tricks.com/debouncing-throttling-explained-examples/).

7. All interactive elements are keyboard accessible.

## UI Design

I did a simple, clean, and responsive design.

The layout consists of:

- Logo

- Search bar

- Gallery in Masonry tiles, from 4 - 1 columns depending on screen size.

- Toggle tags feature enabled on smaller screens.

- Loader and Error messages

## Testing

Tests are done with `Jest` and `Enzyme`.

This combination was chosen because they are the most popular and are widely supported.

## Issues

The api is blocked by CORS. To get around this, I used an open source service [get by cors](https://getbycors.herokuapp.com/) to get around this issue. This is deployed to heroku as a free service so it will be slow.

Strangely during development, test coverage were hidden despite passing the `--coverage` flag to `test` script. After some research and experimenting, it was discovered that git was the culprit to causing test issues. After changes were committed (even a single time), it will break the tests. Given the project size and limited time, I created a new app and moved the files in order to resolve this issue quickly. (To see test coverage, you might need to create a new CRA and copy the files into the new CRA to test).

Some tests had to be split up into different files in order to get them to work. E.g. `action.test.js` and `fetchImagesFail.test.js`. These are split because the pass and fail test will not work if the tests are in the same file.

Some tests were not picked up by the coverage report:

```
store.test.js

index.tests.js
```

Another issue with testing is that the test suite throws an error when trying to mount/shallow `App`. The issue was that the `App.js` was in its own `App` folder. Tried to move the file into `src` but it is still not resolved.

## Other possible features

1. Photo editor + download

2. Social sharing options
