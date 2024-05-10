export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type GetExampleRequest = {
  unknown
}

export type GetExampleResponseOK = unknown
export type GetExampleResponses =
  FullResponse<GetExampleResponseOK, 200>

export type PostApiV1PromptRequest = {
  'prompt': string;
}

export type PostApiV1PromptResponseOK = {
  'response': string;
}
export type PostApiV1PromptdefaultResponse = {
  'code'?: string;
  'message': string;
}
export type PostApiV1PromptResponses =
  PostApiV1PromptResponseOK
  | PostApiV1PromptdefaultResponse

export type PostApiV1StreamRequest = {
  'prompt': string;
}

export type PostApiV1StreamResponseOK = unknown
export type PostApiV1StreamResponses =
  FullResponse<PostApiV1StreamResponseOK, 200>



export interface Ai {
  setBaseUrl(newUrl: string) : void;
  getExample(req?: GetExampleRequest): Promise<GetExampleResponses>;
  postApiV1Prompt(req?: PostApiV1PromptRequest): Promise<PostApiV1PromptResponses>;
  postApiV1Stream(req?: PostApiV1StreamRequest): Promise<PostApiV1StreamResponses>;
}
type PlatformaticFrontendClient = Omit<AI, 'setBaseUrl'>
export default function build(url: string): PlatformaticFrontendClient
