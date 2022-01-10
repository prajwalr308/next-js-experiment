import React, { useState } from 'react'
import headerStyles from '../styles/header.module.css'

const Header = () => {
    const [isClicked, setisClicked] = useState(true)
    return (
        <div>
            <h1 className={headerStyles.title} onClick={()=>setisClicked(!isClicked)}><span>web dev </span>News</h1>
            {/* <style jsx>{`.title {color: ${isClicked?'red':'blue'};
        cursor:'pointer'}`}</style> */}
        </div>
    )
}

export default Header
