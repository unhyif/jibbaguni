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
            address: DatabaseJson.VisitLogAddress | null;
            realEstate: DatabaseJson.VisitLogRealEstate | null;
          };
          Insert: {
            address?: DatabaseJson.VisitLogAddress;
            realEstate?: DatabaseJson.VisitLogRealEstate;
          };
          Update: {
            address?: DatabaseJson.VisitLogAddress;
            realEstate?: DatabaseJson.VisitLogRealEstate;
          };
        };
      };
    };
  }
>;
