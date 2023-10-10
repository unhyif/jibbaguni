declare global {
  namespace PrismaJson {
    interface VisitLogAddress {
      x?: number;
      y?: number;
      addressStr?: string;
    }

    interface VisitLogRealEstate {
      x?: number;
      y?: number;
      placeName?: string;
    }
  }
}
