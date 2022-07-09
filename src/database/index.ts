import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import Database from '@nozbe/watermelondb/Database';
import { models } from './models';

import { schemas } from './schemas';

const adapter = new SQLiteAdapter({
  dbName: 'MongoalDB',
  schema: schemas,
});

export const database = new Database({
  adapter,
  modelClasses: models,
});
