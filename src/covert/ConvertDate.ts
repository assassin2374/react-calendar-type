export const convertDateToString=(date:Date)=>{
  const yyyy = date.getFullYear();
  const mm = ("0"+(date.getMonth()+1)).slice(-2);
  const dd = ("0"+date.getDate()).slice(-2);
  return yyyy+'-'+mm+'-'+dd;
};