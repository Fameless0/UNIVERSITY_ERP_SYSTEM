const FeeDetails = () => {
    const feeData = {
      studentName: "Anshul Chauhan",
      rollNo: "2203025037",
      admissionNo: "22BCA0259",
      semester: "IV",
      session: "2022-2025",
      program: "BCA",
      receiptDate: "01/06/2024",
      totalFee: "₹32,500",
      paidAmount: "₹32,500",
      dueAmount: "₹0",
      paymentStatus: "Paid",
      paymentMode: "Online",
      transactionId: "order_OHYzT96QliuRsk"
    };
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Fee Receipt</h2>
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <p><strong>Student Name:</strong> {feeData.studentName}</p>
            <p><strong>Roll No:</strong> {feeData.rollNo}</p>
            <p><strong>Admission No:</strong> {feeData.admissionNo}</p>
            <p><strong>Semester:</strong> {feeData.semester}</p>
            <p><strong>Session:</strong> {feeData.session}</p>
            <p><strong>Program:</strong> {feeData.program}</p>
            <p><strong>Receipt Date:</strong> {feeData.receiptDate}</p>
          </div>
  
          <div className="mt-4 border-t border-gray-700 pt-4">
            <p><strong>Total Fee:</strong> {feeData.totalFee}</p>
            <p><strong>Paid Amount:</strong> {feeData.paidAmount}</p>
            <p><strong>Due Amount:</strong> {feeData.dueAmount}</p>
            <p><strong>Payment Status:</strong> 
              <span className={`ml-2 font-semibold ${feeData.paymentStatus === "Paid" ? "text-green-400" : "text-red-400"}`}>
                {feeData.paymentStatus}
              </span>
            </p>
            <p><strong>Payment Mode:</strong> {feeData.paymentMode}</p>
            <p><strong>Transaction ID:</strong> {feeData.transactionId}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeeDetails;
  