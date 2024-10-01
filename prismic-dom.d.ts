declare module 'prismic-dom' {
  export const RichText: {
    asHtml: (document: any, options?: any) => string;
    asText: (document: any) => string;
  };
}
