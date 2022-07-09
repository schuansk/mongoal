import { appSchema } from '@nozbe/watermelondb';
import { accountSchema } from './accountSchema';
import { categorySchema } from './categorySchema';
import { transactionSchema } from './transactionSchema';

export const schemas = appSchema({
  version: 1,
  tables: [categorySchema, accountSchema, transactionSchema],
});
