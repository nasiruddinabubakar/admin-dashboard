export async function getSalesData() {
  console.log("papa");
  try{
  const response = await fetch('http://127.0.0.1:5000/api/admin/getdetails');
  
  const data =  await response.json();
    console.log("papa");
  return data;
  }
  catch(err){
    console.log(err);
  }
  return [];
}

export async function getBookings  ()  {
  try{
    const response = await fetch('http://127.0.0.1:5000/api/admin/getbookings');
    
    const data =  await response.json();
   
  return data;
  }
  catch(err){
      console.error(err);
  }
  return [];
}