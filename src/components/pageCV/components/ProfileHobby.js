import React , {useState}from 'react'
import styles from '../styles/ProfileHobby.module.scss'
const ProfileHobby = () => {

    const [hobby,setHobby] = useState(
        [{text:'Đọc Sách',icon:''},
         {text:'Chạy Bộ',icon:''}
        ]
    )

    const element = hobby.map((value,index)=>{
        return(
            <div key={index}>
                <span>+{value.text}</span>
            </div>
        )
    })

    return (
        <div className={styles.profile_hobby_wrapper}>
            <div className={styles.title}>SỞ THÍCH</div>
            <div className={styles.content}>
                {element}
            </div>
        </div>
    )

}

export default ProfileHobby