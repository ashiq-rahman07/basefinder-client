import PaymentSuccessPage from '@/components/modules/payment/VerifyPage'
import{ Suspense } from 'react'

const PaymentVerifyPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessPage />
    </Suspense>
  )
}

export default PaymentVerifyPage