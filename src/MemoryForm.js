import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class MemoryForm extends React.Component{
 
// state is being used to control input 
    state={
        title:"",
        about:"",
        address:"",
        city:"",
        state:"",
        zipcode: 10027
    }

    handleChange=(evt)=>{
      this.setState({
          [evt.target.name]: evt.target.value
      })
    }

    // handleSubmit=(evt)=>{
    //     fetch("http://localhost:3000/memory",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"Application/json"
    //         },
    //         body:JSON.stringify{
                
    //         }
    //     })
    //     console.log('Handle submit')
    // }

    render(){
    
        let {title, about, address, city, state, zipcode}= this.state
        return(
            <Form>
             <Form.Group unstackable widths={2}>
                 <Form.Input label='Title' placeholder='Title' name="title" value={title} onChange={this.handleChange}/>
                 <Form.Input label='About' placeholder='About' name="about"value={about} onChange={this.handleChange}/>
             </Form.Group>
             <Form.Group widths={2}>
                 <Form.Input label='Address' placeholder='Address' name="address" value={address} onChange={this.handleChange}/>
                 <Form.Input label='City' placeholder='City' name="city" value={city} onChange={this.handleChange}/>
                 <Form.Input label='State' placeholder='State' name="state" value={state} onChange={this.handleChange}/>
                 <Form.Input label='Zipcode' placeholder='Zipcode' name="zipcode" value={zipcode} onChange={this.handleChange}/>
             </Form.Group>
             <Button type='submit' onSubmit={this.handleSubmit}>Submit</Button>
            </Form>

        )
    }
  
}

export default MemoryForm