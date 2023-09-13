import { useState } from "react"
import Search from "../components/Search"
import { UserProps } from "../Types/user"
import  User  from "../components/User"
import Error from "../components/Error"

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName:string) => {
    setError(false);
    setUser(null);

    // const res =await fetch(`https://api.github.com/user/${userName}`,{
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json;charset=UTF-8",
    //     Authorization: `Bearer ${Token}`,
    //     "X-GitHub-Api-Version": "2022-11-28"}
      
    // });

    const res =await fetch(`https://api.github.com/user/${userName}`)

    const data = await res.json();
 
    if(res.status === 404){
      setError(true);
      return;
    }
    const {avatar_url, login, location, followers, following} = data;
   
    const userData: UserProps ={
      avatar_url,
      login,
      location,
      followers,
      following,
    }
    console.log(userData);
    setUser(userData);

    
  }

  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <User{...user}/>}
      {error && <Error/>}
    </div>
  )
}

export default Home;