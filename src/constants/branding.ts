/**
 * This file contains branding constants for the TechKshitiz website, including event name, edition, full title, tagline, and brochure URL.
 * 
 * The constants are defined as a read-only object using "as const" to ensure that the fields cannot be modified and their types are inferred precisely.
 * 
 * Usage:
 * - Import the SITE_INFO object in other parts of the application to access branding information.  
 */

export const SITE_INFO = {
  eventName: "TechKshitiz",
  editionYear: "'26",
  fullTitle: "TechKshitiz",
  tagline: "Join us to code, create, and connect with passionate minds.",
  brochureUrl: "https://drive.google.com/file/d/1Xy5Xoz2Y5NWWf1WHy3DXp6HNup4magm3/view?usp=sharing",
  websiteUrl: "https://www.techkshitiz.in",
  collegeName: "Government Engineering College, Siwan",
  email: "gecsiwan.techkshitiz@gmail.com",
  contactPhone: "+917547899822",
  address: "Campus of Siwan Engineering College, Mairwa Road, Old Suta Mill Factory, Bhada Khurd, Siwan Pin -841226",
} as const; // "as const" makes fields read-only and infers precise types