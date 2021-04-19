#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3StaticWebsiteAppStack } from '../lib/s3-static-website-app-stack';
import { BucketEncryptionChecker, BucketVersioningChecker } from '../aspects/s3-aspects';

const app = new cdk.App();

const s3WebsiteProps = {
	projectName: 'mystaticsite',
  s3WebsiteDeploySource: './assets',
  websiteIndexDocument: 'index.html',
  websiteErrorDocument: 'index.html',
  cdnComment: 'CDN for static website app',
  cdnWebsiteIndexDocument: 'index.html',
  useCdn: false,
  bucketVersioned: true,
  requireBucketEncryption: true
}


new S3StaticWebsiteAppStack(app, 'CdkS3StaticWebsiteAppStack', s3WebsiteProps);

// Apply Aspects
// cdk.Aspects.of(app).add(new BucketVersioningChecker());
// cdk.Aspects.of(app).add(new BucketEncryptionChecker());