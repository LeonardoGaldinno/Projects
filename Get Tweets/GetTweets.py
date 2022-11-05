
import tweepy
import configparser

#Read configs from "ConfigKeys.ini"
config = configparser.ConfigParser()
config.read('c:/Users/Q1049445/Desktop/Personal/Projects/Python/Get Tweets/ConfigKeys.ini')

#Get the values from the "ConfigKeys.ini" file
api_key = config['twitter']['api_key']
api_key_secret = config['twitter']['api_key_secret']
access_token = config['twitter']['access_token']
access_token_secret = config['twitter']['access_token_secret']

#Authentication
auth = tweepy.OAuthHandler(api_key,api_key_secret) #Use the Tweepy library to pass the API keys to the authentication handler method
auth.set_access_token(access_token,access_token_secret)

#Create an API instace passing the auth variable for the app authentication
api = tweepy.API(auth)
public_tweets = api.home_timeline()

print(public_tweets)
