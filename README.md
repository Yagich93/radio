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