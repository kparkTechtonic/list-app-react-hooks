# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

# import numpy as np 
# import matplotlib.pyplot as plt

# import pandas as pd 
# import re
# import nltk 
# nltk.download('stopwords')
# import os
import pymongo
from pymongo import MongoClient

client = MongoClient('mongodb+srv://username:password1234@kparktechtonic-izx3z.mongodb.net/CommentBoard?retryWrites=true&w=majority')

print("hi")

# dirname = os.path.dirname(__file__)
# data_source_url = os.path.join(dirname, './data.csv')
# comments = pd.read_csv(data_source_url)
# comments.head()

# features = comments.iloc[:, 10].values
# labels = comments.iloc[:, 1].values

# processed_features = []

# for sentence in range(0, len(features)):
#     # Remove all the special characters
#     processed_feature = re.sub(r'\W+|\s+[a-zA-Z]\s+|\^[a-zA-Z]\s+|\s+|^b\s+', ' ', str(features[sentence]))

#     # # remove all single characters
#     # processed_feature= re.sub(r'\s+[a-zA-Z]\s+', ' ', processed_feature)

#     # # Remove single characters from the start
#     # processed_feature = re.sub(r'\^[a-zA-Z]\s+', ' ', processed_feature) 

#     # # Substituting multiple spaces with single space
#     # processed_feature = re.sub(r'\s+', ' ', processed_feature, flags=re.I)

#     # # Removing prefixed 'b'
#     # processed_feature = re.sub(r'^b\s+', '', processed_feature)

#     # Converting to Lowercase
#     processed_feature = processed_feature.lower()

#     processed_features.append(processed_feature)
    
# from nltk.corpus import stopwords
# from sklearn.feature_extraction.text import CountVectorizer

# vectorizer = CountVectorizer(max_features=2500, min_df=7, max_df=0.8, stop_words=stopwords.words('english'))
# processed_features = vectorizer.fit_transform(processed_features).toarray()

# from sklearn.model_selection import train_test_split

# X_train, X_test, y_train, y_test = train_test_split(processed_features, labels, test_size=0.2, random_state=0)

# from sklearn.ensemble import RandomForestClassifier

# text_classifier = RandomForestClassifier(n_estimators=200, random_state=0)
# text_classifier.fit(X_train, y_train)

# predictions = text_classifier.predict(X_test)

# from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

# print(confusion_matrix(y_test,predictions))
# print(classification_report(y_test,predictions))
# print(accuracy_score(y_test, predictions))
