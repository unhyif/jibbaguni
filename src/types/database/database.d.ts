import { MergeDeep } from 'type-fest';
import { Database as DatabaseGenerated } from '~/types/database/databaseGenerated';

type TempDatabase = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        visitLog: {
          Row: {
            address: null;
            realEstate: null;
          };
          Insert: {
            address?: null;
            realEstate?: null;
          };
          Update: {
            address?: null;
            realEstate?: null;
          };
        };
      };
    };
  }
>;

export type Database = MergeDeep<
  TempDatabase,
  {
    public: {
      Tables: {
        visitLog: {
          Row: {
            address: JsonField.VisitLogAddress | null;
            realEstate: JsonField.VisitLogRealEstate | null;
          };
          Insert: {
            address?: JsonField.VisitLogAddress;
            realEstate?: JsonField.VisitLogRealEstate;
          };
          Update: {
            address?: JsonField.VisitLogAddress;
            realEstate?: JsonField.VisitLogRealEstate;
          };
        };
      };
    };
  }
>;
