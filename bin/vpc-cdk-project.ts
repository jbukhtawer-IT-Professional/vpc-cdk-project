
import * as cdk from 'aws-cdk-lib/core';
import { VpcCdkProjectStack } from '../lib/vpc-cdk-project-stack';
import { EC2Stack } from '../lib/ec2-stack';
import { RDSStack } from '../lib/rds-stack';

const app = new cdk.App();

const vpcStack = new VpcCdkProjectStack(app, 'VpcCdkProjectStack', {});

// Create the EC2 stack and save it in a variable
const ec2Stack = new EC2Stack(app, 'MyEC2Stack', {
  vpc: vpcStack.vpc
});

// Create the RDS stack and pass it the VPC and EC2 security group
new RDSStack(app, 'RDSStack', {
  vpc: vpcStack.vpc
});

app.synth();
