import { MediaType, Metadata } from './sendMessage.dto';

export class SendNewsletterTextDto extends Metadata {
  channel: string;
  text: string;
}

export class SendNewsletterMediaDto extends Metadata {
  channel: string;
  mediatype: MediaType;
  mimetype?: string;
  caption?: string;
  fileName?: string;
  media: string;
}
