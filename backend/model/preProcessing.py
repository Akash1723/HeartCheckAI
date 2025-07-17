import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import json

def pre_process_data():
    #data
    data=pd.read_csv('heart.csv')

    #converting catagorical data to numerical
    data['Sex']=data['Sex'].map({'M':1,'F':0})
    data['ExerciseAngina']= data['ExerciseAngina'].map({'Y':1,'N':0})

    #converting catagorical data to numerical using onehotencoding
    catagorical_columns=data.select_dtypes(include='object').columns
    data_tranformed=pd.get_dummies(data,columns=catagorical_columns,drop_first=False)
    data_tranformed=data_tranformed.astype(int)

    #filling missing values with mean
    data_tranformed.fillna(data_tranformed.mean(),inplace=True)

    #splitting data
    x=data_tranformed.drop('HeartDisease',axis=1)
    y=data_tranformed['HeartDisease']
    x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=42)

    #scaling data
    scaler=StandardScaler()
    x_train=scaler.fit_transform(x_train)
    x_test=scaler.transform(x_test)

    #saving expected columns in json file for first time
    # with open("expected_columns.json", "w") as f:
    #     json.dump(list(x.columns.tolist()), f)

    return x_train,x_test,y_train,y_test,scaler

