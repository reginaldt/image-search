# Image Search Abstraction Layer

This is a simple application that  can get the image URLs, alt text and page urls for a set of images relating to a given search string.

# Example 

Search: 
```
https://rtapan-image-search.herokuapp.com/api/imagesearch/lolcats%20funny?offset=4

```
Response:
```
[{"url":"http://4.bp.blogspot.com/-epxUtTpidgM/Tl0LrfIwPOI/AAAAAAAAdOY/rwZA0Zb_jWg/s1600/lolcats5.jpg","snippet":"Hilarious LOLcats Seen On www.coolpicturegallery.us","thumbnail":"http://ts1.mm.bing.net/th?id=OIP.Mb796e2f7a6f4001d32c898791a7c4921H0&pid=15.1","context":"http://coolanimalspics.blogspot.com/2011/08/hilarious-lolcats.html"},{"url":"http://www.dumpaday.com/wp-content/uploads/2012/12/funny-lolcats.jpg","snippet":"funny lolcats - Dump A Day","thumbnail":"http://ts1.mm.bing.net/th?id=OIP.M458d6d7c38dfd8f66c87f7bf8fc39c64o0&pid=15.1","context":"http://www.dumpaday.com/funny-pictures/random-funny-pictures-28-pics-2/attachment/funny-lolcats/"},{"url":"http://www.innocentenglish.com/funny-pics/lolcats/funny-cat-swimmingin-styro.jpg","snippet":"Pics Photos - Hilarious Lolcats 13 Really Funny Kitten Lolcat Pictures","thumbnail":"http://ts4.mm.bing.net/th?id=OIP.M628e7dfb63b4f578bbc7322e471e9228o0&pid=15.1","context":"http://funny-pictures.picphotos.net/hilarious-lolcats-13-really-funny-kitten-lolcat-pictures/innocentenglish.com*funny-pics*lolcats*funny-cat-swimmingin-styro.jpg/"},{"url":"http://harry.enzoverder.be/cats/lolcats-funny-picture-my-feet.jpg","snippet":"feet back lolcats funny picture lalalalala lolcats funny pictures ...","thumbnail":"http://ts3.mm.bing.net/th?id=OIP.M2d09bc92f2d2455c7bf9ca0de7bae80eo0&pid=15.1","context":"http://harry.enzoverder.be/cats/tn/lolcats-funny-picture-my-feet.jpg.html"}]
```

Display recent search: 
```
https://rtapan-url-shortener.herokuapp.com/29

```
Response:
```
[{"term":"bulldog","when":"2016-07-11T13:53:40.852Z"},{"term":"lolcats funny","when":"2016-07-11T13:53:38.560Z"},{"term":"nba","when":"2016-07-11T13:51:49.240Z"},{"term":"lolcats funny","when":"2016-07-11T13:51:33.836Z"},{"term":"lolcats funny","when":"2016-07-11T13:46:49.629Z"},{"term":"lolcats funny","when":"2016-07-11T13:46:41.080Z"},{"term":"lolcats funny","when":"2016-07-11T13:46:32.877Z"}]
```

# Prerequisites

In order to use this app, you must have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)

### Local Environment Variables

Create a file named `.env` in the root directory. This file should contain:

```
MONGO_URI=mongodb://localhost:27017/clementinejs
PORT=8080
APP_URL=http://localhost:8080/
```
NOTE that the current value of mongo uri must be changed when you checkout AND change the value of BING_KEY in settings.js (config directory) to your own bing_key.

# Starting the App

To start the app, make sure you're in the project directory and type `node server.js` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:

```
Node.js listening on port 8080...
```

Next, open your browser and enter `http://localhost:8080/`. Congrats, you're up and running!

# License

MIT License. [Click here for more information.](LICENSE.md)
