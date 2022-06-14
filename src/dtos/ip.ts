export interface IpFormatDTO {
  insertedId: string
  timestamp: string
  severify: string
  logName: string
  receiveTimestamp: string
  jsonPayload: {
    message: string
    metadata: any
  }
  resource: {
    type: string
    labels: {
      project_id: string
      instance_id: string
      zone: string
    }
  }
}
