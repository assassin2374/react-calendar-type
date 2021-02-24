import { useState, useEffect } from 'react';
import './Calendar.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { ScheduleData } from './model/ScheduleData';

const sampleSchedule:ScheduleData={
  id:0,
  user_id:0,
  ymd_date:'',
  contents:'',
};

const convertDateToString=(date:Date)=>{
  const yyyy = date.getFullYear();
  const mm = ("0"+(date.getMonth()+1)).slice(-2);
  const dd = ("0"+date.getDate()).slice(-2);
  return yyyy+'-'+mm+'-'+dd;
};

const Calendar = () => {
  const [scheduleList, setScheduleList] = useState([sampleSchedule]);
  const [contents, setContents] = useState('');
  const [ymdData, setYmdData] = useState(convertDateToString(new Date()));

  const history = useHistory();

  useEffect(()=>{
    const getScheduleList = async()=>{
      const response = await axios.get('http://localhost:4000');
      setScheduleList(response.data);
    };
    getScheduleList();
  }, [setScheduleList]);

  const addYmdData=(e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.value.length !== 0){
      setYmdData(e.target.value);
      console.log(ymdData);
    }
  }

  const addContents=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const value:string = String(e.target.value);
    setContents(value);
  }
  
  const addSchedule=async()=>{
    if(contents==='')return;
    // let newId = 0;
    // if(scheduleList.length > 0){
    //   newId = Math.max(...scheduleList.map((todo=>todo.id)));
    //   newId++;
    // }
    const newScheduleList = scheduleList.slice();
    const newSchedule:ScheduleData = {
      user_id:1,
      ymd_date:ymdData,
      contents:contents,
    };

    const response = await axios.post<string>(`http://localhost:4000`, newSchedule);
    const newId = response.data;
    newSchedule.id = parseInt(newId);
    newScheduleList.push(newSchedule);

    setScheduleList(newScheduleList);
    setContents('');
  }

  return (
    <div>
      <div>schedule</div>
      <input type="date" value={ymdData} onChange={addYmdData}/>
      <div>
        <input type='text' value={contents} onChange={addContents}/>
        <button onClick={addSchedule}>追加</button>
      </div>
      <div>
        {scheduleList.map((schedule)=>{
          return(
            <div key={schedule.id} onClick={()=> history.push(`/schedule/${schedule.id}`)}>
              {schedule.ymd_date}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Calendar;