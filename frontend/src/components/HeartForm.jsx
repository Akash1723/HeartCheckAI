import { useForm } from "react-hook-form";
import "../CSS/HeartForm.css";

const HeartForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="label_div">Enter your age:</div>
          <div>
            <input
              placeholder="Age"
              {...register("Age", { required: true })}
              type="number"
            className="input_fld" required/>
          </div>
        </div>
        <div>
          <div className="label_div">
            Select Sex:
          </div>
          <div>
            <select {...register("Sex", { required: true })} className="input_fld" required>
              <option value="">--SEX--</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
        </div>
        <div>
          <div className="label_div">Select Chest Pain Type:</div>
          <div>
            <select {...register("ChestPainType", { required: true })} className="input_fld" required>
              <option value="">--ChestPainType--</option>
              <option value="ASY">ASY</option>
              <option value="NAP">NAP</option>
              <option value="TA">TA</option>
              <option value="ATA">ATA</option>
            </select>
          </div>
        </div>
        <div>
          <div className="label_div">Enter RestingBP:</div>
          <div>
            <input
              placeholder="RestingBP"
              {...register("RestingBP", { required: true })}
              type="number"
              className="input_fld"
              required
            />
          </div>
        </div>
        <div>
          <div className="label_div">Enter Cholestrol Level:</div>
          <div>
            <input
              placeholder="Cholesterol"
              {...register("Cholesterol", { required: true })}
              type="number"
              className="input_fld"
              required
            />
          </div>
        </div>
        <div>
          <div className="label_div">Enter FastingBP:</div>
          <div>
            <input
              placeholder="FastingBS"
              {...register("FastingBS", { required: true })}
              type="number"
              className="input_fld"
              required
            />
          </div>
        </div>
        <div>
          <div className="label_div">Select Resting ECG:</div>
          <div>
            <select {...register("RestingECG", { required: true })} className="input_fld" required>
              <option value="">--Resting ECG--</option>
              <option value="Normal">Normal</option>
              <option value="ST">ST</option>
              <option value="LVH">LVH</option>
            </select>
          </div>
        </div>
        <div>
          <div className="label_div">Enter Max Heart Rate:</div>
          <div>
            <input
              placeholder="MaxHR"
              {...register("MaxHR", { required: true })}
              type="number"
              className="input_fld"
              required
            />
          </div>
        </div>
        <div>
          <div className="label_div">Select Exercise Angina:</div>
          <div>
            <select {...register("ExerciseAngina", { required: true })} className="input_fld" required>
              <option value="">--Exercise Angina--</option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>
        </div>
        <div>
          <div className="label_div">Enter Oldpeak:</div>
          <div>
            <input
              placeholder="Oldpeak"
              {...register("Oldpeak", { required: true })}
              type="number"
              step="0.1"
              className="input_fld"
              required
            />
          </div>
        </div>
        <div>
          <div className="label_div">Select ST Slope:</div>
          <div>
            <select {...register("ST_Slope", { required: true })} className="input_fld" required>
              <option value="">--ST Slope--</option>
              <option value="Flat">Flat</option>
              <option value="Up">Up</option>
              <option value="Down">Down</option>
            </select>
          </div>
        </div>
            <button type="submit" className="submit_btn">Predict</button>
      </form>
    </div>
  );
};

export default HeartForm;
