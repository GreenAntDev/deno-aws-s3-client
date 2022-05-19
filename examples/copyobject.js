import { S3Client, CopyObjectCommand } from '../mod.ts';

const client = new S3Client({
	region: '',
	credentials: {
		accessKeyId: '',
		secretAccessKey: ''
	}
});

await client.send(
	new CopyObjectCommand({
		CopySource: '',
		Bucket: '',
		Key: ''
	})
);

