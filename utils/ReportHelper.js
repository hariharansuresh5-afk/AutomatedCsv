import fs from 'fs';
import path from 'path';
import screenshot from 'screenshot-desktop';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import ImageModule from 'docxtemplater-image-module-free';

export class ReportHelper {
  

  static imageSize = [700, 420];
  

  static screenshotCounter = {};

  static setImageSize(size) {
    ReportHelper.imageSize = size;
  }

  static normalizePlaceholder(placeholder) {
    return placeholder
      .replace(/^[\[\{%]+/, '')
      .replace(/[\]\}%]+$/, '')
      .trim();
  }

  static async takeDesktopScreenshot(stepName) {
    try {
      if (!fs.existsSync('screenshots')) {
        fs.mkdirSync('screenshots', { recursive: true });
      }

     
      if (!ReportHelper.screenshotCounter[stepName]) {
        ReportHelper.screenshotCounter[stepName] = 1;
      } else {
        ReportHelper.screenshotCounter[stepName]++;
      }

      const count = ReportHelper.screenshotCounter[stepName];
      const fileNameWithCounter = count > 1 
        ? `screenshots/${stepName}_${count}.png` 
        : `screenshots/${stepName}.png`;

      await screenshot({ filename: fileNameWithCounter });
      console.log(`✓ Captured: ${fileNameWithCounter}`);

    } catch (error) {
      console.log(`✗ Screenshot error: ${error.message}`);
    }
  }

  static async generateWordReport() {
    try {
      const content = fs.readFileSync(
        'Csvplaywrighttestcase.docx',
        'binary'
      );

      const zip = new PizZip(content);

      
      const imageModule = new ImageModule({
        centered: false,
        getImage(tagValue) {
          return fs.readFileSync(tagValue);
        },
        getSize() {
          return ReportHelper.imageSize;
        }
      });

      const doc = new Docxtemplater(zip, {
        modules: [imageModule],
        paragraphLoop: true,
        linebreaks: true
      });


      const evidenceMap = {};


      const steps = [
        { name: 'Evidence_Step_2', max: 1 },
        { name: 'Evidence_Step_4', max: 2 },
        { name: 'Evidence_Step_7', max: 2 },
        { name: 'Evidence_Step_9', max: 1 },
        { name: 'Evidence_Step_10', max: 1 }
      ];

      steps.forEach(step => {
        for (let i = 1; i <= step.max; i++) {
          const fileName = i === 1 
            ? `screenshots/${step.name}.png` 
            : `screenshots/${step.name}_${i}.png`;
          
          if (fs.existsSync(fileName)) {
            const mapKey = i === 1 ? step.name : `${step.name}_${i}`;
            evidenceMap[mapKey] = fileName;
          }
        }
      });
      
      console.log("Evidence Map:", evidenceMap);
      doc.render(evidenceMap);

      const buffer = doc.getZip().generate({
        type: 'nodebuffer'
      });

      fs.writeFileSync('GenerationofRtmdocument10.docx', buffer);
      console.log('✓ Report generated successfully');

    } catch (error) {
      console.log('✗ Word generation failed:', error.message);
    }
  }

  static resetScreenshotCounter() {
    ReportHelper.screenshotCounter = {};
  }
}