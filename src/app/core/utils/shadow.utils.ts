
import { Chart, ChartDataset } from 'chart.js';

export const shadowPlugin = {
  id: 'shadowLine',
  beforeDatasetsDraw(chart: any) {
    const ctx = chart.ctx;
    const datasets = chart.data.datasets;

    datasets.forEach((dataset: ChartDataset, index: number) => {
      const meta = chart.getDatasetMeta(index);
      if (!meta.hidden) {
        // Sauvegarde du contexte avant de dessiner la courbe
        ctx.save();

        // Récupère la couleur de la bordure (shadowColor sera la même couleur)
        const shadowColor = dataset.borderColor || 'rgba(0, 0, 0, 0.3)';
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;

        // Dessine la courbe
        meta.dataset.draw(ctx);

        // Restaure le contexte après avoir dessiné la courbe
        ctx.restore();
      }
    });

    return false;
  }
};
