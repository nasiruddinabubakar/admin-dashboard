export async function getSalesData() {
  try{
  const response = await fetch('http://127.0.0.1:5000/api/admin/getdetails');
  
  const data =  await response.json();

  return data;
  }
  catch(err){
    console.log(err);
  }
  return [];
}
