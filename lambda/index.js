const AWS = require("aws-sdk");
const sharp = require("sharp");

const s3 = new AWS.s3();

exports.handler = (event, context, callback) => {
  const Bucket = event.Records[0].s3.bucket.name; // name은 s3 생성한 이름
  const Key = decodeURIComponent(event.Records[0].s3.object.key); // original/파일명.png
  console.log(Bucket, Key);
  const filename = Key.split("/")[key.split("/").length - 1];
  const ext = Key.split(".")[key.split(".").length - 1].toLowerCase(); // 사용자가 확장자 대문 입력 대응
  const requiredFormat = ext === "jpg" ? "jpeg" : ext;
  console.log("filename", filename, "ext", ext);
  try {
    const s3Object = await s3.getObject({ Bucket, Key }).promise();
    console.log("original", s3Object.Body.length);
    const resizedImage = await sharp(s3Object.Body)
      .resize(400, 400, { fit: "inside" })
      .toFormat(requiredFormat)
      .toBuffer();
    await s3
      .putObject({
        Bucket,
        Key: `thumb/${filename}`,
        Body: resizedImage,
      })
      .promise();
    console.log("put", resizedImage.length);
    return callback(null, `thumb/${filename}`);
  } catch (error) {
    console.error(error);
    return callback(error);
  }
};