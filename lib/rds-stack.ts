import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';


// Props

interface RDSStackProps extends cdk.StackProps {
    vpc: ec2.Vpc;
}

export class RDSStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: RDSStackProps) {
        super(scope, id, props);


        // RDS Configuration will go here

       
const database = new rds.DatabaseInstance(this, 'MySQLDatabase', {
  engine: rds.DatabaseInstanceEngine.mysql({
    version: rds.MysqlEngineVersion.VER_8_0_46
  }),

  instanceType: ec2.InstanceType.of(
    ec2.InstanceClass.BURSTABLE3,
    ec2.InstanceSize.MICRO
  ),

  vpc: props.vpc,

  vpcSubnets: {
    subnetType: ec2.SubnetType.PRIVATE_ISOLATED
  },

  publiclyAccessible: false,

  allocatedStorage: 20,
  maxAllocatedStorage: 50,
  storageType: rds.StorageType.GP3,
  storageEncrypted: true,

  databaseName: 'appdb',

  credentials: rds.Credentials.fromGeneratedSecret('dbadmin'),

  multiAz: false,

  removalPolicy: cdk.RemovalPolicy.DESTROY,
  deleteAutomatedBackups: true
});


// Add tags.
cdk.Tags.of(database).add('Project', 'VPC-EC2-RDS');
cdk.Tags.of(database).add('Environment', 'Development');
cdk.Tags.of(database).add('ManagedBy', 'AWS-CDK');



new cdk.CfnOutput(this, 'RdsEndpoint', {
  value: database.dbInstanceEndpointAddress,
  description: 'RDS MySQL Database Endpoint'
});


    }
}