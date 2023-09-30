export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      _FurnitureToVisitLog: {
        Row: {
          A: number;
          B: number;
        };
        Insert: {
          A: number;
          B: number;
        };
        Update: {
          A?: number;
          B?: number;
        };
        Relationships: [
          {
            foreignKeyName: '_FurnitureToVisitLog_A_fkey';
            columns: ['A'];
            referencedRelation: 'Furniture';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: '_FurnitureToVisitLog_B_fkey';
            columns: ['B'];
            referencedRelation: 'VisitLog';
            referencedColumns: ['id'];
          },
        ];
      };
      _prisma_migrations: {
        Row: {
          applied_steps_count: number;
          checksum: string;
          finished_at: string | null;
          id: string;
          logs: string | null;
          migration_name: string;
          rolled_back_at: string | null;
          started_at: string;
        };
        Insert: {
          applied_steps_count?: number;
          checksum: string;
          finished_at?: string | null;
          id: string;
          logs?: string | null;
          migration_name: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Update: {
          applied_steps_count?: number;
          checksum?: string;
          finished_at?: string | null;
          id?: string;
          logs?: string | null;
          migration_name?: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Relationships: [];
      };
      Furniture: {
        Row: {
          code: Database['public']['Enums']['FurnitureEnum'];
          id: number;
        };
        Insert: {
          code: Database['public']['Enums']['FurnitureEnum'];
          id?: number;
        };
        Update: {
          code?: Database['public']['Enums']['FurnitureEnum'];
          id?: number;
        };
        Relationships: [];
      };
      VisitLog: {
        Row: {
          address: Json | null;
          canPark: boolean | null;
          createdAt: string;
          direction: Database['public']['Enums']['DirectionEnum'] | null;
          exclusiveArea: number | null;
          floor: number | null;
          hasElevator: boolean | null;
          id: number;
          link: string | null;
          maintenanceCost: number | null;
          monthly: number | null;
          price: number | null;
          realEstate: Json | null;
          supplyArea: number | null;
          transactionType:
            | Database['public']['Enums']['TransactionTypeEnum']
            | null;
          updatedAt: string;
          userId: number;
        };
        Insert: {
          address?: Json | null;
          canPark?: boolean | null;
          createdAt?: string;
          direction?: Database['public']['Enums']['DirectionEnum'] | null;
          exclusiveArea?: number | null;
          floor?: number | null;
          hasElevator?: boolean | null;
          id?: number;
          link?: string | null;
          maintenanceCost?: number | null;
          monthly?: number | null;
          price?: number | null;
          realEstate?: Json | null;
          supplyArea?: number | null;
          transactionType?:
            | Database['public']['Enums']['TransactionTypeEnum']
            | null;
          updatedAt: string;
          userId: number;
        };
        Update: {
          address?: Json | null;
          canPark?: boolean | null;
          createdAt?: string;
          direction?: Database['public']['Enums']['DirectionEnum'] | null;
          exclusiveArea?: number | null;
          floor?: number | null;
          hasElevator?: boolean | null;
          id?: number;
          link?: string | null;
          maintenanceCost?: number | null;
          monthly?: number | null;
          price?: number | null;
          realEstate?: Json | null;
          supplyArea?: number | null;
          transactionType?:
            | Database['public']['Enums']['TransactionTypeEnum']
            | null;
          updatedAt?: string;
          userId?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'VisitLog_userId_fkey';
            columns: ['userId'];
            referencedRelation: 'User';
            referencedColumns: ['id'];
          },
        ];
      };
      VisitLogImage: {
        Row: {
          id: number;
          url: string;
          visitLogId: number;
        };
        Insert: {
          id?: number;
          url: string;
          visitLogId: number;
        };
        Update: {
          id?: number;
          url?: string;
          visitLogId?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'VisitLogImage_visitLogId_fkey';
            columns: ['visitLogId'];
            referencedRelation: 'VisitLog';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      DirectionEnum: 'EAST' | 'WEST' | 'SOUTH' | 'NORTH';
      FurnitureEnum:
        | 'AIR_CONDITIONER'
        | 'BED'
        | 'CLOSET'
        | 'DESK'
        | 'FRIDGE'
        | 'INDUCTION'
        | 'MICROWAVE'
        | 'SHOE_CLOSET'
        | 'SINK'
        | 'STOVE'
        | 'TV'
        | 'WASHING_MACHINE';
      TransactionTypeEnum: 'MONTHLY_RENT' | 'JEONSE' | 'SALE';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
