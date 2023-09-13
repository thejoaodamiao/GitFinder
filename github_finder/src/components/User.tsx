import { UserProps } from "../Types/user"
import {MdLocationPin} from "react-icons/md"

import { Link } from "react-router-dom"

import classes from "./User.module.css"

const User = ({login, 
    avatar_url, 
    followers, 
    following, 
    location}: UserProps) => {
  return (
    <div className={classes.user}>
        <img src={avatar_url} alt="" />
        <h2>{login}</h2>
       {location && (
            <p className={classes.location}>
                <MdLocationPin/>
                <span>{location}</span>
            </p>
       )}
        <div className={classes.stats}>
            <div className={classes.numbers}>
                <p>Seguidores:</p>
                <p>{followers}</p>
            </div> 
            <div className={classes.numbers}>
                <p>Seguindo:</p>
                <p>{following}</p>
            </div> 
        </div>
        <Link to={`/repos/${login}`}> Ver Melhores projetos</Link>
    </div>
  )
}

export default User