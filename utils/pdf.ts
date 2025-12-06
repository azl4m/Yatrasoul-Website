import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Package } from '../types';

export const generateQuotePDF = (pkg: Package, customerName: string) => {
  const doc = new jsPDF();
  const primaryColor = [162, 28, 175]; // travel-700
  
  // Header
  doc.setFillColor(253, 244, 255); // travel-50
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(162, 28, 175);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('Yatrasoul', 20, 20);
  
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Travel with heart', 20, 26);

  doc.text('Contact: hello@yatrasoul.com', 150, 18);
  doc.text('+1 (555) 123-4567', 150, 23);
  doc.text('www.yatrasoul.com', 150, 28);

  // Quote Info
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`Quotation for ${pkg.name}`, 20, 55);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Prepared for: ${customerName}`, 20, 62);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 68);
  doc.text(`Duration: ${pkg.duration}`, 20, 74);
  
  // Pricing Badge logic equivalent
  doc.setFillColor(162, 28, 175);
  doc.roundedRect(150, 50, 40, 20, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(`$${pkg.priceFrom}`, 170, 60, { align: 'center' });
  doc.setFontSize(8);
  doc.text('per person starts from', 170, 66, { align: 'center' });

  // Itinerary Table
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Itinerary Breakdown', 20, 90);

  const itineraryData = pkg.itinerary.map(day => [day]);

  autoTable(doc, {
    startY: 95,
    head: [['Day-by-Day Plan']],
    body: itineraryData,
    theme: 'grid',
    headStyles: { fillColor: primaryColor as any },
    styles: { fontSize: 10, cellPadding: 5 },
  });

  // Inclusions & Exclusions
  const finalY = (doc as any).lastAutoTable.finalY + 15;
  
  doc.setFontSize(14);
  doc.text('What is included', 20, finalY);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  pkg.inclusions.forEach((item, index) => {
    doc.text(`• ${item}`, 25, finalY + 10 + (index * 6));
  });

  doc.setFont('helvetica', 'bold');
  doc.text('Exclusions:', 110, finalY);
  doc.setFont('helvetica', 'normal');
  pkg.exclusions.forEach((item, index) => {
    doc.text(`• ${item}`, 115, finalY + 10 + (index * 6));
  });

  // Footer
  const pageHeight = doc.internal.pageSize.height;
  doc.setDrawColor(200, 200, 200);
  doc.line(20, pageHeight - 30, 190, pageHeight - 30);
  
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Terms & Conditions Apply. Prices valid for 7 days from quotation date.', 105, pageHeight - 20, { align: 'center' });
  doc.text('Yatrasoul Inc. | 123 Adventure Blvd, Wanderlust City', 105, pageHeight - 15, { align: 'center' });

  doc.save(`Yatrasoul_Quote_${pkg.slug}.pdf`);
};