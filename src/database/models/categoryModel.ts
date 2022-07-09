import { Model } from '@nozbe/watermelondb';
import { children, field } from '@nozbe/watermelondb/decorators';

export default class CategoryModel extends Model {
  static table = 'categories';

  static associations = {
    transactions: {
      type: 'has_many',
      foreignKey: 'category_id',
    },
  } as const;

  @field('name')
  name!: string;

  @field('icon')
  icon!: string;

  @children('transactions')
  transactions!: unknown;
}
