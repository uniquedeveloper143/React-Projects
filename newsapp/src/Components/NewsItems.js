import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description , imageUrl, url, author, date, source} = this.props;
    return (
      <div>
        <div className="card m-3">
            <div style={{display:"flex", justifyContent:"flex-ent", position:"absolute",right:"0"}}>
            <span className="badge rounded-pill bg-danger" >{source}</span>
            </div>
            <img src={imageUrl} className="card-img-top" alt="..." style={{height: "15rem"}}/>
            
            <div className="card-body">
                <h5 className="card-title">{title}

                <span className="badge bg-secondary">New</span></h5>
                <p className="card-text">{description}</p>
                
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark text-center mb-4">Read More...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItems;
