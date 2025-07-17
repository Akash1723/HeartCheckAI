import pandas as pd
import joblib
import json
import os

model_dir=os.path.join(os.path.dirname(__file__),"model")

def transform_user_input(user_input : dict):

    with open(os.path.join(model_dir, "expected_columns.json")) as f:
        expected_columns = json.load(f)

    scaler = joblib.load(os.path.join(model_dir, "scaler.pkl"))

    df = pd.DataFrame([user_input])

    df["Sex"] = df["Sex"].map({"M": 1, "F": 0})
    df["ExerciseAngina"] = df["ExerciseAngina"].map({"Y": 1, "N": 0})

    categorical_cols = ["ChestPainType", "RestingECG", "ST_Slope"]
    df = pd.get_dummies(df, columns=categorical_cols, drop_first=False)

    df = df.reindex(columns=expected_columns, fill_value=0)

    df=df.astype(int)

    scaled_df = scaler.transform(df)

    return scaled_df