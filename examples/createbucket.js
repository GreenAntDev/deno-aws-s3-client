import { S3Client, CreateBucketCommand } from '../mod.ts';

const client = new S3Client({
	region: '',
	credentials: {
		accessKeyId: '',
		secretAccessKey: ''
	}
});

await client.send(
	new CreateBucketCommand({
		Bucket: ''
	})
);

