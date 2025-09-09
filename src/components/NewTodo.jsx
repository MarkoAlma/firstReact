import React from 'react'
import { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'

const NewTodo = () => {

    const [desc, setDesc] = useState("")

    console.log(desc);
    
    const handleSubmit = ()=> {

    }

    return (
        <div >

            <Form style={{display:'flex', gap:'5px', alignItems:'center', flexDirection:'column'}}>
                <FormGroup row>
                        <Input
                            placeholder="new item"
                            type="text"
                            value={desc}
                            onChange={(e)=>setDesc(e.target.value)}
                        />
                        <Button onClick={()=>handleSubmit()}>Add</Button>
                </FormGroup>
            </Form>
        </div>
    )
}
export default NewTodo