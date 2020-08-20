import React,{useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '530473e7ccabbf57d24645c7b993d7152e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = ()=>{

    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand:({command})=>{
                console.log('commands',command);
                if(command === 'testCommand'){
                    alert( 'this code');
                }
            }
        })
    },[])
    return(
        <div>
            <h1>Alan AI Application</h1>
        </div>
    )
}

export default App;