import { ServiceCard } from "../_types";

export const SalesOptions = [
  { name: "Vehicle", url: "/dashboard/sales/vehicle" },
  { name: "Residence", url: "/dashboard/sales/residence" },
  { name: "Business", url: "/dashboard/sales/business" },
  { name: "Other Property", url: "/dashboard/sales/otherproperty" },
  { name: "Vehicle Spare Part", url: "/dashboard/sales/vehiclespare" },
  { name: "Motor Cycle", url: "/dashboard/sales/motorcycle" },
  {
    name: "Construction Machine",
    url: "/dashboard/sales/constructionmachine",
  },
  { name: "Lease", url: "/dashboard/sales/lease" },
];

export const RentalOptions = [
  { name: "Vehicle", url: "/dashboard/rental/vehicle" },
  { name: "Residence", url: "/dashboard/rental/residence" },
  { name: "Business", url: "/dashboard/rental/business" },
  { name: "Other Property", url: "/dashboard/rental/otherproperty" },
  { name: "Vehicle Spare Part", url: "/dashboard/rental/vehiclespare" },
  { name: "Motor Cycle", url: "/dashboard/rental/motorcycle" },
  {
    name: "Construction Machine",
    url: "/dashboard/rental/constructionmachine",
  },
  { name: "Lease", url: "/dashboard/rental/lease" },
];
export const GiftsOptions = [
  { name: "Vehicle", url: "/dashboard/gifts/vehicle" },
  { name: "Residence", url: "/dashboard/gifts/residence" },
  { name: "Business", url: "/dashboard/gifts/business" },
  { name: "Other Property", url: "/dashboard/gifts/otherproperty" },
  { name: "Vehicle Spare Part", url: "/dashboard/gifts/vehiclespare" },
  { name: "Motor Cycle", url: "/dashboard/gifts/motorcycle" },
  {
    name: "Construction Machine",
    url: "/dashboard/gifts/constructionmachine",
  },
  { name: "Lease", url: "/dashboard/gifts/lease" },
];
export const FamilyOptions = [
  { name: "Normal", url: "/dashboard/family-representation/normal" },
];

export const GeneralOrSpecificOptions = [
  {
    name: "General Representation",
    url: "/dashboard/general-specific-representation/general",
  },
];

export const LoanOptions = [{ name: "Normal", url: "/dashboard/loan/normal" }];

export const AllUrls = [
  ...SalesOptions,
  ...RentalOptions,
  ...GiftsOptions,
  ...FamilyOptions,
  ...GeneralOrSpecificOptions,
  ...LoanOptions,
];
