export type ScheduleDate = {
  id?:number,
  user_id:number,
  ymd_date:string,
  contents:string,
};

export const initScheduleDate:ScheduleDate ={
  id:0,
  user_id:0,
  ymd_date:'',
  contents:'',
};