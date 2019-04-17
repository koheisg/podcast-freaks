import twitterFollowersCount from 'twitter-followers-count'

require('dotenv').config()

async function run (accounts) {
  let getTwitterFollowers = twitterFollowersCount({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  })

  return await getTwitterFollowers(accounts)
}

export default run
