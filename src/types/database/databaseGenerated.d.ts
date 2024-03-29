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
      _furnitureTovisitLog: {
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
            foreignKeyName: '_furnitureTovisitLog_A_fkey';
            columns: ['A'];
            isOneToOne: false;
            referencedRelation: 'furniture';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: '_furnitureTovisitLog_B_fkey';
            columns: ['B'];
            isOneToOne: false;
            referencedRelation: 'visitLog';
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
      furniture: {
        Row: {
          id: number;
          name: Database['public']['Enums']['furnitureNameEnum'];
        };
        Insert: {
          id?: number;
          name: Database['public']['Enums']['furnitureNameEnum'];
        };
        Update: {
          id?: number;
          name?: Database['public']['Enums']['furnitureNameEnum'];
        };
        Relationships: [];
      };
      userProfile: {
        Row: {
          id: string;
        };
        Insert: {
          id: string;
        };
        Update: {
          id?: string;
        };
        Relationships: [];
      };
      visitLog: {
        Row: {
          address: Json | null;
          canPark: boolean;
          createdAt: string;
          direction: Database['public']['Enums']['directionEnum'];
          exclusiveArea: number | null;
          floor: number | null;
          hasElevator: boolean;
          id: number;
          isFavorite: boolean;
          link: string | null;
          maintenanceCost: number | null;
          memo: string | null;
          monthly: number | null;
          price: number | null;
          realEstate: Json | null;
          supplyArea: number | null;
          transactionType: Database['public']['Enums']['transactionTypeEnum'];
          updatedAt: string;
          userProfileId: string;
        };
        Insert: {
          address?: Json | null;
          canPark?: boolean;
          createdAt?: string;
          direction: Database['public']['Enums']['directionEnum'];
          exclusiveArea?: number | null;
          floor?: number | null;
          hasElevator?: boolean;
          id?: number;
          isFavorite?: boolean;
          link?: string | null;
          maintenanceCost?: number | null;
          memo?: string | null;
          monthly?: number | null;
          price?: number | null;
          realEstate?: Json | null;
          supplyArea?: number | null;
          transactionType: Database['public']['Enums']['transactionTypeEnum'];
          updatedAt: string;
          userProfileId: string;
        };
        Update: {
          address?: Json | null;
          canPark?: boolean;
          createdAt?: string;
          direction?: Database['public']['Enums']['directionEnum'];
          exclusiveArea?: number | null;
          floor?: number | null;
          hasElevator?: boolean;
          id?: number;
          isFavorite?: boolean;
          link?: string | null;
          maintenanceCost?: number | null;
          memo?: string | null;
          monthly?: number | null;
          price?: number | null;
          realEstate?: Json | null;
          supplyArea?: number | null;
          transactionType?: Database['public']['Enums']['transactionTypeEnum'];
          updatedAt?: string;
          userProfileId?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'visitLog_userProfileId_fkey';
            columns: ['userProfileId'];
            isOneToOne: false;
            referencedRelation: 'userProfile';
            referencedColumns: ['id'];
          },
        ];
      };
      visitLogImage: {
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
            foreignKeyName: 'visitLogImage_visitLogId_fkey';
            columns: ['visitLogId'];
            isOneToOne: false;
            referencedRelation: 'visitLog';
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
      directionEnum: 'EAST' | 'WEST' | 'SOUTH' | 'NORTH';
      furnitureNameEnum:
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
      transactionTypeEnum: 'MONTHLY_RENT' | 'JEONSE' | 'SALE';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
