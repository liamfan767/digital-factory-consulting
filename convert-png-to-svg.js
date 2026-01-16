const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;

// 读取PNG文件
fs.createReadStream(path.join(__dirname, 'public', 'images', 'logo.png'))
  .pipe(new PNG())
  .on('parsed', function() {
    // 创建SVG内容
    let svgContent = `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">\n`;
    svgContent += `<rect width="100%" height="100%" fill="white"/>\n`;
    
    // 简单的像素处理（这里只提取主要颜色的区域）
    // 注意：这是一个非常简单的转换，对于复杂图片可能效果不好
    const pixels = [];
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        const a = this.data[idx + 3];
        
        // 只处理不透明的像素
        if (a > 128) {
          const hexColor = rgbToHex(r, g, b);
          pixels.push({ x, y, color: hexColor });
        }
      }
    }
    
    // 这里可以添加更复杂的像素聚类算法
    // 为了简单起见，我们只创建一个矩形（假设logo是一个简单的形状）
    // 找到logo的边界
    if (pixels.length > 0) {
      const minX = Math.min(...pixels.map(p => p.x));
      const maxX = Math.max(...pixels.map(p => p.x));
      const minY = Math.min(...pixels.map(p => p.y));
      const maxY = Math.max(...pixels.map(p => p.y));
      
      // 使用主要颜色
      const mainColor = pixels[0].color;
      
      // 创建一个矩形代表logo
      svgContent += `<rect x="${minX}" y="${minY}" width="${maxX - minX + 1}" height="${maxY - minY + 1}" fill="${mainColor}" stroke="${mainColor}" stroke-width="2"/>\n`;
      
      // 简单的文本（如果logo包含文字）
      svgContent += `<text x="${this.width / 2}" y="${this.height / 2 + 10}" font-family="Arial" font-size="24" font-weight="bold" fill="${mainColor === '#ffffff' ? '#000000' : '#ffffff'}" text-anchor="middle">digifactory</text>\n`;
    }
    
    svgContent += `</svg>`;
    
    // 保存SVG文件
    fs.writeFileSync(path.join(__dirname, 'public', 'images', 'logo.svg'), svgContent);
    console.log('Conversion completed! SVG file saved as public/images/logo.svg');
  })
  .on('error', function(err) {
    console.error('Error parsing PNG:', err);
  });

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}