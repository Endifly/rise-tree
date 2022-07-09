export interface ImageType {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  url: string;
  width: number;
}

export interface FormatType {
  large: ImageType;
  medium: ImageType;
  small: ImageType;
  thumbnail: ImageType;
}

export interface BannerType {
  alternativeText: string;
  caption: string;
  created_at: string;
  ext: string;
  formats: FormatType;
  hash: string;
  height: number;
  id: number;
  mime: string;
  name: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  size: number;
  updated_at: string;
  url: string;
  width: number;
}

export type BannerSizeType = 1 | 2 | 3 | 4;