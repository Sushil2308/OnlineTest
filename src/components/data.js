const questionList=[
    {
        ques_id:1,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:2,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:3,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:4,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },{
        ques_id:5,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:6,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },{
        ques_id:7,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },{
        ques_id:8,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:9,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:10,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    }
]

function getAnswereById(id){
    return questionList.find(question=>question.ques_id===id).correctAnswere
}
function getQuestionList(){
    return questionList.map((question,index)=>{
      return {"id":question.ques_id,"question":question.question,"options":question.options}
    })
}
module.exports.getQuestionList=getQuestionList
module.exports.getAnswereById=getAnswereById