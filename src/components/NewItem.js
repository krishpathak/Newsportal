import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import LoadingBar from 'react-top-loading-bar';
import InfiniteScroll from 'react-infinite-scroll-component'
const NewItem = (props) => {
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [progress, setProgress] = useState(0);
    const [totalResults, setTotalResults] = useState(10);
    
    const updatenews = async (page) => {
        console.log(10);
        setProgress(0);
        let url = `https://newsapi.org/v2/everything?q=${props.type}&apiKey=e7b769dc8d564160a344dd06d6f37066&pageSize=6&page=${page}`;
        setLoading(true);
        let data1 = await fetch(url);
        let parshed = await data1.json();
        console.log('API response:', parshed);
        
        setArticle(parshed.articles);
        setTotalResults(parshed.totalResults);
        setProgress(100);
        setLoading(false);
    };

    useEffect(() => {
        updatenews(page);
    }, [page]);

    const previous = async () => {
        setPage(page - 1);
    };

    const next = async () => {
        setPage(page + 1);
    };
    // const fetchMoredata=async()=>{
    // setPage(page+1);
    // const url = `https://newsapi.org/v2/everything?q=${props.type}&apiKey=e7b769dc8d564160a344dd06d6f37066&pageSize=6&page=${page}`;
    // let data1=await fetch(url);
    // let parsheddata= await data1.json();
    // setArticle(article.concat(parsheddata.articles));
    // setTotalResults(parsheddata.totalResults);

// progress(progress)
// {
//     setProgress(progress);
// }

    
    return (
    <>
    <h1 className="text-center">Monkey app {props.catagory} headlines</h1>
    <div className="text-center">{loading && <Spinner />}</div>
    <LoadingBar
        color='#f11946'
        progress={progress}
      />
      {/* <InfiniteScroll
      dataLength={5} 
      next={fetchMoredata}
      hasMore={ (page * 5) < totalResults}
      loader={    
      <Spinner/>}> */}
      <div className="row">
        
        {article && article.map((article, index) => (
          <div className='col-sm-4 my-'style={{marginleft:'15%'}}>
            {/* <div>This is news NewItem {index + 1}</div> */}
            <div className="card" style={{ width: '18rem' }}>
              <img src={article.urlToImage?article.urlToImage:"https://th.bing.com/th?id=OIP.GPgOs_sd9nF8fsKDOJe9dQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"style= {{left:"50%"}}> {article.source.name}</span>
                <h6 className='card-Author'>{article.author}</h6>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary">visit
                </a>
                <p className="card-text"><small className="text-body-secondary">Last updated by {article.author} on {article.publishedAt}</small></p>
              </div>
            </div>
          </div>
        ))}</div>
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between">
        <button disabled={page<=1} className="btn btn-primary" type="button" onClick={previous}>Previous</button>
        <button  className="btn btn-primary" type="button" onClick={next}>Next</button>
        
      </div>
      </>
    );
}



// NewItem.defaultProps={

// }
// NewItem.ptopTypes={

// }
export default NewItem