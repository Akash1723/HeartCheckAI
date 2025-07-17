import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score,classification_report
from preProcessing import pre_process_data
import json

X_train, X_test, y_train, y_test ,scaler= pre_process_data()

model=RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

y_pred=model.predict(X_test)
accuracy=accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)
print(classification_report(y_test, y_pred))

joblib.dump(model, 'model.pkl')
joblib.dump(scaler, 'scaler.pkl')

print("✅ Model and Scaler saved successfully!")