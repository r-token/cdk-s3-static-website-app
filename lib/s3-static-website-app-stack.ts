import * as cdk from '@aws-cdk/core';
import * as s3website from '@r-token/s3-static-website-construct'

export interface S3StaticWebsiteAppStackProps extends cdk.StackProps {
  projectName: string,
  s3WebsiteDeploySource: string,
  websiteIndexDocument: string,
  websiteErrorDocument: string,
  cdnWebsiteIndexDocument: string,
  cdnComment: string,
  useCdn: boolean,
  bucketVersioned: boolean,
  requireBucketEncryption: boolean
} 

export class S3StaticWebsiteAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: S3StaticWebsiteAppStackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const s3StaticWebsite = new s3website.S3StaticWebsiteConstruct(this, 'MyS3Website', {
      projectName: props.projectName,
      s3WebsiteDeploySource: props.s3WebsiteDeploySource,
      websiteIndexDocument: props.websiteIndexDocument,
      websiteErrorDocument: props.websiteErrorDocument,
      cdnWebsiteIndexDocument: props.cdnWebsiteIndexDocument,
      cdnComment: props.cdnComment,
      useCdn: props.useCdn,
      bucketVersioned: props.bucketVersioned,
      requireBucketEncryption: props.requireBucketEncryption
    })
  }
}
