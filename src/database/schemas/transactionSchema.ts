import { tableSchema } from '@nozbe/watermelondb';

export const transactionSchema = tableSchema({
  name: 'transactions',
  columns: [
    {
      name: 'value',
      type: 'number',
    },
    {
      name: 'deposit',
      type: 'boolean',
    },
    {
      name: 'category_id',
      type: 'string',
      isIndexed: true,
    },
    {
      name: 'account_id',
      type: 'string',
      isIndexed: true,
    },
    {
      name: 'created_at',
      type: 'number',
    },
    {
      name: 'updated_at',
      type: 'number',
    },
  ],
});
