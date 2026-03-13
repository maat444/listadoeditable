(function() {
// ------------------------------------------------------------
// DATOS EXTRAÍDOS FIELMENTE DEL PDF (FRUREINA_LIST.pdf)
// ------------------------------------------------------------
        
const products = [
    // VERDURAS (1 - 41)
    { number: 1, name: "Ahuyama.", category: "VERDURAS" },
    { number: 2, name: "Tomate Milano.", category: "VERDURAS" },
    { number: 3, name: "Pimentón.", category: "VERDURAS" },
    { number: 4, name: "Mazorca Arriero.", category: "VERDURAS" },
    { number: 5, name: "Mazorca Desgranada.", category: "VERDURAS" },
    { number: 6, name: "Fríjol Desgranado.", category: "VERDURAS" },
    { number: 7, name: "Arveja Desgranada.", category: "VERDURAS" },
    { number: 8, name: "Tomate Chonto.", category: "VERDURAS" },
    { number: 9, name: "Tomate Larga Vida.", category: "VERDURAS" },
    { number: 10, name: "Arveja Cáscara.", category: "VERDURAS" },
    { number: 11, name: "Habichuela.", category: "VERDURAS" },
    { number: 12, name: "Pepino Guiso.", category: "VERDURAS" },
    { number: 13, name: "Cohombro.", category: "VERDURAS" },
    { number: 14, name: "Zanahoria.", category: "VERDURAS" },
    { number: 15, name: "Remolacha.", category: "VERDURAS" },
    { number: 16, name: "Fríjol Cáscara.", category: "VERDURAS" },
    { number: 17, name: "Haba.", category: "VERDURAS" },
    { number: 18, name: "Papa Criolla.", category: "VERDURAS" },
    { number: 19, name: "Arracacha.", category: "VERDURAS" },
    { number: 20, name: "Yuca.", category: "VERDURAS" },
    { number: 21, name: "Papa Sabanera.", category: "VERDURAS" },
    { number: 22, name: "Papa Pastusa.", category: "VERDURAS" },
    { number: 23, name: "Cubios.", category: "VERDURAS" },
    { number: 24, name: "Chuguas.", category: "VERDURAS" },
    { number: 25, name: "Cebolla Roja.", category: "VERDURAS" },
    { number: 26, name: "Cebolla Blanca.", category: "VERDURAS" },
    { number: 27, name: "Cebolla Blanca.", category: "VERDURAS" },
    { number: 28, name: "Cebolla Larga.", category: "VERDURAS" },
    { number: 29, name: "Repollo Rojo.", category: "VERDURAS" },
    { number: 30, name: "Repollo Blanco.", category: "VERDURAS" },
    { number: 31, name: "Ajo Nacional.", category: "VERDURAS" },
    { number: 32, name: "Guatila.", category: "VERDURAS" },
    { number: 33, name: "Calabaza.", category: "VERDURAS" },
    { number: 34, name: "Calabacín.", category: "VERDURAS" },
    { number: 35, name: "Zapallo.", category: "VERDURAS" },
    { number: 36, name: "Plátano Colicero.", category: "VERDURAS" },
    { number: 37, name: "Plátano Maduro.", category: "VERDURAS" },
    { number: 38, name: "Plátano Verde.", category: "VERDURAS" },
    { number: 39, name: "Berenjena.", category: "VERDURAS" },
    { number: 40, name: "Zukini Amarillo.", category: "VERDURAS" },
    { number: 41, name: "Zukini Verde.", category: "VERDURAS" },
    // FRUTAS (42 - 108)
    { number: 42, name: "Bandeja Manzana Verde.", category: "FRUTAS" },
    { number: 43, name: "Arándanos.", category: "FRUTAS" },
    { number: 44, name: "Papayuela.", category: "FRUTAS" },
    { number: 45, name: "Cocos.", category: "FRUTAS" },
    { number: 46, name: "Mango Tomi.", category: "FRUTAS" },
    { number: 47, name: "Manzanas en Agua.", category: "FRUTAS" },
    { number: 48, name: "Pera Nacional.", category: "FRUTAS" },
    { number: 49, name: "Banano Urabá.", category: "FRUTAS" },
    { number: 50, name: "Banano Criolla.", category: "FRUTAS" },
    { number: 51, name: "Naranja Valencia.", category: "FRUTAS" },
    { number: 52, name: "Naranja Tanelo.", category: "FRUTAS" },
    { number: 53, name: "Limón Tahili.", category: "FRUTAS" },
    { number: 54, name: "Papaya Mara.", category: "FRUTAS" },
    { number: 55, name: "Maracuyá.", category: "FRUTAS" },
    { number: 56, name: "Melón.", category: "FRUTAS" },
    { number: 57, name: "Granadilla.", category: "FRUTAS" },
    { number: 58, name: "Manzana Roja.", category: "FRUTAS" },
    { number: 59, name: "Manzana Verde.", category: "FRUTAS" },
    { number: 60, name: "Manzana Royal.", category: "FRUTAS" },
    { number: 61, name: "Manzana Golden.", category: "FRUTAS" },
    { number: 62, name: "Bandeja Manzana Gale.", category: "FRUTAS" },
    { number: 63, name: "Bandeja Manzana Verde.", category: "FRUTAS" },
    { number: 64, name: "Bandeja Manzana Mixta.", category: "FRUTAS" },
    { number: 65, name: "Uva Roja.", category: "FRUTAS" },
    { number: 66, name: "Uva Verde.", category: "FRUTAS" },
    { number: 67, name: "Uva Chilena.", category: "FRUTAS" },
    { number: 68, name: "Uva Isabella.", category: "FRUTAS" },
    { number: 69, name: "Ciruela Chilena.", category: "FRUTAS" },
    { number: 70, name: "Kiwi.", category: "FRUTAS" },
    { number: 71, name: "Pera Chilena.", category: "FRUTAS" },
    { number: 72, name: "Durazno Chileno.", category: "FRUTAS" },
    { number: 73, name: "Cereza.", category: "FRUTAS" }, 
    { number: 74, name: "Pitaya.", category: "FRUTAS" },
    { number: 75, name: "Borojo.", category: "FRUTAS" },
    { number: 76, name: "Higo.", category: "FRUTAS" },
    { number: 77, name: "Tomate Árbol Común.", category: "FRUTAS" },
    { number: 78, name: "Curuba.", category: "FRUTAS" },
    { number: 79, name: "Mango Azúcar.", category: "FRUTAS" },
    { number: 80, name: "Mango Común.", category: "FRUTAS" },
    { number: 81, name: "Mango Yolima.", category: "FRUTAS" },
    { number: 82, name: "Feijão.", category: "FRUTAS" },
    { number: 83, name: "Ciruela Nacional.", category: "FRUTAS" },
    { number: 84, name: "Carambolo.", category: "FRUTAS" },
    { number: 85, name: "Tomate Pollo.", category: "FRUTAS" },
    { number: 86, name: "Durazno Nacional.", category: "FRUTAS" },
    { number: 87, name: "Guayaba Peru.", category: "FRUTAS" },
    { number: 88, name: "Guayaba Común.", category: "FRUTAS" },
    { number: 89, name: "Uva Combinada.", category: "FRUTAS" },
    { number: 90, name: "Tamarindo.", category: "FRUTAS" },
    { number: 91, name: "Piña Golpe.", category: "FRUTAS" },
    { number: 92, name: "Lulo Nacional.", category: "FRUTAS" },
    { number: 93, name: "Fresa Extra.", category: "FRUTAS" },
    { number: 94, name: "Mora.", category: "FRUTAS" },
    { number: 95, name: "Pitalla Beiby.", category: "FRUTAS" },
    { number: 96, name: "Piña Pareja.", category: "FRUTAS" },
    { number: 97, name: "Aguacate.", category: "FRUTAS" },
    { number: 98, name: "Aguacate Hasa.", category: "FRUTAS" },
    { number: 99, name: "Guanábana.", category: "FRUTAS" },
    { number: 100, name: "Naranja Grey.", category: "FRUTAS" },
    { number: 101, name: "Zapote.", category: "FRUTAS" },
    { number: 102, name: "Yacón.", category: "FRUTAS" },
    { number: 103, name: "Mangostino.", category: "FRUTAS" },
    { number: 104, name: "Pitalla Común.", category: "FRUTAS" },
    { number: 105, name: "Uchuba.", category: "FRUTAS" },
    { number: 106, name: "Mandarina.", category: "FRUTAS" },
    { number: 107, name: "Ciruela Bandeja.", category: "FRUTAS" },
    { number: 108, name: "Mamoncillo.", category: "FRUTAS" },
    // HORTALIZAS (109 - 137)
    { number: 109, name: "Acelgas.", category: "HORTALIZAS" },
    { number: 110, name: "Apio.", category: "HORTALIZAS" },
    { number: 111, name: "Brócoli.", category: "HORTALIZAS" },
    { number: 112, name: "Cilantro.", category: "HORTALIZAS" },
    { number: 113, name: "Coliflor.", category: "HORTALIZAS" },
    { number: 114, name: "Espinaca.", category: "HORTALIZAS" },
    { number: 115, name: "Espárragos.", category: "HORTALIZAS" },
    { number: 116, name: "Cebollín.", category: "HORTALIZAS" },
    { number: 117, name: "Guizantes.", category: "HORTALIZAS" },
    { number: 118, name: "Habichuela.", category: "HORTALIZAS" },
    { number: 119, name: "Lechuga Crespa.", category: "HORTALIZAS" },
    { number: 120, name: "Name.", category: "HORTALIZAS" },
    { number: 121, name: "Batata.", category: "HORTALIZAS" },
    { number: 122, name: "Guasca.", category: "HORTALIZAS" },
    { number: 123, name: "Perejil Liso.", category: "HORTALIZAS" },
    { number: 124, name: "Perejil Crespo.", category: "HORTALIZAS" },
    { number: 125, name: "Rábano.", category: "HORTALIZAS" },
    { number: 126, name: "Tallos.", category: "HORTALIZAS" },
    { number: 127, name: "Tomillo-Laurel.", category: "HORTALIZAS" },
    { number: 128, name: "Aromática.", category: "HORTALIZAS" },
    { number: 129, name: "Caléndula.", category: "HORTALIZAS" },
    { number: 130, name: "Alcachofa.", category: "HORTALIZAS" },
    { number: 131, name: "Cebolla Puerro.", category: "HORTALIZAS" },
    { number: 132, name: "Nabo.", category: "HORTALIZAS" },
    { number: 133, name: "Jengibre.", category: "HORTALIZAS" },
    { number: 134, name: "Agraz.", category: "HORTALIZAS" },
    { number: 135, name: "Semilla Chía.", category: "HORTALIZAS" },
    { number: 136, name: "Quinúa.", category: "HORTALIZAS" },
    { number: 137, name: "Sábila.", category: "HORTALIZAS" },
    
    // PAQUETES (138 - 186)
    { number: 138, name: "Aguacate Hass.", category: "PAQUETES" },
    { number: 139, name: "Cebolla Cabezona.", category: "PAQUETES" },
    { number: 140, name: "Ciruela Nacional.", category: "PAQUETES" },
    { number: 141, name: "Curuba.", category: "PAQUETES" },
    { number: 142, name: "Durazno Nacional.", category: "PAQUETES" },
    { number: 143, name: "Feijão.", category: "PAQUETES" },
    { number: 144, name: "Fresa.", category: "PAQUETES" },
    { number: 145, name: "Guayaba.", category: "PAQUETES" },
    { number: 146, name: "Granadilla.", category: "PAQUETES" },
    { number: 147, name: "Gulupa.", category: "PAQUETES" },
    { number: 148, name: "Lulo.", category: "PAQUETES" },
    { number: 149, name: "Mandarina.", category: "PAQUETES" },
    { number: 150, name: "Mango.", category: "PAQUETES" },
    { number: 151, name: "Manzana Agua.", category: "PAQUETES" },
    { number: 152, name: "Manzana Roja.", category: "PAQUETES" },
    { number: 153, name: "Manzana Royal.", category: "PAQUETES" },
    { number: 154, name: "Manzana Verde.", category: "PAQUETES" },
    { number: 155, name: "Maracuyá.", category: "PAQUETES" },
    { number: 156, name: "Papa Criolla.", category: "PAQUETES" },
    { number: 157, name: "Papa Pastusa.", category: "PAQUETES" },
    { number: 158, name: "Papa Sabanera.", category: "PAQUETES" },
    { number: 159, name: "Papa Hawaiana.", category: "PAQUETES" },
    { number: 160, name: "Pepino Cohombro.", category: "PAQUETES" },
    { number: 161, name: "Pera Chilena.", category: "PAQUETES" },
    { number: 162, name: "Pera Nacional.", category: "PAQUETES" },
    { number: 163, name: "Plátano Maduro.", category: "PAQUETES" },
    { number: 164, name: "Plátano Verde.", category: "PAQUETES" },
    { number: 165, name: "Remolacha.", category: "PAQUETES" },
    { number: 166, name: "Tomate Árbol Rojo.", category: "PAQUETES" },
    { number: 167, name: "Tomate Común.", category: "PAQUETES" },
    { number: 168, name: "Tomate Pollo.", category: "PAQUETES" },
    { number: 169, name: "Tomate Guiso.", category: "PAQUETES" },
    { number: 170, name: "Yuca.", category: "PAQUETES" },
    { number: 171, name: "Zanahoria.", category: "PAQUETES" },
    { number: 172, name: "Pimentón.", category: "PAQUETES" },
    { number: 173, name: "Zapallo.", category: "PAQUETES" },
    { number: 174, name: "Limón.", category: "PAQUETES" },
    { number: 175, name: "Pitaya.", category: "PAQUETES" },
    { number: 176, name: "Arracacha.", category: "PAQUETES" },
    { number: 177, name: "Raíz China.", category: "PAQUETES" },
    { number: 178, name: "Picados.", category: "PAQUETES" },
    { number: 179, name: "Raíces.", category: "PAQUETES" },
    { number: 180, name: "Bandeja # 17", category: "PAQUETES" },   // sin punto final (tal cual)
    { number: 181, name: "Bandeja # 13", category: "PAQUETES" },
    { number: 182, name: "Bandeja # 1", category: "PAQUETES" },
    { number: 183, name: "Sopas.", category: "PAQUETES" },
    { number: 184, name: "Ensaladas.", category: "PAQUETES" },
    { number: 185, name: "Salida.", category: "PAQUETES" },
    { number: 186, name: "Laso.", category: "PAQUETES" }
];

// contenedor donde se renderiza la lista
const container = document.getElementById('productList');

// obtener fecha formateada DD/MM/YYYY
function getFormattedDate() {
    const d = new Date();
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

// ---------- CONTADOR DIARIO ----------
function updateDailyCounter() {
    // Fecha base: 12 de marzo de 2026 (día de inicio en GitHub Pages como #001)
    const startDate = new Date('2026-03-12T00:00:00');
    const today = new Date();
    startDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const listNumber = diffDays + 1;
    
    // Formatear con ceros a la izquierda (ej: #001)
    const paddedNumber = listNumber.toString().padStart(3, '0');
    
    const counterElem = document.getElementById('lista-numero');
    if (counterElem) counterElem.textContent = paddedNumber;
}

// función para renderizar todas las filas + títulos de categoría
function renderList() {
    let html = '';
    let currentCategory = '';

    products.forEach(prod => {
        // si cambia la categoría, añadimos título
        if (prod.category !== currentCategory) {
            currentCategory = prod.category;
            html += `<div class="category-title">📌 ${currentCategory}</div>`;
        }

        // fila de producto con bootstrap
        html += `
            <div class="row product-row" data-number="${prod.number}">
                <div class="col-2 col-sm-1 product-number">${prod.number}.</div>
                <div class="col-6 col-sm-7 product-name">${prod.name}</div>
                <div class="col-4 col-sm-4 text-end">
                    <input type="text" class="value-input" id="input-${prod.number}" placeholder="0" value="${getStoredValue(prod.number)}">
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// obtener valor guardado en localStorage (si existe)
function getStoredValue(num) {
    const saved = localStorage.getItem(`prod_${num}`);
    return saved !== null ? saved : '';
}

// guardar un valor en localStorage
function storeValue(num, val) {
    if (val === '' || val === null) {
        localStorage.removeItem(`prod_${num}`);
    } else {
        localStorage.setItem(`prod_${num}`, val);
    }
}

// inicializar eventos de los inputs para guardar al cambiar
function attachInputListeners() {
    document.querySelectorAll('.value-input').forEach(input => {
        input.addEventListener('input', function(e) {
            const number = this.id.replace('input-', '');
            storeValue(number, this.value);
        });
    });
}

// resetear todos los campos
function resetAllInputs() {
    products.forEach(p => {
        localStorage.removeItem(`prod_${p.number}`);
    });
    renderList();
    attachInputListeners(); // volver a enlazar eventos
}

// generar líneas de texto para descargar estructurados como array de objetos
function generateTextLinesArray() {
    let lines = [];
    let currentCategory = '';

    products.forEach(prod => {
        if (prod.category !== currentCategory) {
            currentCategory = prod.category;
            lines.push({ text: currentCategory, isCategory: true });
        }

        const input = document.getElementById(`input-${prod.number}`);
        let value = input ? input.value.trim() : '';

        // construir línea: "número. nombre" + (si hay valor) " valor"
        let text = `${prod.number}. ${prod.name}`;
        if (value !== '') {
            text += `  ->  ${value}`;
        }
        lines.push({ text: text, isCategory: false });
    });

    return lines;
}

// DESCARGAR PARA CELULARES (TXT en una sola columna vertical)
function downloadMobileFormat() {
    const lines = generateTextLinesArray();
    const dateStr = getFormattedDate();
    const textOutput = ["listado Frureina Anapoima", `Fecha: ${dateStr}`, "", ...lines.map(item => item.text)];
    
    const content = textOutput.join('\r\n');
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]); // UTF-8 BOM
    const blob = new Blob([bom, content], { type: 'text/plain;charset=utf-8' });
    triggerDownload(blob, `lista_frureina_${dateStr.replace(/\//g, '-')}.txt`);
}

// Generar una descarga robusta para móviles
function triggerDownload(blob, filename) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }, 100);
}

// La función downloadMobileFormat ya es la principal para TXT.
// No se requiere downloadTxt duplicado.

// DESCARGAR COMO PDF (usando jsPDF en una sola hoja, 3 columnas completas)
function downloadPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const lines = generateTextLinesArray();
    const numRows = Math.ceil(lines.length / 3);
    const pageWidth = doc.internal.pageSize.getWidth();
    const marginLeft = 10;
    const colWidth = (pageWidth - 2 * marginLeft) / 3;
    
    // Título y Fecha
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text("listado Frureina Anapoima", marginLeft, 10);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    const dateStr = getFormattedDate();
    doc.text(`Fecha: ${dateStr}`, marginLeft, 14);

    // Iniciar y = 20.
    const startY = 20;
    const lineHeight = 4.2; 
    
    doc.setFontSize(7);
    
    // El PDF mantiene 3 columnas para ahorrar espacio en papel A4
    for (let col = 0; col < 3; col++) {
        let y = startY;
        for (let row = 0; row < numRows; row++) {
            const idx = col * numRows + row;
            if (idx < lines.length) {
                const item = lines[idx];
                
                if (item.isCategory) {
                    doc.setFont('helvetica', 'bold');
                } else {
                    doc.setFont('helvetica', 'normal');
                }
                
                doc.text(item.text, marginLeft + col * colWidth, y);
                y += lineHeight;
            }
        }
    }

    const pdfBlob = doc.output('blob');
    triggerDownload(pdfBlob, `lista_frureina_${dateStr.replace(/\//g, '-')}.pdf`);
}

// -----------------------------------------------------------------
// INICIALIZACIÓN
// -----------------------------------------------------------------
updateDailyCounter();
renderList();
attachInputListeners();

// botones
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
if (downloadPdfBtn) downloadPdfBtn.addEventListener('click', downloadPdf);

const downloadMobileBtn = document.getElementById('downloadMobileBtn');
if (downloadMobileBtn) downloadMobileBtn.addEventListener('click', downloadMobileFormat);

const resetBtn = document.getElementById('resetBtn');
if (resetBtn) resetBtn.addEventListener('click', resetAllInputs);

})();