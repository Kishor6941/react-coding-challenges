import React, { useState } from 'react'
import OTPInput from './OTPInput'

const OTPComp = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOTPInput, setShowOTPInput] = useState(false)

    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value)
    }

    const handlePhoneSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    
        // phone number validation can be added here
        if(phoneNumber.trim() === "") {
            alert("Please enter a valid phone number")
            return
        }

        const regex = /[^0-9]/g;
        if(regex.test(phoneNumber) || phoneNumber.length < 10) {
            alert("Phone number should contain only digits")
            return
        }

        setShowOTPInput(true)
    }

    const onOTPSubmit = (otp: string) => {
        // Here you can handle OTP submission logic
        alert(`OTP Submitted: ${otp}`)
    }
    
  return (
   <div>
    {
        !showOTPInput ?  <form className="mx-auto mt-5 col-md-4" onSubmit={handlePhoneSubmit}>
        <h2 className="text-center mb-4">OTP Verification</h2>
        <input className='form-control' type="text" value={phoneNumber} onChange={handlePhoneNumber} placeholder='Enter Phone Number' />
        <button type="submit" className='btn btn-success mt-2'>Send OTP</button>
    </form> :
    <div className="mx-auto mt-5 col-md-4 text-center">
        <h2>Enter OTP sent to {phoneNumber}</h2>
        <OTPInput length={4} onOTPSubmit={onOTPSubmit} />
        </div>
    }
   </div>
  )
}

export default OTPComp
