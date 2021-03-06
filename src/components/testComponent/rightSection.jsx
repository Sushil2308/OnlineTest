import React ,{Component} from 'react';
import { Spin ,Tooltip} from "antd";
import questionData from '../data'
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = (
  <LoadingOutlined type="loading" style={{ fontSize: 24 }} spin />
);
class RightSection extends Component{
    state = {
        data: [],
        loading: true,
      };
      componentDidMount() {
        this.fetchData();
      }
      componentDidUpdate(preProps, preState) {
        if (this.props !== preProps) {
          this.fetchData();
        }
      }
      fetchData=async()=>{
          await this.setState({data:this.props.questionList,loading:false})
      }
    render(){
        const { data = [],loading=true } = this.state;
       return( 
        <div className="col-12">
        {!loading ? (
          <div className="scrollbar scrollbar-primary">
         <div class="force-overflow">
           <div className="row row-cols-3 m-auto row justify-content-center align-items-center">
            {data.map((temp, index) => (
              <div key={""+temp+index+1} className={temp.status===0?"bg-shadow col-2 rounded-circle bg-warning py-2 quesBack m-3 row justify-content-center align-items-center text-white fontSize":temp.status===1?"bg-shadow col-2 bg-primary py-2 rounded-circle quesBack m-3 row justify-content-center align-items-center text-white fontSize":"bg-shadow col-2 bg-success rounded-circle py-2 quesBack m-3 row justify-content-center align-items-center text-white fontSize"}>
                  <Tooltip title={temp.status===0?"Question Is Not Viewd":temp.status===1?"Question Is Already Viewd But Not Solved":"Question Is Solved"}><h5 className="row  justify-content-center align-items-center">{`Q.${index+1}`}</h5></Tooltip>
              </div>
            ))}
            </div>
           </div>
          </div>
          
        ) : (
          <Spin indicator={antIcon} />
        )}
      </div>
        )
    }
}
export default RightSection;