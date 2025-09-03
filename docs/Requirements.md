# Hotel X - Requirements

## 1. User Management Module
- Users are hotel employees; login is required to perform tasks.
- New users can only be signed up within the application to ensure only hotel employees get accounts.
- Users can:
  - Upload an avatar
  - Change their display name
  - Change their password

## 2. Suite Management Module
- Table view listing all suites with:
  - Photo
  - Name
  - Capacity
  - Price
  - Current discount
- Users can:
  - Create new suites (with photo upload)
  - Update suite information
  - Delete suites

## 3. Reservation Management Module
- Table view listing all bookings with:
  - Arrival and departure dates
  - Status: `unconfirmed`, `checked in`, `checked out`
  - Paid amount
  - Suite and guest information
  - Number of guests
  - Number of nights
  - Guest observations
  - Breakfast selection and price
- Users can:
  - Delete bookings
  - Check in guests
  - Check out guests
- Reservation table must be **filterable by status**
- On **check-in**:
  - Users confirm payment received (payment happens outside the app)
  - Users can add breakfast for the entire stay if not already booked

## 4. Guest Management Module
- Guest data includes:
  - Full name
  - Email
  - National ID
  - Nationality
  - Country flag for identification

## 5. Dashboard Module
- Initial app screen should be a **dashboard** displaying:
  - List of guests checking in/out today, with actions available
  - Statistics for the last 7, 30, or 90 days:
    - Recent bookings
    - Sales
    - Check-ins
    - Occupancy rate
  - Charts:
    - Daily hotel sales showing `total sales` and `extras` sales (currently breakfast only)
    - Stay duration statistics (important metric for the hotel)

## 6. Application Settings Module
- Users can define app-wide settings:
  - Breakfast price
  - Minimum and maximum nights per booking
  - Maximum guests per booking

## 7. UI / UX Requirements
- App needs a **dark mode** for better usability.
