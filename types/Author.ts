export type Author = {
  data?: {
    id?: number;
    attributes?: {
      name?: string;
      description?: string;
      photo?: {
        data?: {
          id?: number;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: {
              large?: {
                url?: string;
              };
              small?: {
                url?: string;
              };
              medium?: {
                url?: string;
              };
              thumbnail?: {
                url?: string;
              };
            };
          };
        };
      };
    };
  };
};
