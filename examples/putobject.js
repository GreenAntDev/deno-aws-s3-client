import { S3Client, PutObjectCommand } from '../mod.ts';

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

