import tweepy
import configparser
from pandas import pandas as pd

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

#Creating an array to define the columns
columns = ['Time', 'User', 'Tweet']
data = []

#Getting the data from the object and append it on the data array
for tweet in public_tweets:
    data.append([tweet.created_at, tweet.user.screen_name, tweet.text])

# Creating a dataframe and exporting the data to csv
df = pd.DataFrame(data,colunms=columns)
df.to_csv('tweets.csv')
