## Running

Simple flask api to return json data to boat-co frontend.

docker build -t boatCoBackend
docker run -it -p 5000:5000 boatCoBackend

Alternatively, make a virtual env and run as a standalone python app

## Endpoints

"/boats" - GET
Returns json object, example payload:

```
[{
    "id": "444c271f-7a9f-4a92-9163-dd1bc084d713",
    "cost": "$1",
    "picture": "https://via.placeholder.com/200x200",
    "title": "BoatyMcBoatFace",
    "about_short": "boating around\r\n",
    "about_long": "boating and chilling out :)\r\n"
}]
```