import React from 'react'

interface OTPInputProps {
    length: number;
    onOTPSubmit: (otp: string) => void;
}

const OTPInput = ({length,onOTPSubmit}: OTPInputProps) => {
    const [otp, setOtp] = React.useState(new Array(length).fill(""));

    const handleChange = (element: HTMLInputElement, index: number) => {

    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    }
    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {

    }
    
  return (
    <div>
      {
        otp.map((data, index) => {
            return (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onClick={handleClick}
                    onKeyDown={handleKeyDown}
                />
            );
        })
      }
    </div>
  )
}

export default OTPInput
