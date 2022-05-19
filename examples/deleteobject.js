import { S3Client, DeleteObjectCommand } from '../mod.ts';

const client = new S3Client({
	region: '',
	credentials: {
		accessKeyId: '',
		secretAccessKey: ''
	}
});

await client.send(
	new DeleteObjectCommand({
		Bucket: '',
		Key: ''
	})
);
