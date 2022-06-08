-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS cats CASCADE;

CREATE TABLE cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    lives INT NOT NULL,
    isSidekick BOOLEAN NOT NULL,
)