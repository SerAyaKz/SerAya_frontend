import React, { useRef, useEffect } from 'react';
import './qualityinfo.css';

const QualityInfo = ({ ratings }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStoreRatio =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;

    const ratio = devicePixelRatio / backingStoreRatio;

    const ratingsByQuality = ratings.reduce((acc, rating) => {
      const quality = rating.quality;
      acc[quality] = (acc[quality] || 0) + 1;
      return acc;
    }, {});

    const minQuality = Math.min(...Object.keys(ratingsByQuality));
    const maxQuality = Math.max(...Object.keys(ratingsByQuality));

    const qualityRange = Array.from({ length: maxQuality - minQuality + 1 }, (_, i) => i + minQuality);
    const maxCount = Math.max(...Object.values(ratingsByQuality), 0);

    const chartHeight = 300;
    const barWidth = 40;
    const barSpacing = 20;
    const chartMargin = 20;

    canvas.height = (chartHeight + 2 * chartMargin) * ratio;
    canvas.width = ((barWidth + barSpacing) * qualityRange.length + chartMargin * 2) * ratio;

    ctx.scale(ratio, ratio);


    qualityRange.forEach((quality, index) => {
      const count = ratingsByQuality[quality] || 0;
      const barHeight = (count / maxCount) * chartHeight;

      const x = chartMargin + index * (barWidth + barSpacing);
      const y = chartMargin + chartHeight - barHeight;
      ctx.fillStyle = '#0055FD';
      ctx.fillRect(x, y, barWidth, barHeight);

      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.fillText(count.toString(), x + barWidth / 2, y - 5);

      const qualityString = getQualityString(quality);
      ctx.fillText(qualityString, x + barWidth / 2, chartMargin + chartHeight + 15);
    });
  }, [ratings]);

  const getQualityString = (quality) => {
    switch (quality) {
      case 1:
        return '1 Awful';
      case 2:
        return '2 OK';
      case 3:
        return '3 Good';
      case 4:
        return '4 Great';
      case 5:
        return '5 Awesome';
      default:
        return '';
    }
  };

  return (
    <div className='qualityinfo'>
      <canvas
        ref={canvasRef}
        role="img"
        height="400"
        width="700"
        style={{
          display: 'block',
          boxSizing: 'border-box',
          height: '324.8px',
          width: '501.6px',
        }}
      ></canvas>
    </div>
  );
};

export default QualityInfo;
