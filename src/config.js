export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-upload-store"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ff8gtbyd0b.execute-api.us-east-2.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_TJ6X0x8N9",
    APP_CLIENT_ID: "4c20dcs96834kevkdd2e1tl10t",
    IDENTITY_POOL_ID: "us-east-2:e6ecafaa-f2da-4129-bc5a-7be438031c80"
  }
};
