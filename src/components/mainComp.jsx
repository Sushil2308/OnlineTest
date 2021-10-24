import React, { Component } from "react";
import NavSection from "./testComponent/navSection";
import "../components/app.css";
import LeftSection from "./testComponent/leftSection";
import MiddleSection from "./testComponent/middleSection";
import RightSection from "./testComponent/rightSection";
import BottomSection from "./testComponent/bottom";
import questionData from "./data";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const antIcon = (
  <LoadingOutlined type="loading" style={{ fontSize: 24 }} spin />
);
class Display extends Component {
  state = {
    currentIndex: 1,
    data: [],
    loading: true,
  };
  componentDidMount() {
    this.fetchDataList();
  }
  fetchDataList = async () => {
    this.setState({ data: questionData.getQuestionList(), loading: false });
  };
  fetchQuestionById = (index) => {
    console.log(this.state.data[index]);
    return this.state.data[index];
  };
  handleNext = (id) => {
    console.log(id);
    let Copy = { ...this.state };
    Copy.data[id-1].status = 1;
    Copy.currentIndex = id;
    this.setState(Copy);
  };
  fetchQuestion=()=>{
    return this.state.data.map(temp=>(
      {id:temp.id,status:temp.status}
    ))
  }
  render() {
    const { currentIndex = 1, loading = true } = this.state;
    console.log(this.state);
    return (
      <div className="container-fluid  testBack fix-height">
        {!loading ? (
          <>
            <div className="row col-xl-12 testBack nav-height">
              <NavSection />
            </div>
            <div className="row mt-4">
              <div className="col-xl-3 testBack">
                <LeftSection
                  handleNext={this.handleNext}
                  questionIndex={currentIndex - 1}
                />
              </div>
              <div className="col-xl-6 testMainBack">
                <MiddleSection
                  question={this.fetchQuestionById(currentIndex - 1)}
                  questionIndex={currentIndex - 1}
                />
              </div>
              <div className="col-xl-3 testBack">
                <RightSection 
                questionList={this.fetchQuestion()}
                />
              </div>
            </div>
            <div className="row col-xl-12 testBack nav-height">
              <BottomSection />
            </div>
          </>
        ) : (
          <Spin indicator={antIcon} />
        )}
      </div>
    );
  }
}
export default Display;
