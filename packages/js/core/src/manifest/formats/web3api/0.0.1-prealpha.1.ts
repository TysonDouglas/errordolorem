/* eslint-disable @typescript-eslint/naming-convention */
/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Web3ApiManifest {
  format: "0.0.1-prealpha.1";
  description?: string;
  repository?: string;
  mutation?: {
    schema: {
      file: string;
    };
    module: {
      language: string;
      file: string;
    };
  };
  query?: {
    schema: {
      file: string;
    };
    module: {
      language: string;
      file: string;
    };
  };
  import_redirects?: {
    uri: string;
    schema: string;
  }[];
  __type: "Web3ApiManifest";
}