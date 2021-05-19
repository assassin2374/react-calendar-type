import { useHistory } from "react-router-dom";
import { ScheduleDate, initScheduleDate } from '../model/ScheduleDate';

export const List=(scheduleList:ScheduleDate[])=>{
  const history = useHistory();
  
  return(
    <div>
      {scheduleList.map((schedule)=>{
          return(
            <div key={schedule.id} onClick={()=> history.push(`/schedule/${schedule.id}`)}>
              {schedule.ymd_date}/{schedule.contents}
            </div>
          )
        })}
    </div>
  )
}