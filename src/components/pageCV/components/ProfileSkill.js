import React, { useState } from 'react'
import styles from '../styles/ProfileSkill.module.scss'
import icon from '../constant/styles/Icon.module.scss'
const ProfileSkill = () =>{

    const icon_skill = "fa fa-book " + icon.style; 
    const icon_star = "fa fa-star " + icon.checked ;

    const [skill,setSkill] = useState(
        [
         {skillName:'JAVASCRIPT',star:3},
         {skillName:'PHP',star:3},
         {skillName:'KỸ NĂNG MỀM',star:2},
         {skillName:'TIẾNG ANH',star:2},
        ]
    )

    const handleStar = (count_star) =>{
        const sum = 5;
        const starChecked = count_star;
        const indents = [];
        for(var i = 0; i < starChecked ; i++){
            indents.push(<span key={i} className= {icon_star}></span>)
        }
        for(var k = starChecked ; k < sum ; k++){
            indents.push(<span key={k} className="fa fa-star"></span>)
        }
        return indents;
    }

    const element = skill.map((value,index)=>{
        return (
           <div
           key={index}
           >
            <div className={styles.content_title}><span>{value.skillName}</span></div>
            <div className={icon.pd_10_left}>        
                {handleStar(value.star)}
            </div>
          </div>  
        )
    })

    return (
        <div className={styles.profile_skill_wrapper}>
        <div className={icon.pd_10}>
            <span className={icon_skill}></span>
            <span className={styles.title}>
                KỸ NĂNG
            </span>
        </div>
        <div className={styles.content}>
           {element}
        </div>
       </div> 
    )

}

export default ProfileSkill