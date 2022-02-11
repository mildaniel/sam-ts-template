export interface LambdaResponse {
    statusCode: number,
    body: string
}

export interface ServerResponse {
    data: ServerData
  }
  
interface ServerData {
    trim(): string
}
