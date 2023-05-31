import React from 'react';
import jsPDF from 'jspdf';
import "jspdf-autotable";

// import { Document, Page, Text, View, StyleSheet , PDFDownloadLink} from '@react-pdf/renderer';

function Pdf() {
  let arr = [
    { name: "venkat", age: 20, phone: 9948 },
    { name: "vinay", age: 20, phone: 994855 },
    { name: "kalyan", age: 20, phone: 9948559416 }
  ];
   const generatePDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);
    const title = "My Awesome Report";
    const headers = [["NAME", "AGE", "PHONE"]];

    const data = arr.map(elt=> [elt.name, elt.age, elt.phone]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")


  }
  return (
    <div>
      
        <button  onClick={()=>{generatePDF()}}>generatePDF</button>
        
      
    </div>
  )
}

export default Pdf
