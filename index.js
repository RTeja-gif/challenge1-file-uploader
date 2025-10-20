import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // serve frontend


const s3 = new S3Client({ region: process.env.AWS_REGION });

app.post("/sign", async (req, res) => {
  try {
    const { filename, contentType } = req.body;
    if (!filename || !contentType) return res.status(400).json({ error: "filename and contentType required" });

    const Key = `${Date.now()}-${filename}`;
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key,
      ContentType: contentType,
    });

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 300 });

    res.json({
      url: signedUrl,
      publicUrl: `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${Key}`
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to sign URL" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
