import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
      
      static defaultProps = {
        country:'in',
        pageSize:8,
        category:'business'
      };

      static propTypes ={
        country:PropTypes.string,
        category:PropTypes.string,
        pageSize:PropTypes.number,
      }

      captalizeFirstLetter = (string) =>{
          return string.charAt(0).toUpperCase() + string.slice(1);
      }

      constructor(props) {
        super(props);
        console.log("this is the constructors.")
        this.state = {
           articles: [],
           loading: true,
           page:1,
           totalResults: 0
        };
        document.title =  `${this.captalizeFirstLetter(this.props.category)} - News`;
      }

  async getUpdate(){
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    // const url = sampleData;
    this.props.setProgress(30)
    this.setState({loading:true});
    this.props.setProgress(50)
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData.articles);
    this.props.setProgress(70)
    this.setState({
      articles:parseData.articles,
      // articles:data.articles,
      totalResults:parseData.totalResults, 
      // totalResults:data.totalResults, 
      loading:false
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {

    // this all three is used before getUpdate function

    // console.log("object1213");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=10d7c5a203c24eb1835c313b29b1fd94&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData.articles);
    // this.setState({
    //   articles:parseData.articles,
    //   totalResults:parseData.totalResults, 
    //   loading:false
    // });
    this.getUpdate();

  };    

  handlePrevPage = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=10d7c5a203c24eb1835c313b29b1fd94&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData.articles);
    // this.setState({
    //   page:this.state.page - 1,
    //   articles:parseData.articles,
    //   loading: false
    // });
    // console.log(this.state.page);
    this.setState({page:this.state.page - 1});
    this.getUpdate();

  };

  handleNextPage = async() => {
    // if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))
    // {
    // }
    // else{
    //   this.setState({loading:true});
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=10d7c5a203c24eb1835c313b29b1fd94&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   console.log(parseData.articles);
    //   this.setState({
    //     page:this.state.page + 1,
    //     articles:parseData.articles,
    //     loading: false
    //   });
      // console.log(this.state.page);
    // }
    this.setState({page:this.state.page + 1});
    this.getUpdate();
  };

  fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page:this.state.page + 1})
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData.articles);
    this.setState({
      articles:this.state.articles.concat(parseData.articles),
      totalResults:parseData.totalResults,
      loading:false
      
    });
    console.log("art"+this.state.articles.length);
    console.log("art"+this.state.totalResults);
  };
      
  render() {
    // console.log("object");
    return (
      <>
        <h1 className='text-center' style={{marginTop:"100px", marginBottom:"25px"}}>Latest News | Top {this.captalizeFirstLetter(this.props.category)} Headlines</h1>
        
        {this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.articles.length !== this.state.totalResults ? <Spinner />:""}
          // {this.state.articles.length <= this.state.totalResults?loader=<Spinner />:""}

        >

        <div className="container">
          <div className="row mb-4">
              {/* this is use pagination button is use */}
              {/* {!this.state.loading && this.state.articles.map((data)=>{ */}  

              {!this.state.loading && this.state.articles.map((data)=>{
                  return <div className="col-md-4"  key={data.url}>
                      <NewsItems title={data.title ? data.title.slice(0,40)+"..." : "Title is not defined"}
                      description={data.description ? data.description.slice(0,65)+"..." : "Description is defined"}
                      imageUrl={data.urlToImage ? data.urlToImage : "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/29316/1656744578436/GeneralNews.jpg"}
                      url={data.url} author={data.author ? data.author : "Unknown"} date={data.publishedAt} source={data.source.name}/>
                  </div>
              })}
            </div>
          </div>   
          </InfiniteScroll>
            

          {/* <div className="container d-flex justify-content-between mb-4">
          <button disabled={this.state.page<=1?true:false} type="button" className="btn btn-dark" onClick={this.handlePrevPage}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextPage}>Next &rarr;</button>
          </div> */}
      </>
    )
  }
}

export default News

