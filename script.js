// สัญลักษณ์ที่ต้องการให้ตกลงมา
const symbols = ['+', '-', '*', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// สีที่ใช้สำหรับสัญลักษณ์
const colors = ['#ff5733', '#33c1ff', '#ff33a1', '#33ff57', '#f3ff33', '#9b59b6', '#f39c12', '#e74c3c'];

// ฟังก์ชันสำหรับสุ่มสี
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// ฟังก์ชันสำหรับสร้างสัญลักษณ์ที่ตกลงมา
function generateFallingSymbols() {
  const fallingSymbolsContainer = document.querySelector('.falling-symbols');

  // สุ่มเลือกสัญลักษณ์
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

  // สร้าง div สำหรับสัญลักษณ์ที่ตกลงมา
  const symbolElement = document.createElement('div');
  symbolElement.textContent = randomSymbol;

  // กำหนดสีสุ่มให้กับสัญลักษณ์
  symbolElement.style.color = getRandomColor();

  // กำหนดตำแหน่งเริ่มต้นและความเร็วให้กับสัญลักษณ์
  symbolElement.style.left = `${Math.random() * 100}%`;
  symbolElement.style.animationDuration = `${Math.random() * 2 + 3}s`;  // ระยะเวลาการตก

  // เพิ่มสัญลักษณ์เข้าไปใน container
  fallingSymbolsContainer.appendChild(symbolElement);

  // ลบสัญลักษณ์หลังจากที่มันตกถึงด้านล่าง
  setTimeout(() => {
    fallingSymbolsContainer.removeChild(symbolElement);
  }, 5000); // 5 วินาทีหลังจากการตก
}

// เรียกใช้ฟังก์ชันทุก 300ms เพื่อให้มีการตกลงมาเรื่อยๆ
setInterval(generateFallingSymbols, 300);
