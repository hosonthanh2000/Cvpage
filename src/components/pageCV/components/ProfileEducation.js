import React ,{useState} from 'react'
import styles from '../styles/ProfileEducation.module.scss'
import icon from '../constant/styles/Icon.module.scss'
const ProfileEducation = () =>{

    const education_style = "fa fa-graduation-cap " + icon.style;
    const time_style = "fa fa-calendar "+ styles.content_school_time; 

    const [school,setSchool] = useState(
        [{
            schoolName : 'Cao Đẳng Viễn Đông',
            time:'08/2018-10/2021',
            specialisationName : 'Lập Trình Ứng Dụng',
            mediumScore : '7.5',
            graduationType : 'Khá',
        }]
    )

    const element = school.map((value,index)=>{
        return(
           <div
            key={index}
           >
               <div className={styles.school}>
                  <div className={styles.content_school_title}>
                    <span >{value.schoolName}</span>
                  </div>
                  <div className={time_style}>
                    <span  >{value.time}</span>
                  </div>
              </div>
              <div><span><b>Chuyên Ngành</b> : {value.specialisationName}</span></div>
              <div><span><b>Điểm Trung Bình</b>  : {value.mediumScore}</span></div>
              <div><span><b>Tốt Nghiệp</b> :  {value.graduationType}</span></div>
           </div> 
        )
    })

    return(
        <div className={styles.profile_education_wrapper}>
            <div className={icon.pd_10}>  
                    <span className={education_style}></span>
                    <span className={styles.title}>
                    HỌC VẤN 
                    </span>
            </div>
            <div className={styles.content}>
                {element}    
            </div>
        </div>
    )

}

export default ProfileEducation