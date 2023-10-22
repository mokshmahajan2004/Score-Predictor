import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[hours_studied,sethours_studied]=useState("")
  const[previous_score,setprevious_score]=useState("")
  const[extracurricular_activities,setextracurricular_activities]=useState("")
  const[sleep_hours,setsleep_hours]=useState("")
  const[sample_papers_solved,setsample_papers_solved]=useState("")
  const[predictedscore,setPredictedScore]=useState("")

  const handlePrediction = async () => {
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hours_studied,
        previous_score,
        extracurricular_activities,
        sleep_hours,
        sample_papers_solved
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setPredictedScore(data.predicted_score);
    }
  };

  return (
 
    <div className="App">
       <h1>Score Predictor</h1>

       <label>
       hours studied
       <br/>
     <input
      placeholder='hours_studied'
      onChange={(e)=>sethours_studied(e.target.value)}
      
     />

     </label>
     <br/>
     <br/>
     <input
      placeholder='previous_score'
      onChange={(e)=>setprevious_score(e.target.value)}
      
     />
     <br/>
     <br/>
     <select onChange={(e)=>setextracurricular_activities(e.target.value)}>
      <option value='1'>yes</option>
      <option value='0'>no</option>
     </select>
     <br/>
     <br/>
     <input
      placeholder='sleep_hours'
      onChange={(e)=>setsleep_hours(e.target.value)}
     />
      <br/>
     <br/>
     <input
      placeholder='sample_papers_solved'
      onChange={(e)=>setsample_papers_solved(e.target.value)}
     />
     <br/>
     <br/>
     <button onClick={handlePrediction}>Submit</button>


<h2> your expected score {predictedscore}</h2>
    </div>
  );
}

export default App;