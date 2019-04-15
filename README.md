# Podcast Freaks

[![Netlify Status](https://api.netlify.com/api/v1/badges/8fefaabc-7813-412d-a1ee-901215b39f14/deploy-status)](https://app.netlify.com/sites/podcast-freaks/deploys)

Podcast Freaks - Japanese techie podcast archive

https://podcastfreaks.com/

## Getting started

### Local development

```
yarn
yarn prebuild # Download assets into /static/downloads
yarn dev
```

### Twitter Authentication


Create `.env` file on the root directory.

```
TWITTER_CONSUMER_KEY=xxxxxxxx
TWITTER_CONSUMER_SECRET=xxxxxxxx
TWITTER_ACCESS_TOKEN_KEY=xxxxxxxx
TWITTER_ACCESS_TOKEN_SECRET=xxxxxxxx
```

## Deployment from local

```sh
yarn build && yarn deploy
```
or if you have already execute 'prebuild'

```sh
yarn build:skip && yarn deploy
```

or if you want to push directly to Netlify with netlify-cli

```sh
yarn build:skip && yarn deploy:netlify
```


## Daily build

This project will be deploy daily by calling Netlify's 'Build hooks' from IFTTT.

## Forms

[!] You need to align items in form with `static/form.html`

Ref: https://qiita.com/hiropy0123/items/2e8d14ea66b78ab64847
