import React, { Component } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Tooltip } from "antd";
const antIcon = (
  <LoadingOutlined type="loading" style={{ fontSize: 24 }} spin />
);
class NavSection extends Component {
  state = {
    tempData: {},
    loading: true,
  };
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(preProps,preState){
      if(this.props!==preProps){
        this.fetchData();
      }
  
  }
  fetchData = async () => {
    this.setState({ tempData: this.props.fetchViewdNonViewd, loading: false });
  };
  render() {
    const { tempData,loading=true } = this.state;
    console.log(this.state)
    return (
      <div className="container-fluid ">
        {!loading ? (
          <>
            <div className="row  fontSizeBold  justify-content-center align-items-center flex-column">
              <div className="text-center text-dark">Exam Name</div>
              <div className="mSpaceBet"></div>
              <div className="row ">
                <div className="row col-4 justify-content-center  ">
                  <div className="col-12 text-danger">Total Time</div>
                </div>
                <div className="row col-8 d-flex justify-content-between  ">
                  <div className="col-2 text-primary">Total Viewd : {tempData.viewed}</div>
                  <div className="col-3 text-success">Total Solved : {tempData.solved}</div>
                  <div className="col-3 text-warning">Total Non Viewd : {tempData.nonViewed}</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Spin antIcon={antIcon} />
        )}
      </div>
    );
  }
}
export default NavSection;
