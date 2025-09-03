-- Settings table
CREATE TABLE settings
(
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMPTZ DEFAULT NOW(),
    minResvLength INT NOT NULL,
    maxResvLength INT NOT NULL,
    maxGuestsPerResv INT NOT NULL,
    breakfastPrice NUMERIC(10,2) NOT NULL
);

-- Guests table
CREATE TABLE guests
(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    fullName VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    nationalityCode CHAR(2),
    nationalId VARCHAR(50),
    createdAt TIMESTAMPTZ DEFAULT NOW(),
    dateOfBirth DATE,
    hasAccessibility BOOLEAN DEFAULT FALSE
);

-- Suites table
CREATE TABLE suites
(
    id SERIAL,
    code VARCHAR(100) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    maxCapacity INT NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    discount NUMERIC(5,2) DEFAULT 0,
    image TEXT,
    description TEXT,
    createdAt TIMESTAMPTZ DEFAULT NOW()
);

-- Reservations table
CREATE TABLE reservations
(
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMPTZ DEFAULT NOW(),
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    numNights INT CHECK (numNights > 0),
    numGuests INT CHECK (numGuests > 0),
    suitePrice NUMERIC(10,2) NOT NULL,
    extraCharge NUMERIC(10,2) NOT NULL,
    totalCharge NUMERIC(10,2) NOT NULL,
    remark TEXT,
    status TEXT,
    hasBreakfast BOOLEAN DEFAULT FALSE,
    suiteCode VARCHAR(100) REFERENCES suites(code) ON DELETE CASCADE,
    guestId UUID REFERENCES guests(id) ON DELETE CASCADE,
    isPaid BOOLEAN DEFAULT FALSE
);