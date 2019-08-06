import React, { PureComponent } from 'react';
import Buttons from './buttons';
import Display from './display.jsx';

  
Array.prototype.reIndexOf = function (rx) {
  for (var i=1;i<this.length ;i++) {
      if (this[i].toString().match(rx)) {
          if(i===0){
              continue
          }
          if(i==="reIndexOf"){
              return -1
          }
          return Number(i);
      }
  }
  return -1;
};


class Calculator extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      buttons:["AC","+/-","%","÷","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="],
      pressHistory:"",
      calculationHistory:[],
      currentDisplay:''}
    this.handlePress = this.handlePress.bind(this)
  }



  handlePress = (e) => {
    this.setState({currentDisplay:""})

    if(this.state.pressHistory.length>30)return

    e.preventDefault()
    var operators = ["÷","x","-","+",""]
    var nonZeroNums = ["1","2","3","4","5","6","7","8","9"]

    //logic for AC
    if(e.target.innerText==="AC"){
      this.setState({pressHistory:"",
                    currentDisplay:""},()=>{
                    })
      return
    }
    
    //can't press = after an operator
    if(!/[0-9]$/.test(this.state.pressHistory)){
      if(e.target.innerText==="="){
        return
      }
    }

    if(/e-[0-9]*$/.test(this.state.pressHistory)){
      if(nonZeroNums.indexOf(e.target.innerText)!==-1 ||
        e.target.innerText==="0"||
        e.target.innerText===".")return
    }

    if(e.target.innerText==="."){
      if(/[0-9]*\.{1}[0-9]*$/.test(this.state.pressHistory))return
      if(this.state.pressHistory===""){
        this.setState({pressHistory:"0."})
        return
      }

    }



    if(e.target.innerText==="%"){
      if(/e-[0-9]*$/.test(this.state.pressHistory))return
      if(/[0-9]*\.?[0-9]*$/.test(this.state.pressHistory)){
        let returnNum = Number(this.state.pressHistory.match(/[0-9]*\.?[0-9]*$/))/100
        let newPressHistory = this.state.pressHistory.replace(/[0-9]*\.?[0-9]*$/,returnNum)
        this.setState({pressHistory:newPressHistory})
        return
      }
    }


    if(e.target.innerText==="+/-"){
      if(/^‐/.test(this.state.pressHistory)){
        let newPressHistory = this.state.pressHistory.substring(1);
        this.setState({pressHistory:newPressHistory})
        return
      }
      var firstNum = (this.state.pressHistory).match(/[0-9]\.?/)
      // console.log(firstNum)
      let newPressHistory = this.state.pressHistory.replace(/[0-9]\.?/,"‐"+firstNum)
      this.setState({pressHistory:newPressHistory})
      return
    }

    //can't press operators first
    if(operators.indexOf(e.target.innerText)!==-1){
      if(this.state.pressHistory === ""){
        return
      }
    }

    //logic to keep operators from pressing one after the other
    if(operators.indexOf(this.state.pressHistory[this.state.pressHistory.length-1])!==-1||
    this.state.pressHistory ===""){
      if(operators.indexOf(e.target.innerText)!==-1){
        // console.log("I'm an operator")
        let newPressHistory = this.state.pressHistory.slice(0, -1).concat(e.target.innerText)
        this.setState({pressHistory:newPressHistory},()=>{
          // console.log(this.state.pressHistory)
        })
        return
      }
    }

  //logic for zero, don't want more than one zero.
  if (/^0$/.test(this.state.pressHistory)){
    if(e.target.innerText === "0"){
      return
    }else if(nonZeroNums.indexOf(e.target.innerText)!==-1){
    let newPressHistory = this.state.pressHistory.slice(0, -1).concat(e.target.innerText)
    this.setState({pressHistory:newPressHistory},()=>{
      // console.log(this.state.pressHistory)
    })
    return
  }
}


    
    let newPressHistory =this.state.pressHistory.concat(e.target.innerText)
    this.setState({pressHistory:newPressHistory},()=>{
      // console.log(this.state.pressHistory)
    })

    var collinMath = {
      '+': function (x, y) { return x + y },
      '-': function (x, y) { return x - y },
      '÷': function (x, y) { return x / y },
      'x': function (x, y) { return x * y }
    }






    if(e.target.innerText==="="){
      let numbers = this.state.pressHistory.split(/÷|x|-|\+/)
      let splitbyOperators = this.state.pressHistory.split(/‐?[0-9]*\.?[0-9]*/)
      let evaluateArr = []
      let iterableNum = numbers.length + splitbyOperators.length
      

      // console.log(numbers)
      // console.log(splitbyOperators)
      for(let i = 0 ; i<iterableNum ; i++){
        if (i%2 === 0){
          evaluateArr.push(splitbyOperators.shift())
        }else{
          evaluateArr.push(numbers.shift().replace(/^‐/,"-"))
        }
      }
      evaluateArr.pop()
      evaluateArr.shift()
      // console.log(evaluateArr)

      // let firstOpIndex = evaluateArr.reIndexOf(/÷|x/)
      // console.log(firstOpIndex)


      const recurseMultDiv = () => {
      let firstOpIndex = evaluateArr.reIndexOf(/÷|x/)
      // console.log(firstOpIndex)
      if(firstOpIndex===-1)return
      if(firstOpIndex){
        var evaluatedNum = collinMath[evaluateArr[firstOpIndex]](Number(evaluateArr[firstOpIndex-1]),Number(evaluateArr[firstOpIndex+1]))
        evaluateArr.splice(firstOpIndex-1,3,evaluatedNum)
      }

      // console.log(evaluateArr)
      recurseMultDiv()
      // currentDisplay
    }
    
    recurseMultDiv()

    const recurseSubAdd = () => {
      let firstOpIndex = evaluateArr.reIndexOf(/-|\+/)
      // console.log(firstOpIndex)
      if(firstOpIndex===-1)return
      if(firstOpIndex){
        var evaluatedNum = collinMath[evaluateArr[firstOpIndex]](Number(evaluateArr[firstOpIndex-1]),Number(evaluateArr[firstOpIndex+1]))
        evaluateArr.splice(firstOpIndex-1,3,evaluatedNum)
      }

      // console.log(evaluateArr)
      recurseSubAdd()
      // currentDisplay
    }
    

    recurseSubAdd()

    let newCalculationHistory = Object.create(this.state.calculationHistory)
    newCalculationHistory.push(this.state.pressHistory)
    this.setState({pressHistory:""})
    this.setState({calculationHistory:newCalculationHistory})
    this.setState({currentDisplay:evaluateArr[0]})
    // console.log(this.state.calculationHistory)
    }


  }


  render() {
    return (
      <>
        <Display pressHistory = {this.state.pressHistory} currentDisplay = {this.state.currentDisplay}/>
        <Buttons buttons = {this.state.buttons} handlePress = {this.handlePress}/>
      </>
    );
}
}


export default Calculator;
