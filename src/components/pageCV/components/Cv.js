import React from 'react'
import ProfileContact from './ProfileContact'
import ProfileCareerGoals from './ProfileCareerGoals';
import ProfileHobby from './ProfileHobby';
import ProfileEducation from './ProfileEducation';
import ProfileWork from './ProfileWork';
import ProfileCertificate from './ProfileCertificate';
import ProfileSkill from './ProfileSkill';
import ProfileImage from './ProfileImage';
import styles from '../styles/Cv.module.scss'
import 'font-awesome/css/font-awesome.min.css';
const Cv = React.forwardRef((props,ref) =>{
    return (
        <div ref={ref} className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col_4}>
                     <ProfileImage/>
                     <ProfileContact/>
                     <ProfileCareerGoals/>
                     <ProfileHobby/>
                </div>
                <div className={styles.col_8}>
                    <ProfileEducation/>
                    <ProfileWork/>
                    <ProfileCertificate/>
                    <ProfileSkill/>
                </div>
            </div>
        </div>
    )
})

export default Cv