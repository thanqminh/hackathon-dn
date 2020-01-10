import React, { useState } from 'react'
import AddButton from 'components/ActionButton/AddButton'

const AddForm = props => {
    const initialFormState = {
        id: null,
        name: '',
        email: '',
        phone: '',
        password: '',
    }
    const [doc, setDoc] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setDoc({ ...doc, [name]: value })
    }

    const addProc = event => {
        event.preventDefault()
        if (!doc.name || !doc.email || !doc.phone || !doc.password) return

        props.addDoc(doc)
        setDoc(initialFormState)
    }
    return (
        <form>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={doc.nickname}
                onChange={handleInputChange}
            />
            <label>Email</label>
            <input
                type="text"
                name="email"
                value={doc.email}
                onChange={handleInputChange}
            />
            <label>Phone</label>
            <input
                type="text"
                name="phone"
                value={doc.phone}
                onChange={handleInputChange}
            />
            <label>Password</label>
            <input
                type="text"
                name="password"
                value={doc.password}
                onChange={handleInputChange}
            />
            <AddButton title={'Add Driver'} proc={addProc} />
        </form>
    )
}

export default AddForm
