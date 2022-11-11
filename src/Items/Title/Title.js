import { useEffect } from "react"

const UseTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Wedding photography`;
    },[title])
};

export default UseTitle;