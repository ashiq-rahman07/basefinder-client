




const PaymentStatus = ({ data }:{data:any}) => {
 


    
  return (
  <>
    <div>
      {data.status ===
"Paid" ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg">
          <p>Payment Successful!</p>
          <p>Transaction ID: {data.transaction.id}</p>
        </div>
      ) : (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg">
          <p>Payment Pending or Failed</p>
        </div>
      )}
    </div> 
     </> 
  )
}

export default PaymentStatus 