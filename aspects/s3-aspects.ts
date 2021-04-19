import * as cdk from '@aws-cdk/core';
import s3 = require('@aws-cdk/aws-s3');

export class BucketVersioningChecker implements cdk.IAspect {
    public visit(node: cdk.IConstruct): void {
        // Ensure our node is a CfnBucket
        if (node instanceof s3.CfnBucket) {

            // Check for versioning property, exclude the case where the property
            // can be a token (IResolvable).
            if (!node.versioningConfiguration
                || (!cdk.Tokenization.isResolvable(node.versioningConfiguration)
                    && node.versioningConfiguration.status !== 'Enabled')) {
                cdk.Annotations.of(node).addError('Bucket versioning is not enabled');
            }
        }
    }
}

export class BucketEncryptionChecker implements cdk.IAspect {
    public visit(node: cdk.IConstruct): void {
        // Ensure our node is a CfnBucket
        if (node instanceof s3.CfnBucket) {
            // Check for encryption property
            if (!node.bucketEncryption) {
                cdk.Annotations.of(node).addError('Bucket encryption is not enabled');
            }
        }
    }
}