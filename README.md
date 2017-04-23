# Swift Half!

## Set up

Pre-requisites: git, yarn, node v7+
`git clone`
`yarn`
Add a .env file to the root of the repo containing
```
GOOGLE_KEY=
NODE_ENV=
```

## Running

`yarn dev` for development and open localhost:8080
`yarn start` for prod build and open localhost:3000

## TODO

MVP features
make it look good
react helmet
google analytics
add tests ESPECIALLY for server
travis CI
logger reporting somewhere
caching strategy - googles directions will be wrong if you cache for too long... shit.
google caching? based on time of day?
sort dependencies
dockerization
aws set up + deploy
asset cache busting hashes
validation
NO JS - just do a message
Polyfill - samsung suck
Messages extraction/translation
less agressive css prefixing - set the versions in postcss

## Features

### MVP
2 people
public transport only
tested in London
1 route
List
No map

### Future
Sharing of directions
Multiple route options
Travel options
departure time
Venue types
Map view
More than 2 people
Multi person session (live)
voting
Ratings
Promoted venues
Ads
opening times?
venue filters (other than type)
