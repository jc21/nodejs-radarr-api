# Radarr API Client

See: https://github.com/Radarr/Radarr/wiki/API

### Usage

```javascript
const Radarr = require('@jc21/radarr-api').Radarr;

let r = new Radarr('https://USER:PASS8@radarr.example.com', 'APIKEY');

r.movies()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error('ERR:', err);
    });
```


### Compiling

```bash
npm install
tsc --project tsconfig.build.json
```

