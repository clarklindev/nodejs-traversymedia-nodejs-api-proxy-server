CUSTOM NODE SERVER
RATE LIMITING (requests limits)
CACHEING

\*swagfinger API key from https://home.openweathermap.org/api_keys

Server used for hiding API keys, rate limiting and caching. This uses the [OpenWeather API](https://openweathermap.org/api) but you can easily change it to whatever public API you are using

.env.example is an example of what the .env file needs to look like
the .env is excluded in repository via .gitignore

https://swagfinger-node-api-proxy.herokuapp.com/ | https://git.heroku.com/swagfinger-node-api-proxy.git

## Usage

### Install dependencies

```bash
npm install
```

### Run on http://localhost:5000

```bash
npm run dev
```

### Add public API info

Rename **.env.example** to **.env** and edit the values

If the public API URL is **https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey}**

- API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
- API_KEY_NAME = "appid"
- API_KEY_VALUE = "YOUR API KEY"

You can add on any other query params as needed when hitting the /api endpoint such as https://yourdomain/api?q=detroit without having to add your key in the client

- Add new routes as you see fit
- Change rate limiting and caching to desired values
  This project is from this [YouTube tutorial](https://youtu.be/ZGymN8aFsv4)
