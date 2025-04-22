interface ITransaction{
    id:string
    bank_status:string;
    sp_message:string
}
export interface IPayment {
    _id:string;
    tenant:string;
    listing:string;
    requestId:string;
    rentAmount:number;
    status:string
    transaction:ITransaction

}