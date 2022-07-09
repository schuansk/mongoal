import { Model } from '@nozbe/watermelondb';
import { date, field, relation } from '@nozbe/watermelondb/decorators';
import AccountModel from './accountModel';
import CategoryModel from './categoryModel';

export default class TransactionModel extends Model {
  static table = 'transactions';

  static associations = {
    category: {
      type: 'belongs_to',
      key: 'category_id',
    },
    account: {
      type: 'belongs_to',
      key: 'account_id',
    },
  } as const;

  @field('value')
  value!: number;

  @field('deposit')
  deposit!: boolean;

  @date('created_at')
  createdAt!: string;

  @date('updated_at')
  updatedAt!: string;

  @relation('categories', 'category_id')
  category!: CategoryModel;

  @relation('accounts', 'account_id')
  account!: AccountModel;
}
