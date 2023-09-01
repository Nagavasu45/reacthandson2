import { Component } from "react"
import './hn2.css'
class Clasone extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            department:"",
            rating:"",
            empdata : []


        }
    }
    changedata=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        // console.log(this.state.name)
        // console.log(this.state.department)
        // console.log(this.state.rating)
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        const tempobj={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        this.state.empdata.push(tempobj)
        this.setState({
            empdata:this.state.empdata,
            name:"",
            department:"",
            rating:""

        })
        
    }
    render(){
        return(
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form>
                <label htmlFor="name">Name :
                </label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.changedata} /><br/>
                <br/>
                <label htmlFor="department">Department :
                </label>
                <input  type="text" id="department" name="department" value={this.state.department} onChange={this.changedata} /><br/>
                <br/>
                <label htmlFor="rating">Rating :
                </label>
                <input type="number"  id="rating" name="rating" value={this.state.rating}  onChange={this.changedata}/><br/>
                <br/>
                <button onClick={this.handlesubmit}>submit</button>
               


            </form>
            <div className="one">
            
              {this.state.empdata.map((item)=>{
                // console.log(item)
                return(
                    <div className="two">
                        <span>Name :{item.name} | Department :{item.department} |  rating :{item.rating}</span> 

                       


                    </div>
                )
              })}
                    

                    </div>
            </>
        )
    }

}
export default Clasone