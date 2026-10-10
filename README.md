# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   type-check the project
* `npm run watch`   watch for changes and type-check
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

Install dependencies
npm install

Bootstrap CDK (first time only)
cdk bootstrap

Deploy all stacks
cdk deploy

Destroy resources when done (to avoid charges)
cdk destroy ⚠️ Notes RDS is configured with RemovalPolicy.DESTROY (not for production) 

Credentials are generated automatically using AWS Secrets Manager 

No NAT Gateway (private subnets are isolated)

What This Project Demonstrates Infrastructure as Code using AWS CDK Multi-stack architecture design Resource sharing between stacks High availability with Multi-AZ setup Secure infrastructure (private subnets, isolated DB)
