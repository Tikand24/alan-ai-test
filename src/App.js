import React,{useEffect,useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '530473e7ccabbf57d24645c7b993d7152e956eca572e1d8b807a3e2338fdd0dc/stage';
const newsKey= '5ec5c025bdec470eb63b9c8b07225a8d';
const App = ()=>{
    const [newsArticles,setNewsArticles] = useState([]);

    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand:({command,articles})=>{
                console.log('commands',command);
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    console.log('arti',articles);
                }
            }
        })
    },[])
    return(
        <div>
            <h1>Alan AI Application</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    )
}

export default App;