import {useSelector} from 'react-redux'
export const Counter1 = ()=>{
    const count=useSelector(state =>{return state});
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};