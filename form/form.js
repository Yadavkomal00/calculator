function createReciept(){
    console.log("hello");

    const receiptModel = {
        reciptNo: document.getElementById("receipt-no").value,
        from: {
            name: document.getElementById("from-name").value,
            email:document.getElementById("from-email").value,
            address:document.getElementById("from-address").value,
            phone:document.getElementById("from-phone").value,
        },
        to:{
            name: document.getElementById("bill-name").value,
            email:document.getElementById("bill-email").value,
            address:document.getElementById("bill-address").value,
            phone:document.getElementById("bill-phone").value,
        },
        date: document.getElementById("from-date").value,
    };

    // Initialize jsPDF
    const { jsPDF } = window.jspdf;

    //creating document
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Receipt", 14, 22);

    // Define table columns and rows
    const columns = ["Field", "Details"];
    const rows = [
        ["Receipt No", receiptModel.reciptNo],
        ["From Name", receiptModel.from.name],
        ["From Email", receiptModel.from.email],
        ["From Address", receiptModel.from.address],
        ["From Phone", receiptModel.from.phone],
        ["To Name", receiptModel.to.name],
        ["To Email", receiptModel.to.email],
        ["To Address", receiptModel.to.address],
        ["To Phone", receiptModel.to.phone],
        ["Date", receiptModel.date],
    ];

    // generate Table
    doc.autoTable({
        head: [columns],
        body: rows,
        startY: 30,
    });

     // Save the PDF
     doc.save("receipt.pdf");

     // Additional actions after download
    alert("The receipt has been generated and downloaded.");

}


