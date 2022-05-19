import { S3Client, GetObjectCommand, readableStreamToUint8Array } from "https://deno.land/x/greenant_aws_s3_client@v0.0.2/mod.ts";

const client = new S3Client({
	region: '',
	credentials: {
		accessKeyId: '',
		secretAccessKey: ''
	}
});

const filename = '';
const file = await Deno.readFile(filename);

await client.send(
	new PutObjectCommand({
		Bucket: '',
		Key: '',
		Body: file,
		ContentLength: file.length,
		ContentType: ''
	})
);

