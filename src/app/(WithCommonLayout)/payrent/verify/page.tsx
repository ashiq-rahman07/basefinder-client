import PaymentSuccessPage from '@/components/modules/payment/VerifyPage'
import { Metadata } from 'next';
import{ Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Payment Verify',
};
const PaymentVerifyPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessPage />
    </Suspense>
  )
}

export default PaymentVerifyPage