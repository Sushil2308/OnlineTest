import React, { Component } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const antIcon = (
  <LoadingOutlined type="loading" style={{ fontSize: 24 }} spin />
);
class MiddleSection extends Component {
  state = {
    data: {},
    index: 0,
    loading: true,
  };
  componentDidMount() {
    this.mapData();
  }
  mapData = async () => {
    const { id = "", question = "", options = "" } = this.props.question;
    const tempData = { id: id, question: question, options: eval(options) };
    this.setState({
      data: tempData,
      index: this.props.questionIndex,
      loading: false,
    });
  };
  render() {
    const { data = {}, index = 0, loading = true } = this.state;
    console.log(this.state);
    return (
      <div className="container-fluid ">
        {!loading ? (
          <>
            <div className="row col-12 flex-column mb-2">
              <div className="row col-12 py-2 mt-2 testBack ">
                <h5 className="row col-12 d-flex justify-content-start align-items-center fontQuesSize mt-1">{`Q.${
                  index + 1
                }) ${data.question}`}</h5>
              </div>
              <div className="mSpace"></div>
              <div className="row col-12 py-2 mt-1 ">
                <h5 className=" justify-content-start align-items-center fontSize">{`Choose correct answere from given options.`}</h5>
              </div>

              {data.options.map((option, index) => (
                <div className="row col-12 py-2 testBack mt-1">
                  <div className="form-check">
                    <label className="form-check-label fontSize">
                      <input
                        type="radio"
                        className="form-check-input"
                        value={option}
                        name="option"
                      />
                     {`${String.fromCharCode(
                        index + 65
                      )}. ${option}`}
                    </label>
                  </div>
                </div>
              ))}
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
