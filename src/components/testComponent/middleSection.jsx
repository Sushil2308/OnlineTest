import React, { Component } from "react";
import { LoadingOutlined, EyeFilled ,EyeInvisibleFilled,LikeFilled  } from "@ant-design/icons";
import { Spin, Tooltip } from "antd";
const antIcon = (
  <LoadingOutlined type="loading" style={{ fontSize: 24 }} spin />
);
class MiddleSection extends Component {
  state = {
    data: {},
    index: 0,
    lastIndex:-1,
    loading: true,
  };
  componentDidMount() {
    this.mapData();
  }
  componentDidUpdate(preProps, preState) {
    if (this.props !== preProps) {
      this.mapData();
    }
  }
  mapData = async () => {
    const { id = "", question = "", options = "" ,status=0,answerd=-1} = this.props.question;
    const tempData = { id: id, question: question, options: eval(options) ,status:status,answerd:answerd};
    this.setState({
      data: tempData,
      index: this.props.questionIndex,
      lastIndex:this.props.lastIndex,
      loading: false,
    });
  };
  render() {
    const { data = {}, index = 0, loading = true,lastIndex=0 } = this.state;
    console.log(this.state);
    return (
      <div className="container-fluid  ">
        {!loading ? (
          <>
            <div className="row col-12 flex-column mb-2">
              <div className="row col-12 py-2 mt-2 testBack bg-shadow">
                <h5 className="row col-12 d-flex justify-content-start align-items-center fontQuesSize mt-1">{`Q.${
                  index + 1
                }) ${data.question}`}</h5>
              </div>
              <div className="mSpace"></div>
              <div className="row col-2 py-2 mt-1 bg-shadow rounded-circle py-4">
                {data.status === 0 ? (
                   <Tooltip title="Question Is Not Viewd">
                  <EyeInvisibleFilled 
                    style={{ fontSize: 40 }}
                    className="text-warning"
                  />
                  </Tooltip>
                ) : data.status === 1 ? (
                  <Tooltip title="Question Is Already Viewd But Not Solved">
                  <EyeFilled
                    style={{ fontSize: 40 }}
                    className="text-primary"
                  />
                  </Tooltip>
                ) : (
                  <Tooltip title="Answer Is Already Submitted">
                  <LikeFilled 
                    style={{ fontSize: 40 }}
                    className="text-success"
                  />
                  </Tooltip>
                )}
              </div>
              <div className="mSpace"></div>
              <div className="row col-12 py-2 mt-1 ">
                <h5 className=" justify-content-start align-items-center fontSize">{`Choose correct answere from given options.`}</h5>
              </div>
              
              {data.options.map((option, index) => (
                <div className="row col-12 py-2 testBack mt-1 mb-1 bg-shadow" key={""+option+index}>
                  <div className="form-check">
                    <label className="form-check-label fontSize">
                   {data.answerd===index?
                    
                    <input
                        type="radio"
                        className="form-check-input pointer"
                        value={option}
                        name="option"
                        checked
                        onClick={()=>this.props.handleViewd(data.id,index)}
                      />
                    :<input
                    type="radio"
                    className="form-check-input pointer"
                    value={option}
                    name="option"
                    
                    onClick={()=>this.props.handleViewd(data.id,index)}
                  />}
                      
                      {`${String.fromCharCode(index + 65)}. ${option}`}
                    </label>
                  </div>
                </div>
              ))}
             
            </div>
            <div className="row col-12  d-flex justify-content-start align-items-center mt-1 mb-2">
              
              <button className={index>0?"btn col-3 btn-outline-primary":"btn col-3 btn-outline-primary disabled"}
               onClick={()=>this.props.handleNext(data.id-1)}
              >Prev</button>
              <div className="col-6"></div>
              <button className={index<lastIndex-1?"btn col-3 btn-outline-success":"btn col-3 btn-outline-success disabled"}
               onClick={()=>this.props.handleNext(data.id+1)}
              >Next</button>
          </div>
          </>
        ) : (
          <Spin indicator={antIcon} />
        )}
      </div>
    );
  }
}
export default MiddleSection;
