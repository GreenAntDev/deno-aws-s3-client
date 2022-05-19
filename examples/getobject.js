import { S3Client, GetObjectCommand, readableStreamToUint8Array } from '../mod.ts';

const client = new S3Client({
	region: '',
	credentials: {
		accessKeyId: '',
		secretAccessKey: ''
	}
});

const objectKey = '';

const { Body } = await client.send(
	new GetObjectCommand({
		Bucket: '',
		Key: objectKey
	})
);

Deno.writeFile(objectKey, await readableStreamToUint8Array(Body))
