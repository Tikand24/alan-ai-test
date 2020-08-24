import React,{useEffect,useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';
import wordsToNumbers from 'words-to-numbers';
const alanKey = '530473e7ccabbf57d24645c7b993d7152e956eca572e1d8b807a3e2338fdd0dc/stage';
const newsKey= '5ec5c025bdec470eb63b9c8b07225a8d';

const App = ()=>{
	const classes = useStyles();
    const [newsArticles,setNewsArticles] = useState([]);
    const [activeArticle,setActiveArticle] = useState(-1);

    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand:({command,articles,number})=>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle)=> prevActiveArticle + 1);
                }else if(command==='open'){
                    const parsedNumber = number.length > 2 ?  wordsToNumbers(number):number;
                    const article = articles[parsedNumber - 1];
                    if(parsedNumber>20){
                        alanBtn().playText('please try that again')
                    }else if(article){
                        window.open(article.url,'_blank')
                        alanBtn().playText('Opening')
                    }
                }
            }
        })
    },[])
    return(
        <div>
            <h1>Alan AI Application</h1>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    )
}

export default App;