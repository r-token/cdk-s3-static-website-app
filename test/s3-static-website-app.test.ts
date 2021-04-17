import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as S3StaticWebsiteApp from '../lib/s3-static-website-app-stack';

test('Empty Stack', () => {
    // const app = new cdk.App();
    // // WHEN
    // const stack = new S3StaticWebsiteApp.S3StaticWebsiteAppStack(app, 'MyTestStack');
    // // THEN
    // expectCDK(stack).to(matchTemplate({
    //   "Resources": {}
    // }, MatchStyle.EXACT))
});
