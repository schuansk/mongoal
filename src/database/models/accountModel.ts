import { Model } from '@nozbe/watermelondb';
import { children, field } from '@nozbe/watermelondb/decorators';

export default class AccountModel extends Model {
  static table = 'accounts';

  public static associations = {
    transactions: {
      type: 'has_many',
      foreignKey: 'account_id',
    },
  } as const;

  @field('name')
  name!: string;

  @field('color')
  color!: string;

  @children('transactions')
  transactions!: unknown;
}
