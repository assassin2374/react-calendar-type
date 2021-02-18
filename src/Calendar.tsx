import { useState, useEffect } from 'react';
import './Calendar.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';

type Schedule ={
  id:number,
  user_id:number,
  ymdData:string,
  contents:string,
};


const convertDateToString=(date:Date)=>{
  //date.setDate(date.getDate());
  const yyyy = date.getFullYear();
  const mm = ("0"+(date.getMonth()+1)).slice(-2);
  const dd = ("0"+date.getDate()).slice(-2);
  return yyyy+'-'+mm+'-'+dd;
};

const Calendar = () => {
  const [scheduleList, setScheduleList] = useState([]);
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
    let newId = 0;
    if(scheduleList.length > 0){
      newId = Math.max(...scheduleList.map((todo:Schedule=>todo.id)) + 1;
    }
    const newScheduleList = scheduleList.slice();
    const newSchedule ={
      id:newId,
      user_id:1,
      year:ymdData.split[0],
      month:ymdData.split[1],
      day:ymdData.split[2],
      contents:contents,
    };

    await axios.post(`http://localhost:4000`, newSchedule);
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
            <div schedule={schedule} key={schedule.id} onClick={()=> history.push(`/schedule/${schedule.id}`)}>
              {schedule.year}/{schedule.month}/{schedule.day}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Calendar;