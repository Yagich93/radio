# radio

Application to create a linked playlist for a local radio.

## Usage

To load modules, run:

`yarn`

To start the app, run:

`yarn start`

**NOTE:** App starts on port `8080` by default.

To run tests, run:

`yarn test`

## API

This app has only one route to generate playlist:

`GET /playlist`

This route accepts one query parameter `length`, which indicates the number of desired songs.

### Example

Request:

`GET http://localhost:8080/playlist?length=3`

Response:

```
[
    {
        "title": "Damaged",
        "id": "1021",
        "durationMs": "235467",
        "artist": "Plumb"
    },
    {
        "title": "Don't Talk",
        "id": "3408",
        "durationMs": "321567",
        "artist": "10,000 Maniacs"
    },
    {
        "title": "Kumbaya",
        "id": "899",
        "durationMs": "176744",
        "artist": "Peter, Paul and Mary"
    }
]
```

## Limitations

This app has several known limitations:

- There is no validation of input parameters.
- There is no documentation generated apart of the description in this document.
- Database implementation has been simplified to reading pre-baked JSON file.
- The output playlists may have duplicates, even one after another, especially when encountering some rare symbols.
- No bonus requirements concerning playlist duration have been met. Only matching of the first letter of each song title to the last letter of previous one.