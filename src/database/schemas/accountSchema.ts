import { tableSchema } from '@nozbe/watermelondb';

export const accountSchema = tableSchema({
  name: 'accounts',
  columns: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'color',
      type: 'string',
    },
  ],
});
