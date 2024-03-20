var path = require('path')
var aylien = require("aylien_textapi");

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)
console.log(`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>&units=imperial ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
var textapi = new aylien({
    application_id: "your-api-id",
    application_key: "your-key"
  });
  var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 });
 fetch('http://localhost:3600/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "firstName": "Marcos",
            "lastName": "Silva",
            "email": "marcos.henrique@toptal.com",
            "password": "s3cr3tp4sswo4rd"
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });
    app.get('/users/:userId', [
        UsersController.getById
    ]);
    class App extends Component {
        constructor() {
          super();
          this.state = {
            head: 0,
            data: [],
            firstName: "atheer",
            lastName: "alrawahi",
            err: null
          };
        }
      
        componentDidMount() {
          axios
            .get("http://localhost:3001/api/player", {
              params: {
                firstName: this.state.firstName,
                lastName: this.state.lastName
              }
            })
            .then(response => {
              this.setState({
                data: response.data
              });
              console.log(this.state.data);
            })
            .catch(err => {
              //this.err = err;
            });
        }
        render() {
            return (
              <>
                <p>{this.state.data.players[0].player.firstName}</p>
                <p>Hello</p>
              </>
            );
          }
        }