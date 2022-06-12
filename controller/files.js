const { ImgurClient } = require('imgur');
const sizeOf = require('image-size')
const { successHandle } = require('../service/responseHandler');
const appError = require('../service/appError');
const handleErrorAsync = require('../service/handleErrorAsync');

const files = {
  createImage: handleErrorAsync(async (req, res, next) => {
    const client = new ImgurClient({
      clientId: process.env.IMGUR_CLIENT_ID,
      clientSecret: process.env.IMGUR_CLIENT_SECRET,
      refreshToken: process.env.IMGUR_REFRESH_TOKEN,
    });
    // 加入名稱判斷是否為個人資訊圖片上傳
    const { 
      file,
      body: { type }
    } = req
    if (!file) {
      return appError(400, '無選取檔案', next);
    }
    // 判斷帶有名稱特定值才判斷圖片寬高
    if (type === 'avatar') {
      const dimensions = sizeOf(file.buffer);
      if(dimensions.width !== dimensions.height) {
        return appError(400, "圖片長寬不符合 1:1 尺寸。", next);
      }
    }
      const response = await client.upload({
        image: Buffer.from(file.buffer).toString('base64'),
        type: 'base64',
        album: process.env.IMGUR_ALBUM_ID
      });
      successHandle(res, { link: response.data.link });
  }),
};

module.exports = files
