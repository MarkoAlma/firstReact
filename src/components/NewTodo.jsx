import React from 'react'
import { useState } from 'react'

import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'

const NewTodo = ({handleAdd}) => {

    const [desc, setDesc] = useState("")

    console.log(desc);
    
    const handleSubmit = ()=> {
        handleAdd(desc)
        setDesc("")
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
                        <Button onClick={()=>handleSubmit()} disabled={!desc}>Add</Button>
                        
                </FormGroup>
            </Form>
        </div>
    )
}
export default NewTodo