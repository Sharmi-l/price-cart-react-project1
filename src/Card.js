
import React from 'react';


const Card = (props) => {
    console.log(props)
  return (


   
 
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{props.datas.type}</h5>
              <h6 className="card-price text-center">{props.datas.rate}<span className="period">{props.datas.month}</span></h6>
              <hr/>
              <ul className="fa-ul">
                <li className={props.datas.users === "tick" ? "":"text-muted"}><span className="fa-li"><i className= {props.datas.users === "tick" ?  "fas fa-check" : "fas fa-times"}></i></span>{props.datas.type === "FREE" ? props.datas.user : <b>{props.datas.user}</b>}</li>
                <li className={props.datas.storages === "tick" ? "":"text-muted"}><span className="fa-li"><i className= {props.datas.storages === "tick" ?  "fas fa-check" : "fas fa-times"}></i></span>{props.datas.storage}</li>
                <li className={props.datas.packages === "tick" ? "":"text-muted"}><span className="fa-li"><i className= {props.datas.packages === "tick" ?  "fas fa-check" : "fas fa-times"}></i></span>{props.datas.package}</li>
                <li className={props.datas.accesss === "tick" ? "":"text-muted"}><span className="fa-li"><i className= {props.datas.accesss === "tick" ?  "fas fa-check" : "fas fa-times"}></i></span>{props.datas.access}</li>
                <li className={props.datas.projects === "tick" ? "":"text-muted"}><span className="fa-li"><i className= {props.datas.projects === "tick" ?  "fas fa-check" : "fas fa-times"}></i></span>{props.datas.project}</li>
                <li className={props.datas.supports === "tick" ? "":"text-muted"}><span className="fa-li"><i className=  {props.datas.supports === "tick" ?  "fas fa-check" : "fas fa-times"}></i></span>{props.datas.support}</li>
                <li className={props.datas.domains === "tick" ? "":"text-muted"}><span className="fa-li"><i className= {props.datas.domains === "tick" ?  "fas fa-check" : "fas fa-times"}></i></span>{props.datas.type === "PRO" ? <><b>Unlimited</b> {props.datas.domain}</> : props.datas.domain } </li>
                <li className={props.datas.reports === "tick" ? "":"text-muted"}><span className="fa-li"><i className= {props.datas.reports === "tick" ?  "fas fa-check" : "fas fa-times"}></i></span>{props.datas.report}</li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
    
 
  )
}

export default Card
