const fs = require('fs');
const path = require('path');

exports.handler = async function (event, context) {
  try {
    const filePath = path.join(process.cwd(), 'attached_assets', 'Moses_Mwangi_CV.pdf');
    if (!fs.existsSync(filePath)) {
      return {
        statusCode: 404,
        body: 'PDF not found',
      };
    }

    const file = fs.readFileSync(filePath);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Moses-Mwangi-CV.pdf"',
      },
      isBase64Encoded: true,
      body: file.toString('base64'),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: String(err),
    };
  }
};
