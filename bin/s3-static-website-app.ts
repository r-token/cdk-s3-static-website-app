#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3StaticWebsiteAppStack } from '../lib/s3-static-website-app-stack';

const app = new cdk.App();

const s3WebsiteProps = {
  projectName: 'mywebsite',
  s3WebsiteDeploySource: './assets',
  websiteIndexDocument: 'index.html',
  websiteErrorDocument: 'index.html',
  cdnComment: 'CDN for static website app',
  cdnWebsiteIndexDocument: 'index.html',
  useCdn: false
}

new S3StaticWebsiteAppStack(app, 'S3StaticWebsiteAppStack', s3WebsiteProps)
