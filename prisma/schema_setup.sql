-- schema_setup.sql

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- Hashed password
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the smart_meter_hubs table with location and is_online
CREATE TABLE IF NOT EXISTS smart_meter_hubs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    hub_name VARCHAR(255) NOT NULL,
    location VARCHAR(255),  -- Location field for hub
    is_online BOOLEAN DEFAULT false, -- New is_online field to track if hub is online
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the meters table with name and location
CREATE TABLE IF NOT EXISTS meters (
    id SERIAL PRIMARY KEY,
    hub_id INTEGER REFERENCES smart_meter_hubs(id) ON DELETE CASCADE,
    meter_id VARCHAR(255) UNIQUE NOT NULL,  -- Unique identifier (e.g., MAC000002)
    name VARCHAR(255) NOT NULL,             -- Name field for the meter
    location VARCHAR(255),                  -- Location field for the meter
    state BOOLEAN DEFAULT TRUE,             -- Meter active/inactive
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the meter_data table
CREATE TABLE IF NOT EXISTS meter_data (
    id SERIAL PRIMARY KEY,
    meter_id INTEGER REFERENCES meters(id) ON DELETE CASCADE,
    timestamp TIMESTAMP NOT NULL,  -- When the data was collected
    energy DECIMAL(10, 2) NOT NULL,  -- Energy consumption in kWh/h
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the meter_config table (Optional)
CREATE TABLE IF NOT EXISTS meter_config (
    id SERIAL PRIMARY KEY,
    meter_id INTEGER REFERENCES meters(id) ON DELETE CASCADE,
    config JSONB,  -- Configuration data in JSON format
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Function to auto-update the updated_at column
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to update the updated_at column on each table
CREATE TRIGGER update_user_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

CREATE TRIGGER update_hub_timestamp
BEFORE UPDATE ON smart_meter_hubs
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

CREATE TRIGGER update_meter_timestamp
BEFORE UPDATE ON meters
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

CREATE TRIGGER update_meter_data_timestamp
BEFORE UPDATE ON meter_data
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();


-- Add is_online to smart_meter_hubs if not already added
ALTER TABLE smart_meter_hubs ADD COLUMN IF NOT EXISTS is_online BOOLEAN DEFAULT false;
