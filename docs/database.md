# Database Documentation

## Schema

Check out the full database schema in [`schema.sql`](schema.sql).

## Guest

| Field            | Type     | Description                                |
| ---------------- | -------- | ------------------------------------------ |
| id               | UUID     | Unique identifier for the guest            |
| createdAt        | DateTime | When the guest was created                 |
| fullName         | String   | Guest’s full name                          |
| email            | String   | Guest’s email address                      |
| nationalityCode  | String   | 2-letter ISO code representing nationality |
| nationalId       | String   | National identification number             |
| dateOfBirth      | Date     | Guest’s date of birth                      |
| hasAccessibility | Boolean  | Whether the guest requires accessibility   |

---

## Suites

| Field       | Type     | Description                                 |
| ----------- | -------- | ------------------------------------------- |
| id          | Serial   | Auto-increment identifier (not primary key) |
| code        | String   | Unique code for the suite (Primary Key)     |
| name        | String   | Name of the suite                           |
| maxCapacity | Int      | Maximum number of guests allowed            |
| price       | Numeric  | Price per night for the suite               |
| discount    | Numeric  | Discount on the suite price (default 0)     |
| image       | Text     | URL or path to the suite image              |
| description | Text     | Description of the suite                    |
| createdAt   | DateTime | When the suite was created                  |

---

## Reservations

## Reservations

| Field        | Type     | Description                                           |
| ------------ | -------- | ----------------------------------------------------- |
| id           | Serial   | Unique identifier for the reservation                 |
| createdAt    | DateTime | When the reservation was created                      |
| startDate    | Date     | Reservation start date                                |
| endDate      | Date     | Reservation end date                                  |
| numNights    | Int      | Number of nights (must be > 0)                        |
| numGuests    | Int      | Number of guests (must be > 0)                        |
| suitePrice   | Numeric  | Price of the suite per reservation                    |
| extraCharge  | Numeric  | Any extra charges for the reservation                 |
| totalCharge  | Numeric  | Total charge including suite price and extra charges  |
| remark       | Text     | Any notes or remarks for the reservation              |
| status       | Text     | Reservation status (e.g., confirmed, cancelled)       |
| hasBreakfast | Boolean  | Whether breakfast is included (default FALSE)         |
| suiteCode    | String   | Reference to the suite (foreign key to `suites.code`) |
| guestId      | UUID     | Reference to the guest (foreign key to `guests.id`)   |
| isPaid       | Boolean  | Whether the reservation has been paid (default FALSE) |
