import './editAccount.css';
import { useEffect, useState, onChange } from 'react';

function EditAccount() {
    const [firstname, setFirstName] = useState([])
    const [lastname, setLastName] = useState([])
    const [email, setEmail] = useState([])
    const [cellphone, setCellphone] = useState([])
    const [address, setAddress] = useState([])


    function submit() {
        fetch("/updateUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({

                fname: firstname,
                lname: lastname,
                email: email,
                phoneNumber: cellphone,
                address: address

            })
        }).then((res) => res.json())
            .then(data => {
                window.location.href = '/dashboard';
            }).catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
        fetch("/getUserData", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },

        }).then((res) => res.json())
            .then(data => {
                setFirstName(data.UD.firstname)
                setLastName(data.UD.lastname)
                setEmail(data.UD.email)
                setCellphone(data.UD.cellphone)
                setAddress(data.UD.address)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <>
            <div className='userTittle'>
                <p className='changingtittle'>Edit Account</p>
                <hr className='line'></hr>
            </div>

            <div className='boxEdit'>
                <form className='editAccount'>
                    <label for="fname">First name:</label>
                    <input type="text" id="firstname" name="firstname" placeholder='First Name' defaultValue={firstname} className='input2' onChange={(e) => setFirstName(e.target.value)}></input>
                    <label for="fname">Last name:</label>
                    <input type="text" id="lastname" name="lastname" placeholder='Last Name' defaultValue={lastname} className='input2' onChange={(e) => setLastName(e.target.value)}></input>
                    <label for="fname">Email:</label>
                    <input type="email" id="email" name="email" placeholder='Email' defaultValue={email} className='input2' onChange={(e) => setEmail(e.target.value)}></input>
                    <label for="fname">Cellphone:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}[0-9-[0-9]{3}[0-9]{2}" placeholder='Cellphone' defaultValue={cellphone} className='input2' onChange={(e) => setCellphone(e.target.value)}></input>
                    <label for="fname">Address:</label>
                    <input type="text" id="Address" name="Address" placeholder='Address' defaultValue={address} className='input2' onChange={(e) => setAddress(e.target.value)}></input>
                    <div className='button15' onClick={submit}>Make Changes</div>
                </form>

            </div>
        </>
    )
}


export default EditAccount;