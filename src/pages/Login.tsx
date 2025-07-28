import { useState } from 'react';
import { useAuth } from '../context/AuthContexts';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const mobileSchema = z.object({
  mobile: z
    .string()
    .regex(/^\d{10}$/, { message: 'Mobile number must be 10 digits' }),
});

const otpSchema = z.object({
  otp: z
    .string()
    .regex(/^\d{6}$/, { message: 'OTP must be 6 digits' }),
});

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const [mobileError, setMobileError] = useState('');
  const [otpError, setOtpError] = useState('');

  const handleMobileChange = (e) => {
    const numeric = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobile(numeric);
  };

  const handleOtpChange = (e) => {
    const numeric = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(numeric);
  };

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    const result = mobileSchema.safeParse({ mobile });
    if (!result.success) {
      setMobileError(result.error.issues[0].message);
      return;
    }
    setMobileError('');
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const result = otpSchema.safeParse({ otp });
    if (!result.success) {
      setOtpError(result.error.issues[0].message);
      return;
    }
    setOtpError('');
    login();
    navigate('/');
  };

  return (
    <div className="max-w-sm mx-auto mt-32 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

      {step === 1 && (
        <form onSubmit={handleMobileSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              autoComplete="off"
              value={mobile}
              onChange={handleMobileChange}
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {mobileError && (
              <p className="text-red-500 text-sm mt-1">{mobileError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send OTP
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              autoComplete="off"
              value={otp}
              onChange={handleOtpChange}
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {otpError && <p className="text-red-500 text-sm mt-1">{otpError}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Verify & Login
          </button>
        </form>
      )}
    </div>
  );
}
