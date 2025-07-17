from fastapi import FastAPI
from pydantic import BaseModel, Field,field_validator
import joblib
from input_transformer import transform_user_input
import os
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model_path = os.path.join(os.path.dirname(__file__), "model", "model.pkl")
model = joblib.load(model_path)

class HeartInput(BaseModel):
    Age: int = Field(..., example=54)
    Sex: str = Field(..., example="M")
    ChestPainType: str = Field(..., example="ASY")
    RestingBP: int = Field(..., example=140)
    Cholesterol: int = Field(..., example=239)
    FastingBS: int = Field(..., example=0)
    RestingECG: str = Field(..., example="Normal")
    MaxHR: int = Field(..., example=160)
    ExerciseAngina: str = Field(..., example="Y")
    Oldpeak: float = Field(..., example=1.2)
    ST_Slope: str = Field(..., example="Flat")

    @field_validator("Sex")
    def check_sex(cls,v):
        if v=="":
            raise ValueError("Sex cannot be empty")
        return v
    
    @field_validator("ChestPainType")
    def check_chest_pain_type(cls,v):
        if v=="":
            raise ValueError("ChestPainType cannot be empty")
        return v
    
    @field_validator("RestingECG")
    def check_resting_ecg(cls,v):
        if v=="":
            raise ValueError("RestingECG cannot be empty")
        return v
    
    @field_validator("ExerciseAngina")
    def check_exercise_angina(cls,v):
        if v=="":
            raise ValueError("ExerciseAngina cannot be empty")
        return v
    
    @field_validator("ST_Slope")
    def check_st_slope(cls,v):
        if v=="":
            raise ValueError("ExerciseAngina cannot be empty")
        return v



@app.post("/predict")
def predict_heart_disease(data: HeartInput):
    user_input = data
    try:
        transformed = transform_user_input(dict(user_input))
        prediction = model.predict(transformed)
        return {"prediction": int(prediction[0])}
    except Exception as e:
        return {"error": str(e)}
