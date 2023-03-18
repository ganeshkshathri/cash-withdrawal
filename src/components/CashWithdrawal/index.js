import DenominationItem from "../DenominationItem";
import { Component } from "react";

import './index.css'

class CashWithdrawal extends  Component{
    
    state={balance:2000}
    calculate=(id,value)=>{
        let subvalue = value
        this.setState(prevstat=>({balance:prevstat.balance-subvalue}))
    }
    render(){
        let {balance} = this.state
        let {denominationsList}=this.props 
        return(
            
            <div className="container">
            <div className="inner-container">
               <div className="card">
                 <div className="top-part">
                    <div className="profile-pic">s</div>
                    <p className="profile-name">Sarah Williams</p>
                 </div>
                 <div className="balance-part">
                    <p className="your-balance">Your Balance</p>
                    <div>
                        <p className="money">{balance}</p>
                        <p className="moneytext">In Rupees</p>
                    </div>
                 </div>
                 <div className="bottom-part">
                    <p className="whitecolor">Withdraw</p>
                    <p className="your-balance">CHOOSE SUM (IN RUPEES)</p>
                    
                 </div>
                 <div class="last-part">
                    <ul>
            
                    {denominationsList.map((eachItem)=><DenominationItem eachItem={eachItem}  calculate={this.calculate}/>)}
                    </ul>
                    
                 </div>
               </div>
            </div>
        </div>
            
        )
        
    }
}
export default CashWithdrawal