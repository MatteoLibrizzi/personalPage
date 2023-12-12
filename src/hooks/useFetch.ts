import { useEffect, useState } from "react";
 
const useFetch = (request: Request) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
 
  useEffect(() => {
    fetch(request)
    .then((res) => res.json())
    .then((data) => {
        seterror(data.error)
        setdata(data.joke)
        setloading(false)
    })
  }, [request]);
 
  return { data, loading, error };
};
 
export default useFetch;