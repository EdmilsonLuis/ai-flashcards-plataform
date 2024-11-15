import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { SetCard } from "./types"
import { generatePdfFromHtml } from "./actions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function exportToCSV(cards: SetCard[], filename: string) {
  const csvRows = cards
    .map(({ term, definition }) => `"${term}","${definition}"`)
    .join("\n");

  const csvFile = `Term,Definition
  \n${csvRows}`

  const blob = new Blob([csvFile], { type: 'text/csv' }) // ;charset=utf-8

  downloadFileFromBlob(blob, `${filename}.csv`)
}



export async function exportToPdf(cards: SetCard[], filename: string) {
  const cardsHtmlTemplate = `
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; height: 100vh; }
        .grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          
          gap: 4px;
          width: 95%;
          height: 95vh;
        }
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          height: 100px;
          padding: 6px;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="grid-container">
        ${cards.map((card, index) => `<div class="box">${card.term}</div><div class="box">${card.definition}</div>`).join("")}
      </div>
    </body>
  </html>
`;

  const data = await generatePdfFromHtml(cardsHtmlTemplate);
  const pdfBuffer = new Uint8Array(atob(data).split('').map(char => char.charCodeAt(0)));
  const pdfBlob = new Blob([pdfBuffer], { type: 'application/pdf' });
  downloadFileFromBlob(pdfBlob, `${filename}.pdf`)
}

function downloadFileFromBlob(blob: Blob, filename: string) {
  const fileUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(fileUrl);
}