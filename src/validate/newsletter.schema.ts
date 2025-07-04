import { JSONSchema7 } from 'json-schema';
import { v4 } from 'uuid';
import { numberDefinition, quotedOptionsSchema } from './message.schema';

export const newsletterTextSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    channel: { ...numberDefinition },
    text: { type: 'string' },
    linkPreview: { type: 'boolean' },
    delay: { type: 'integer', description: 'Enter a value in milliseconds' },
    quoted: { ...quotedOptionsSchema },
    everyOne: { type: 'boolean', enum: [true, false] },
    mentioned: {
      type: 'array',
      minItems: 1,
      uniqueItems: true,
      items: {
        type: 'string',
        pattern: '^\\d+',
        description: '"mentioned" must be an array of numeric strings',
      },
    },
  },
  required: ['channel', 'text'],
};

export const newsletterMediaSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    channel: { ...numberDefinition },
    mediatype: { type: 'string', enum: ['image', 'document', 'video', 'audio', 'ptv'] },
    mimetype: { type: 'string' },
    media: { type: 'string' },
    fileName: { type: 'string' },
    caption: { type: 'string' },
    delay: { type: 'integer', description: 'Enter a value in milliseconds' },
    quoted: { ...quotedOptionsSchema },
    everyOne: { type: 'boolean', enum: [true, false] },
    mentioned: {
      type: 'array',
      minItems: 1,
      uniqueItems: true,
      items: {
        type: 'string',
        pattern: '^\\d+',
        description: '"mentioned" must be an array of numeric strings',
      },
    },
  },
  required: ['channel', 'mediatype'],
};
