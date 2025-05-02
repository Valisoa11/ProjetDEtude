import { Chart } from 'chart.js';

export const arrowPlugin = {
  id: 'arrowPlugin',
  afterDraw(chart: Chart) {
    const { ctx, chartArea: { top, bottom, left, right }, scales } = chart;

    ctx.save();
    ctx.fillStyle = 'white'; // Couleur des flèches

    // 🔼 Flèche Y (haut) - Positionnée sur le haut de l'axe Y
    const yPos = top; // Position en haut de l'axe Y
    ctx.beginPath();
    ctx.moveTo(scales['y'].left - 10, yPos + 10);
    ctx.lineTo(scales['y'].left, yPos);
    ctx.lineTo(scales['y'].left + 10, yPos + 10);
    ctx.fill();

    // ▶️ Flèche X (droite) - Positionnée sur la droite de l'axe X
    const xPos = bottom; // Position sur la droite de l'axe X
    ctx.beginPath();
    ctx.moveTo(right - 10, scales['x'].bottom - 10);
    ctx.lineTo(right, scales['x'].bottom);
    ctx.lineTo(right - 10, scales['x'].bottom + 10);
    ctx.fill();

    ctx.restore();
  }
};
