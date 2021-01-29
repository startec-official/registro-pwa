export class VerifySetMap {
  private static stringMapArray = [
    "Review Data Privacy Act",
    "All Field/s in the Personal Information Section",
    "House OR Residence",
    "Zone OR Street",
    "Sudivision OR Barangay",
    "City",
    "Province",
    "Region"
  ]

  public static getMessage(paramater: number): string {
    return VerifySetMap.stringMapArray[paramater];
  }
}